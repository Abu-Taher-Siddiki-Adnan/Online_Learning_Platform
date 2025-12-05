import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { login, loginWithGoogle, loginWithGithub, error, clearError } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  // Get the intended destination from state or default to dashboard
  const from = location.state?.from || '/dashboard'

  const handleSubmit = async (e) => {
    e.preventDefault()
    clearError()
    setIsLoading(true)
    
    try {
      await login(email, password)
      navigate(from, { replace: true }) // Redirect to intended page
    } catch (error) {
      console.error('Login failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Update social login functions similarly:
  const handleGoogleLogin = async () => {
    clearError()
    setIsLoading(true)
    
    try {
      await loginWithGoogle()
      navigate(from, { replace: true })
    } catch (error) {
      console.error('Google login failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleGithubLogin = async () => {
    clearError()
    setIsLoading(true)
    
    try {
      await loginWithGithub()
      navigate(from, { replace: true })
    } catch (error) {
      console.error('GitHub login failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to your account</p>

          {error && <div className="error-message">⚠️ {error}</div>}

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <button type="submit" className="auth-button" disabled={isLoading}>
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <div className="auth-divider">
            <span>Or continue with</span>
          </div>

          <div className="social-buttons">
            <button
              className="social-button google"
              onClick={handleGoogleLogin}
              disabled={isLoading}
            >
              <span>Google</span>
            </button>
            <button
              className="social-button github"
              onClick={handleGithubLogin}
              disabled={isLoading}
            >
              <span>GitHub</span>
            </button>
          </div>

          <div className="test-credentials">
            <h4>Test Credentials:</h4>
            <p>Email: test@example.com</p>
            <p>Password: password123</p>
          </div>

          <div className="auth-link">
            Don't have an account? <Link to="/register">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
