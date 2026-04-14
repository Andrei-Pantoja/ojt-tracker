import { useState } from "react";
import { auth, db } from "./firebase";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import "./App.css";

export default function Login({ onLogin }) {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleLogin() {
    setError("");
    setMessage("");
    if (!email || !password) return setError("Please enter both email and password.");

    setSubmitting(true);
    try {
      const credential = await signInWithEmailAndPassword(auth, email, password);
      const userRef = doc(db, "accounts", credential.user.uid);
      const userSnap = await getDoc(userRef);
      if (!userSnap.exists()) {
        return setError("Account record not found. Please register first.");
      }
      const profile = userSnap.data();
      setMessage(`Welcome back, ${profile.fullName || credential.user.email}`);
      onLogin?.({ uid: credential.user.uid, email: credential.user.email, fullName: profile.fullName || "" });
    } catch (err) {
      console.error(err);
      const code = err.code || "";
      if (code === "auth/configuration-not-found") {
        setError(
          "Firebase auth is not configured for this app. Enable Email/Password sign-in and add localhost to authorized domains."
        );
      } else {
        setError(err.message || "Sign in failed.");
      }
    } finally {
      setSubmitting(false);
    }
  }

  async function handleRegister() {
    setError("");
    setMessage("");
    if (!fullName || !email || !password || !confirmPassword) {
      return setError("Please complete all registration fields.");
    }
    if (password !== confirmPassword) {
      return setError("Passwords do not match.");
    }

    setSubmitting(true);
    try {
      const credential = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "accounts", credential.user.uid), {
        fullName,
        email: credential.user.email,
        createdAt: serverTimestamp(),
      });
      setMessage(`Account created. Welcome, ${fullName}!`);
      onLogin?.({ uid: credential.user.uid, email: credential.user.email, fullName });
    } catch (err) {
      console.error(err);
      const code = err.code || "";
      if (code === "auth/configuration-not-found") {
        setError(
          "Firebase auth is not not configured for this app. Enable Email/Password sign-in and add localhost to authorized domains."
        );
      } else {
        setError(err.message || "Registration failed.");
      }
    } finally {
      setSubmitting(false);
    }
  }

  async function handleForgotPassword() {
    setError("");
    setMessage("");
    if (!email) return setError("Please enter your email address.");

    setSubmitting(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent. Check your inbox.");
    } catch (err) {
      console.error(err);
      const code = err.code || "";
      if (code === "auth/configuration-not-found") {
        setError(
          "Firebase auth is not configured for this app. Enable Email/Password sign-in and add localhost to authorized domains."
        );
      } else {
        setError(err.message || "Unable to send reset email.");
      }
    } finally {
      setSubmitting(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (forgotPassword) {
      handleForgotPassword();
    } else if (mode === "login") {
      handleLogin();
    } else {
      handleRegister();
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <div className="brand-icon">OJT</div>
          <div>
            <h1>
              {forgotPassword ? "Reset Password" : mode === "login" ? "Sign In" : "Register"}
            </h1>
            <p>
              {forgotPassword
                ? "Enter your email and we will send a reset link."
                : mode === "login"
                ? "Access your internship tracker account"
                : "Create your internship tracker account"}
            </p>
          </div>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          {mode === "register" && (
            <div className="field">
              <label>Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Juan Dela Cruz"
              />
            </div>
          )}

          <div className="field">
            <label>Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          {!forgotPassword && (
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
          )}

          {!forgotPassword && mode === "register" && (
            <div className="field">
              <label>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
              />
            </div>
          )}

          {error && <p className="form-error">{error}</p>}
          {message && <p className="form-success">{message}</p>}

          <div className="panel-footer">
            <button type="submit" className="btn btn-primary" disabled={submitting}>
              {forgotPassword ? "Reset Password" : mode === "login" ? "Sign In" : "Register"}
            </button>
          </div>

          <div className="login-switch">
            {forgotPassword ? (
              <p>
                Remembered it?{' '}
                <button type="button" className="btn-link" onClick={() => setForgotPassword(false)}>
                  Back to Sign In
                </button>
              </p>
            ) : mode === "login" ? (
              <>
                <p>
                  Don’t have an account?{' '}
                  <button type="button" className="btn-link" onClick={() => setMode("register")}>Register</button>
                </p>
                <p>
                  <button type="button" className="btn-link" onClick={() => setForgotPassword(true)}>
                    Forgot password?
                  </button>
                </p>
              </>
            ) : (
              <p>
                Already have an account?{' '}
                <button type="button" className="btn-link" onClick={() => setMode("login")}>Sign In</button>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
