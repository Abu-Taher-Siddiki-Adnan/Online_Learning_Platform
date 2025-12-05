import { Link } from 'react-router-dom'

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <div className="course-card-header">
        <span className="course-category">{course.category}</span>
        <h3 className="course-title">{course.title}</h3>
      </div>
      <p className="course-description">{course.description}</p>
      <div className="course-footer">
        <span className="course-price">${course.price}</span>
        <Link to={`/course/${course.id}`} className="btn btn-small">
          View Details
        </Link>
      </div>
    </div>
  )
}

export default CourseCard