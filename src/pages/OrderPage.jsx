import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const OrderPage = () => {
  const { courseId } = useParams()
  const navigate = useNavigate()
  
  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [paymentMethod, setPaymentMethod] = useState('card')

  // Mock course data
  const mockCourses = {
    '1': {
      id: 1,
      title: "React Fundamentals",
      price: 49.99,
      duration: "8 weeks",
      instructor: "John Doe"
    },
    '2': {
      id: 2,
      title: "JavaScript Mastery",
      price: 39.99,
      duration: "6 weeks",
      instructor: "Jane Smith"
    },
    '3': {
      id: 3,
      title: "UI/UX Design",
      price: 59.99,
      duration: "10 weeks",
      instructor: "Alex Johnson"
    }
  }

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const courseData = mockCourses[courseId] || mockCourses['1']
      setCourse(courseData)
      setLoading(false)
    }, 500)
  }, [courseId])

  const handleOrder = () => {
    // Simulate order processing
    alert(`Order placed successfully for ${course.title}! You will receive a confirmation email shortly.`)
    navigate('/dashboard')
  }

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading order details...</p>
      </div>
    )
  }

  return (
    <div className="order-page">
      <div className="order-container">
        <h1 className="order-title">Complete Your Enrollment</h1>
        
        <div className="order-summary">
          <h2>Order Summary</h2>
          
          {course && (
            <div className="course-summary">
              <h3 className="course-summary-title">{course.title}</h3>
              <p>Instructor: {course.instructor}</p>
              <p>Duration: {course.duration}</p>
              <div className="course-summary-price">
                Total: ${course.price}
              </div>
            </div>
          )}

          <div className="student-info">
            <h3>Student Information</h3>
            <p><strong>Name:</strong> Demo User</p>
            <p><strong>Email:</strong> demo@example.com</p>
            <p><strong>Enrollment Date:</strong> {new Date().toLocaleDateString()}</p>
          </div>

          <div className="payment-methods">
            <h3>Select Payment Method</h3>
            <div className="payment-options">
              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>💳 Credit/Debit Card</span>
              </label>
              
              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>💰 PayPal</span>
              </label>
              
              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="stripe"
                  checked={paymentMethod === 'stripe'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>💵 Stripe</span>
              </label>
            </div>
          </div>

          <div className="order-terms">
            <label className="terms-checkbox">
              <input type="checkbox" required />
              <span>I agree to the Terms of Service and Privacy Policy</span>
            </label>
          </div>

          <div className="order-actions">
            <button 
              onClick={() => navigate(-1)}
              className="back-button"
            >
              ← Back to Course
            </button>
            <button 
              onClick={handleOrder}
              className="confirm-button"
            >
              Confirm Enrollment & Pay ${course.price}
            </button>
          </div>
        </div>

        <div className="order-help">
          <h3>Need Help?</h3>
          <p>Contact our support team at support@learnhub.com or call +1 (555) 123-4567</p>
          <p>Money-back guarantee within 30 days if not satisfied</p>
        </div>
      </div>
    </div>
  )
}

export default OrderPage