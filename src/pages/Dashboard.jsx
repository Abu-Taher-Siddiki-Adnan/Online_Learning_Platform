import { useAuth } from '../context/AuthContext'

const Dashboard = () => {
  const { currentUser } = useAuth()
  
  const enrolledCourses = [
    { id: 1, title: "React Fundamentals", progress: 80 },
    { id: 2, title: "JavaScript Mastery", progress: 60 },
    { id: 3, title: "UI/UX Design", progress: 30 }
  ]

  // Get user's display name or email
  const getUserName = () => {
    if (!currentUser) return "Guest"
    
    // Return displayName if available, otherwise email, otherwise "User"
    return currentUser.displayName || 
           currentUser.email?.split('@')[0] || 
           'User'
  }

  // Get user greeting based on time of day
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 18) return 'Good afternoon'
    return 'Good evening'
  }

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1 className="dashboard-title">
          {getGreeting()}, {getUserName()}! 👋
        </h1>
        <p className="dashboard-subtitle">
          {currentUser ? (
            <>
              Track your learning progress and manage your courses. 
              <span className="user-email">
                Logged in as: {currentUser.email}
              </span>
            </>
          ) : (
            "Please log in to access your dashboard"
          )}
        </p>
        
        {currentUser && currentUser.photoURL && (
          <div className="user-avatar">
            <img 
              src={currentUser.photoURL} 
              alt={getUserName()}
              className="avatar-image"
            />
          </div>
        )}
      </div>
      
      {currentUser ? (
        <>
          <div className="dashboard-stats">
            <div className="stat-card">
              <div className="stat-card-title">Enrolled Courses</div>
              <div className="stat-card-value">5</div>
            </div>
            <div className="stat-card">
              <div className="stat-card-title">Completed</div>
              <div className="stat-card-value">2</div>
            </div>
            <div className="stat-card">
              <div className="stat-card-title">Learning Hours</div>
              <div className="stat-card-value">45</div>
            </div>
            <div className="stat-card">
              <div className="stat-card-title">Member Since</div>
              <div className="stat-card-value">
                {currentUser.metadata?.creationTime 
                  ? new Date(currentUser.metadata.creationTime).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric'
                    })
                  : 'Today'
                }
              </div>
            </div>
          </div>
          
          <div className="dashboard-section">
            <div className="section-header">
              <h2>Your Courses</h2>
            </div>
            <div className="course-progress">
              {enrolledCourses.map(course => (
                <div key={course.id} className="progress-item">
                  <div className="progress-header">
                    <span className="progress-title">{course.title}</span>
                    <span className="progress-percent">{course.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="dashboard-section">
            <div className="section-header">
              <h2>Your Profile</h2>
            </div>
            <div className="profile-info">
              <div className="profile-detail">
                <span className="detail-label">Full Name:</span>
                <span className="detail-value">
                  {currentUser.displayName || 'Not set'}
                </span>
              </div>
              <div className="profile-detail">
                <span className="detail-label">Email:</span>
                <span className="detail-value">{currentUser.email}</span>
              </div>
              <div className="profile-detail">
                <span className="detail-label">Account Created:</span>
                <span className="detail-value">
                  {currentUser.metadata?.creationTime 
                    ? new Date(currentUser.metadata.creationTime).toLocaleDateString()
                    : 'Recently'
                  }
                </span>
              </div>
              <div className="profile-detail">
                <span className="detail-label">Last Login:</span>
                <span className="detail-value">
                  {currentUser.metadata?.lastSignInTime 
                    ? new Date(currentUser.metadata.lastSignInTime).toLocaleDateString()
                    : 'Now'
                  }
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="dashboard-not-logged">
          <div className="not-logged-content">
            <h3>Please Log In</h3>
            <p>You need to be logged in to view your dashboard.</p>
            <a href="/login" className="login-link">Go to Login</a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard