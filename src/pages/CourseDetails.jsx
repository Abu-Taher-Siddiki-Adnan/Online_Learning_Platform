import { useParams, Link } from "react-router-dom";

const CourseDetails = () => {
  const { id } = useParams();

  // Mock course data
  const course = {
    id: id || 1,
    title: "React Fundamentals",
    description:
      "Learn React from scratch with hands-on projects. This comprehensive course covers everything from basic JSX to advanced state management.",
    price: 49.99,
    duration: "8 weeks",
    level: "Beginner",
    instructor: "John Doe",
    rating: 4.8,
    students: 1500,
    learningPoints: [
      "Understand React components and JSX",
      "Master state and props management",
      "Learn React Hooks (useState, useEffect)",
      "Build responsive React applications",
      "Implement routing with React Router",
      "Connect React apps to APIs",
    ],
    syllabus: [
      "Week 1: Introduction to React",
      "Week 2: Components and Props",
      "Week 3: State and Lifecycle",
      "Week 4: React Hooks",
      "Week 5: Routing with React Router",
      "Week 6: API Integration",
      "Week 7: State Management",
      "Week 8: Final Project",
    ],
  };

  return (
    <div className="course-details-page">
      <div className="course-details-header">
        <div className="header-content">
          <div>
            <h1 className="course-details-title">{course.title}</h1>
            <p className="course-details-description">{course.description}</p>
          </div>
          <div className="course-price-section">
            <div className="course-price">${course.price}</div>
            <div className="price-label">One-time payment</div>
          </div>
        </div>

        <div className="course-meta">
          <div className="meta-item">
            <span className="meta-label">Duration</span>
            <span className="meta-value">{course.duration}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Level</span>
            <span className="meta-value">{course.level}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Instructor</span>
            <span className="meta-value">{course.instructor}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Rating</span>
            <span className="meta-value">{course.rating} ⭐</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Students</span>
            <span className="meta-value">{course.students}</span>
          </div>
        </div>
      </div>

      <div className="course-content-grid">
        <div>
          <div className="learning-section">
            <h2 className="section-title">What You'll Learn</h2>
            <div className="learning-points">
              {course.learningPoints.map((point, index) => (
                <div key={index} className="learning-point">
                  <span className="point-check">✓</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="syllabus-section">
            <h2 className="section-title">Course Syllabus</h2>
            <div className="syllabus-list">
              {course.syllabus.map((item, index) => (
                <div key={index} className="syllabus-item">
                  <span>{item}</span>
                  <span>📚</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="enrollment-card">
          <h3 className="enrollment-title">Enroll in this Course</h3>
          <div className="enrollment-summary">
            <div className="summary-item">
              <span>Course Price:</span>
              <span className="price">${course.price}</span>
            </div>
            <div className="summary-item">
              <span>Duration:</span>
              <span>{course.duration}</span>
            </div>
            <div className="summary-item">
              <span>Level:</span>
              <span>{course.level}</span>
            </div>
          </div>

          <Link to={`/order/${course.id}`} className="enroll-button">
            Enroll Now
          </Link>

          <button className="wishlist-button">Add to Wishlist</button>

          <div className="course-features">
            <h4 className="features-title">This course includes:</h4>
            <ul className="feature-list">
              <li className="feature-item">
                <span className="feature-check">✓</span>
                <span>Lifetime access</span>
              </li>
              <li className="feature-item">
                <span className="feature-check">✓</span>
                <span>Certificate of completion</span>
              </li>
              <li className="feature-item">
                <span className="feature-check">✓</span>
                <span>Project files & resources</span>
              </li>
              <li className="feature-item">
                <span className="feature-check">✓</span>
                <span>Q&A support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
