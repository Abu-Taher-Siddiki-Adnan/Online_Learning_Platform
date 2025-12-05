const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Learnify</h1>
          <h3 className="hero-title">Learn From The Best Online Platform</h3>
          <p className="hero-subtitle">
            Master new skills with expert-led courses. Start your learning
            journey today.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Browse Courses</button>
            <button className="btn btn-outline">Learn More</button>
          </div>
        </div>
      </section>

      <section className="courses-section">
        <h2 className="section-title">Featured Courses</h2>
        <div className="courses-grid">
          <div className="course-card">
            <div className="course-card-header">
              <span className="course-category">Web Development</span>
              <h3 className="course-title">React Fundamentals</h3>
            </div>
            <p className="course-description">
              Learn React from scratch with hands-on projects and real-world
              examples.
            </p>
            <div className="course-footer">
              <span className="course-price">$49.99</span>
              <button className="btn btn-small">View Details</button>
            </div>
          </div>

          <div className="course-card">
            <div className="course-card-header">
              <span className="course-category">Programming</span>
              <h3 className="course-title">JavaScript Mastery</h3>
            </div>
            <p className="course-description">
              Master modern JavaScript concepts and advanced programming
              patterns.
            </p>
            <div className="course-footer">
              <span className="course-price">$39.99</span>
              <button className="btn btn-small">View Details</button>
            </div>
          </div>

          <div className="course-card">
            <div className="course-card-header">
              <span className="course-category">Design</span>
              <h3 className="course-title">UI/UX Design</h3>
            </div>
            <p className="course-description">
              Create beautiful and user-friendly interfaces with modern design
              principles.
            </p>
            <div className="course-footer">
              <span className="course-price">$59.99</span>
              <button className="btn btn-small">View Details</button>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <h3 className="stat-number">500+</h3>
            <p className="stat-label">Courses Available</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">10K+</h3>
            <p className="stat-label">Students Enrolled</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">50+</h3>
            <p className="stat-label">Expert Instructors</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
