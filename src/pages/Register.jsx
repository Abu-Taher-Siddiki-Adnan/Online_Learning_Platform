const Register = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-subtitle">Join our learning community</p>
          
          <form className="auth-form">
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter your full name"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-input"
                placeholder="Enter your email"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-input"
                placeholder="Create a password"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-input"
                placeholder="Confirm your password"
              />
            </div>
            
            <button type="submit" className="auth-button">
              Create Account
            </button>
          </form>
          
          <div className="auth-divider">
            <span>Or sign up with</span>
          </div>
          
          <div className="social-buttons">
            <button className="social-button google">
              Google
            </button>
            <button className="social-button github">
              GitHub
            </button>
          </div>
          
          <div className="auth-link">
            Already have an account? <a href="/login">Sign in</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register