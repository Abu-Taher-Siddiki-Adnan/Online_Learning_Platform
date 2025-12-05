import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Learnify</span>
        </Link>
        
        <div className="navbar-menu">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/dashboard" className="navbar-link">Dashboard</Link>
          <a href="#" className="navbar-link">Courses</a>
          <a href="#" className="navbar-link">About</a>
        </div>
        
        <div className="navbar-auth">
          <Link to="/login" className="auth-btn auth-btn-login">Login</Link>
          <Link to="/register" className="auth-btn auth-btn-signup">Sign Up</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar