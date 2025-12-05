const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">Learnify</span>
        </div>
        
        <div className="navbar-menu">
          <a href="/" className="navbar-link">Home</a>
          <a href="/courses" className="navbar-link">Courses</a>
          <a href="/about" className="navbar-link">About</a>
          <a href="/contact" className="navbar-link">Contact</a>
        </div>
        
        <div className="navbar-auth">
          <a href="/login" className="auth-btn auth-btn-login">Login</a>
          <a href="/register" className="auth-btn auth-btn-signup">Sign Up</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar