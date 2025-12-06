import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const AuthButtons = () => {
  const { currentUser } = useAuth()

  if (currentUser) {
    return null
  }

  return (
    <div className="auth-buttons">
      <Link to="/login" className="auth-btn auth-btn-login">
        <span className="auth-btn-text">Login</span>
      </Link>
      <Link to="/register" className="auth-btn auth-btn-signup">
        <span className="auth-btn-text">Sign Up</span>
      </Link>
    </div>
  )
}

export default AuthButtons