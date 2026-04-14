// src/App.jsx
import { useState, useEffect, useRef } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
  getDoc,
  query,
  orderBy,
  updateDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Login from "./login";
import "./App.css";

const SETTINGS_COLL = "settings";
const ENTRIES_COL = "ojt_entries";

export default function App() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [editingEntryId, setEditingEntryId] = useState(null);

  // Intern info
  const [internName, setInternName] = useState("");
  const [internSchool, setInternSchool] = useState("");
  const [internCourse, setInternCourse] = useState("");
  const [internReq, setInternReq] = useState("");
  const [infoSaved, setInfoSaved] = useState(false);

  // Entry form
  const today = new Date().toISOString().split("T")[0];
  const [entryDate, setEntryDate] = useState(today);
  const [timeIn, setTimeIn] = useState("");
  const [timeOut, setTimeOut] = useState("");
  const [breakMinutes, setBreakMinutes] = useState(0);
  const [status, setStatus] = useState("present");
  const [remarks, setRemarks] = useState("");
  const [formError, setFormError] = useState("");
  const [previewHours, setPreviewHours] = useState(null);

  // ─── Firebase auth + data load ───────────────────────────────────────────
  async function loadData(userData) {
    setEntries([]);
    setInternSchool("");
    setInternCourse("");
    setInternReq("");
    setInternName(userData?.fullName || "");

    try {
      if (userData?.uid) {
        const infoSnap = await getDoc(doc(db, SETTINGS_COLL, userData.uid));
        if (infoSnap.exists()) {
          const d = infoSnap.data();
          setInternSchool(d.school || "");
          setInternCourse(d.course || "");
          setInternReq(d.requiredHours || "");
          if (!userData.fullName) {
            setInternName(d.name || "");
          }
        }

        // Load only current user's entries
        const q = query(collection(db, ENTRIES_COL), where("userId", "==", userData.uid));
        const snap = await getDocs(q);
        const loadedEntries = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setEntries(loadedEntries.sort((a, b) => a.date.localeCompare(b.date)));
      }
    } catch (err) {
      console.error("Error loading data:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setAuthLoading(true);
      setLoading(true);
      if (!firebaseUser) {
        setUser(null);
        setEntries([]);
        setInternName("");
        setInternSchool("");
        setInternCourse("");
        setInternReq("");
        setLoading(false);
        setAuthLoading(false);
        return;
      }

      try {
        const userSnap = await getDoc(doc(db, "accounts", firebaseUser.uid));
        const userData = userSnap.exists()
          ? {
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              fullName: userSnap.data().fullName || "",
            }
          : {
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              fullName: "",
            };
        setUser(userData);
        if (userData.fullName) {
          setInternName(userData.fullName);
        }
        await loadData(userData);
      } catch (err) {
        console.error("Auth load error:", err);
        setLoading(false);
      } finally {
        setAuthLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  // ─── Helpers ───────────────────────────────────────────────────────────────
  function calcHours(ti, to, breakMins = 0) {
    if (!ti || !to) return 0;
    const [h1, m1] = ti.split(":").map(Number);
    const [h2, m2] = to.split(":").map(Number);
    const diff = h2 * 60 + m2 - (h1 * 60 + m1) - breakMins;
    return diff > 0 ? Math.round((diff / 60) * 100) / 100 : 0;
  }

  function fmtTime(t) {
    if (!t) return "—";
    const [h, m] = t.split(":");
    const hh = parseInt(h);
    const ampm = hh >= 12 ? "PM" : "AM";
    const h12 = hh % 12 || 12;
    return `${h12}:${m} ${ampm}`;
  }

  function fmtDate(d) {
    if (!d) return "";
    const dt = new Date(d + "T00:00:00");
    return dt.toLocaleDateString("en-PH", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  const totalHours = entries.reduce((s, e) => s + (e.hours || 0), 0);
  const daysPresent = entries.filter((e) => e.status === "present").length;
  const daysAbsent = entries.filter((e) => e.status === "absent").length;
  const reqHours = parseFloat(internReq) || 0;
  const remaining = Math.max(0, reqHours - totalHours);
  const progress = reqHours > 0 ? Math.min(100, (totalHours / reqHours) * 100) : 0;

  // ─── Preview hours as user types ──────────────────────────────────────────
  useEffect(() => {
    if (status === "present" && timeIn && timeOut) {
      const h = calcHours(timeIn, timeOut, breakMinutes);
      setPreviewHours(h > 0 ? h : null);
    } else {
      setPreviewHours(null);
    }
  }, [timeIn, timeOut, breakMinutes, status]);

  // ─── Save intern info ──────────────────────────────────────────────────────
  async function saveInternInfo() {
    setSaving(true);
    try {
      if (!user?.uid) {
        throw new Error("No authenticated user available.");
      }
      const settingsRef = doc(db, SETTINGS_COLL, user.uid);
      await setDoc(settingsRef, {
        name: user.fullName || internName,
        school: internSchool,
        course: internCourse,
        requiredHours: internReq,
      });
      setInfoSaved(true);
      setTimeout(() => setInfoSaved(false), 2000);
    } catch (err) {
      console.error("Save error:", err);
    } finally {
      setSaving(false);
    }
  }

  // ─── Add entry ─────────────────────────────────────────────────────────────
  async function saveEntry() {
    setFormError("");
    if (!entryDate) return setFormError("Please select a date.");

    const hours = status === "absent" ? 0 : calcHours(timeIn, timeOut, breakMinutes);
    if (status === "present" && hours <= 0)
      return setFormError("Time Out must be after Time In.");

    if (!user?.uid) {
      setSaving(false);
      return setFormError("Unable to save entry without an authenticated account.");
    }

    const entry = {
      date: entryDate,
      timeIn: status === "absent" ? "" : timeIn,
      timeOut: status === "absent" ? "" : timeOut,
      breakMinutes: status === "absent" ? 0 : breakMinutes,
      hours,
      status,
      remarks,
      userId: user.uid,
    };

    setSaving(true);
    try {
      if (editingEntryId) {
        const entryRef = doc(db, ENTRIES_COL, editingEntryId);
        await updateDoc(entryRef, entry);
        setEntries((prev) =>
          [...prev]
            .map((e) => (e.id === editingEntryId ? { id: editingEntryId, ...entry } : e))
            .sort((a, b) => a.date.localeCompare(b.date))
        );
      } else {
        const duplicate = entries.find((e) => e.date === entryDate);
        if (duplicate) {
          if (!window.confirm("An entry for this date already exists. Replace it?")) {
            setSaving(false);
            return;
          }
          await deleteDoc(doc(db, ENTRIES_COL, duplicate.id));
          setEntries((prev) => prev.filter((e) => e.id !== duplicate.id));
        }

        const docRef = await addDoc(collection(db, ENTRIES_COL), entry);
        const newEntry = { id: docRef.id, ...entry };
        setEntries((prev) =>
          [...prev, newEntry].sort((a, b) => a.date.localeCompare(b.date))
        );
      }

      // Reset form
      setEntryDate(today);
      setTimeIn("");
      setTimeOut("");
      setBreakMinutes(0);
      setStatus("present");
      setRemarks("");
      setEditingEntryId(null);
    } catch (err) {
      setFormError("Failed to save. Check your Firebase connection.");
      console.error(err);
    } finally {
      setSaving(false);
    }
  }

  function editEntry(entry) {
    setEditingEntryId(entry.id);
    setEntryDate(entry.date || today);
    setStatus(entry.status || "present");
    setTimeIn(entry.timeIn || "");
    setTimeOut(entry.timeOut || "");
    setBreakMinutes(entry.breakMinutes || 0);
    setRemarks(entry.remarks || "");
    setFormError("");
  }

  // ─── Delete entry ──────────────────────────────────────────────────────────
  async function deleteEntry(entry) {
    if (!window.confirm("Delete this entry?")) return;
    try {
      await deleteDoc(doc(db, ENTRIES_COL, entry.id));
      setEntries((prev) => prev.filter((e) => e.id !== entry.id));
    } catch (err) {
      console.error("Delete error:", err);
    }
  }

  // ─── Sign out ──────────────────────────────────────────────────────────────
  async function handleSignOut() {
    try {
      await signOut(auth);
      setUser(null);
      setLoading(false);
    } catch (err) {
      console.error("Sign out error:", err);
    }
  }

  // ─── Print ─────────────────────────────────────────────────────────────────
  function handlePrint() {
    window.print();
  }

  // ─── Render ────────────────────────────────────────────────────────────────
  if (authLoading || (user && loading)) {
    return (
      <div className="loading-screen">
        <div className="spinner" />
        <p>Loading your records...</p>
      </div>
    );
  }

  if (!user && !authLoading) {
    return <Login onLogin={(userData) => setUser(userData)} />;
  }

  return (
    <div className="app">
      {/* ── Header ── */}
      <header className="app-header no-print">
        <div className="header-inner">
          <div className="header-brand">
            <div className="brand-icon">OJT</div>
            <div>
              <h1>Internship Hour Tracker for CDSGA</h1>
              <p className="header-sub">On-the-Job Training Daily Log by Andrei D. Pantoja</p>
            </div>
          </div>
          <button className="btn btn-print" onClick={handlePrint}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
              <rect x="6" y="14" width="12" height="8"/>
            </svg>
            Print / Export PDF
          </button>
          {user && (
            <button className="btn btn-print" onClick={handleSignOut}>
              Sign Out
            </button>
          )}
        </div>
      </header>

      {/* ── Print Header (visible only on print) ── */}
      <div className="print-header print-only">
        <h1>OJT Internship Daily Time Record</h1>
        <div className="print-info-grid">
          <div><span>Name:</span> {internName || "—"}</div>
          <div><span>School:</span> {internSchool || "—"}</div>
          <div><span>Course:</span> {internCourse || "—"}</div>
          <div><span>Required Hours:</span> {reqHours || "—"}</div>
          <div><span>Total Rendered:</span> {totalHours.toFixed(2)} hrs</div>
          <div><span>Remaining:</span> {remaining.toFixed(2)} hrs</div>
        </div>
      </div>

      <main className="main">
        {/* ── Summary Cards ── */}
        <section className="summary-grid">
          <div className="stat-card">
            <div className="stat-label">Required Hours</div>
            <div className="stat-value">{reqHours || "—"}</div>
          </div>
          <div className="stat-card accent-blue">
            <div className="stat-label">Hours Rendered</div>
            <div className="stat-value">{totalHours.toFixed(2)}</div>
          </div>
          <div className="stat-card accent-green">
            <div className="stat-label">Days Present</div>
            <div className="stat-value">{daysPresent}</div>
          </div>
          <div className="stat-card accent-red">
            <div className="stat-label">Days Absent</div>
            <div className="stat-value">{daysAbsent}</div>
          </div>
        </section>

        {/* ── Progress Bar ── */}
        {reqHours > 0 && (
          <section className="progress-section no-print">
            <div className="progress-labels">
              <span>{totalHours.toFixed(2)} / {reqHours} hrs</span>
              <span className={remaining === 0 ? "done" : ""}>{remaining === 0 ? "✓ Completed!" : `${remaining.toFixed(2)} hrs remaining`}</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </section>
        )}

        {/* ── Intern Info ── */}
        <section className="panel no-print">
          <h2 className="panel-title">Intern Information</h2>
          <div className="info-grid">
              <div className="field">
              <label>Full Name{user?.fullName ? " (from account)" : ""}</label>
              <input
                value={internName}
                onChange={(e) => setInternName(e.target.value)}
                placeholder="e.g. Juan dela Cruz"
                disabled={Boolean(user?.fullName)}
              />
            </div>
            <div className="field">
              <label>School / University</label>
              <input value={internSchool} onChange={(e) => setInternSchool(e.target.value)} placeholder="e.g. PLM Manila" />
            </div>
            <div className="field">
              <label>Course / Program</label>
              <input value={internCourse} onChange={(e) => setInternCourse(e.target.value)} placeholder="e.g. BS Information Technology" />
            </div>
            <div className="field">
              <label>Required Hours</label>
              <input type="number" min="0" value={internReq} onChange={(e) => setInternReq(e.target.value)} placeholder="e.g. 600" />
            </div>
          </div>
          <div className="panel-footer">
            <button className="btn btn-primary" onClick={saveInternInfo} disabled={saving}>
              {saving ? "Saving..." : infoSaved ? "✓ Saved!" : "Save Info"}
            </button>
          </div>
        </section>

        {/* ── Log Entry Form ── */}
        <section className="panel no-print">
          <h2 className="panel-title">Log Daily Entry</h2>
          <div className="form-grid">
            <div className="field">
              <label>Date</label>
              <input type="date" value={entryDate} onChange={(e) => setEntryDate(e.target.value)} />
            </div>
            <div className="field">
              <label>Status</label>
              <select value={status} onChange={(e) => {
                setStatus(e.target.value);
                setTimeIn("");
                setTimeOut("");
                setBreakMinutes(0);
              }}>
                <option value="present">Present</option>
                <option value="absent">Absent</option>
              </select>
            </div>
            <div className="field">
              <label>Time In</label>
              <input type="time" value={timeIn} disabled={status === "absent"} onChange={(e) => setTimeIn(e.target.value)} />
            </div>
            <div className="field">
              <label>
                Time Out{" "}
                {previewHours !== null && (
                  <span className="preview-badge">{previewHours} hrs</span>
                )}
              </label>
              <input type="time" value={timeOut} disabled={status === "absent"} onChange={(e) => setTimeOut(e.target.value)} />
            </div>
            <div className="field">
              <label>Break Time</label>
              <select value={breakMinutes} disabled={status === "absent"} onChange={(e) => setBreakMinutes(Number(e.target.value))}>
                <option value={0}>0:00</option>
                <option value={30}>30 mins</option>
                <option value={60}>1 hr</option>
              </select>
            </div>
            <div className="field field-wide">
              <label>Remarks (optional)</label>
              <input value={remarks} onChange={(e) => setRemarks(e.target.value)} placeholder="e.g. Field work, holiday, etc." />
            </div>
          </div>
          {formError && <p className="form-error">{formError}</p>}
          <div className="panel-footer">
            <button className="btn btn-primary" onClick={saveEntry} disabled={saving}>
              {saving ? "Saving..." : editingEntryId ? "Update Entry" : "+ Add Entry"}
            </button>
            {editingEntryId && (
              <button
                type="button"
                className="btn btn-link"
                onClick={() => {
                  setEditingEntryId(null);
                  setEntryDate(today);
                  setTimeIn("");
                  setTimeOut("");
                  setBreakMinutes(0);
                  setStatus("present");
                  setRemarks("");
                  setFormError("");
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </section>

        {/* ── Daily Log Table ── */}
        <section className="panel">
          <div className="panel-head">
            <h2 className="panel-title">Daily Log</h2>
            <span className="entry-count no-print">{entries.length} entries</span>
          </div>

          {entries.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📋</div>
              <p>No entries yet. Add your first entry above.</p>
            </div>
          ) : (
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Time In</th>
                    <th>Time Out</th>
                    <th>Break</th>
                    <th>Hours</th>
                    <th>Status</th>
                    <th>Remarks</th>
                    <th className="no-print">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {entries.map((e, i) => (
                    <tr key={e.id} className={e.status === "absent" ? "row-absent" : ""}>
                      <td className="td-num">{i + 1}</td>
                      <td>{fmtDate(e.date)}</td>
                      <td>{e.status === "absent" ? "—" : fmtTime(e.timeIn)}</td>
                      <td>{e.status === "absent" ? "—" : fmtTime(e.timeOut)}</td>
                      <td>{e.status === "absent" ? "—" : e.breakMinutes === 60 ? "1 hr" : e.breakMinutes === 30 ? "30 mins" : "0:00"}</td>
                      <td className="td-hours">{e.status === "absent" ? "—" : `${e.hours} hrs`}</td>
                      <td>
                        <span className={`badge ${e.status === "absent" ? "badge-absent" : "badge-present"}`}>
                          {e.status === "absent" ? "Absent" : "Present"}
                        </span>
                      </td>
                      <td className="td-remarks">{e.remarks || "—"}</td>
                      <td className="no-print">
                        <button className="btn btn-primary" type="button" onClick={() => editEntry(e)}>
                          Edit
                        </button>
                        <button className="btn-del" type="button" onClick={() => deleteEntry(e)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="4" className="foot-label">Total</td>
                    <td className="foot-total">{totalHours.toFixed(2)} hrs</td>
                    <td colSpan="3" className="foot-summary">
                      Present: {daysPresent} &nbsp;|&nbsp; Absent: {daysAbsent}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          )}
        </section>
      </main>

      <footer className="app-footer no-print">
        <p>OJT Tracker — Data saved to Firebase Firestore</p>
      </footer>
    </div>
  );
}
