import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-subtitle">Page Not Found</h2>
      <p className="not-found-description">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="home-button">
        Go Back Home
      </Link>
    </div>
  )
}

export default NotFound