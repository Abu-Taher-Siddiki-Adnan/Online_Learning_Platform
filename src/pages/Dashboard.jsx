const Dashboard = () => {
  const enrolledCourses = [
    { id: 1, title: "React Fundamentals", progress: 80 },
    { id: 2, title: "JavaScript Mastery", progress: 60 },
    { id: 3, title: "UI/UX Design", progress: 30 }
  ]

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Welcome back, Student!</h1>
        <p className="dashboard-subtitle">Track your learning progress and manage your courses</p>
      </div>
      
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
    </div>
  )
}

export default Dashboard