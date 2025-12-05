import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import LoadingSpinner from './LoadingSpinner'

const ProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useAuth()

  if (loading) {
    return (
      <div style={{ 
        minHeight: '400px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <LoadingSpinner 
          size="large" 
          message="Checking authentication..." 
        />
      </div>
    )
  }

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: window.location.pathname }} />
  }

  return children
}

export default ProtectedRoute