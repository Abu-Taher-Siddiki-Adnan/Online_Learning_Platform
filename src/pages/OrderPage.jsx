import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { FaLock, FaCheckCircle, FaShieldAlt, FaArrowLeft, FaCreditCard, FaPaypal, FaMoneyBill } from 'react-icons/fa'

const OrderPage = () => {
  const { courseId } = useParams()
  const navigate = useNavigate()
  
  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: ''
  })
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const mockCourses = {
    '1': {
      id: 1,
      title: "React Fundamentals",
      price: 49.99,
      duration: "8 weeks",
      instructor: "John Doe",
      category: "Web Development",
      level: "Beginner",
      students: 1500
    },
    '2': {
      id: 2,
      title: "JavaScript Mastery",
      price: 39.99,
      duration: "6 weeks",
      instructor: "Jane Smith",
      category: "Programming",
      level: "Intermediate",
      students: 2200
    },
    '3': {
      id: 3,
      title: "UI/UX Design",
      price: 59.99,
      duration: "10 weeks",
      instructor: "Alex Johnson",
      category: "Design",
      level: "Beginner",
      students: 1800
    }
  }

  useEffect(() => {
    setTimeout(() => {
      const courseData = mockCourses[courseId] || mockCourses['1']
      setCourse(courseData)
      setLoading(false)
    }, 500)
  }, [courseId])

  const handleOrder = () => {
    if (!acceptedTerms) {
      alert('Please accept the terms and conditions to proceed.')
      return
    }
    
    if (paymentMethod === 'card' && (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvv)) {
      alert('Please fill in all card details.')
      return
    }
    
    alert(`Order placed successfully for ${course.title}! You will receive a confirmation email shortly.`)
    navigate('/dashboard')
  }

  const calculateTax = () => (course?.price * 0.1).toFixed(2)
  const calculateTotal = () => (course?.price * 1.1).toFixed(2)

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
        <div className="order-header">
          <h1 className="order-title">Complete Your Enrollment</h1>
          <p className="order-subtitle">Secure checkout with encryption. Your data is protected.</p>
        </div>
        
        <div className="order-grid">
          {/* Left Column - Order Details */}
          <div className="order-details">
            <div className="order-section">
              <div className="section-header">
                <FaCheckCircle className="section-icon" />
                <h2>Order Summary</h2>
              </div>
              
              {course && (
                <div className="course-summary-card">
                  <div className="course-summary-header">
                    <h3 className="course-summary-title">{course.title}</h3>
                    <span className="course-level">{course.level}</span>
                  </div>
                  
                  <div className="course-meta-grid">
                    <div className="meta-item">
                      <span className="meta-label">Instructor</span>
                      <span className="meta-value">{course.instructor}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Duration</span>
                      <span className="meta-value">{course.duration}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Category</span>
                      <span className="meta-value">{course.category}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Students</span>
                      <span className="meta-value">{course.students.toLocaleString()}+ enrolled</span>
                    </div>
                  </div>
                  
                  <div className="price-breakdown">
                    <div className="price-item">
                      <span>Course Price</span>
                      <span className="price-amount">${course.price}</span>
                    </div>
                    <div className="price-item">
                      <span>Tax (10%)</span>
                      <span className="price-amount">${calculateTax()}</span>
                    </div>
                    <div className="price-divider"></div>
                    <div className="price-item total">
                      <span>Total Amount</span>
                      <span className="price-amount total">${calculateTotal()}</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="student-info-card">
                <h3>Student Information</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">Name</span>
                    <span className="info-value">Demo User</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Email</span>
                    <span className="info-value">demo@example.com</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Enrollment Date</span>
                    <span className="info-value">{new Date().toLocaleDateString('en-US', { 
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="order-section">
              <div className="section-header">
                <FaCreditCard className="section-icon" />
                <h2>Payment Method</h2>
              </div>
              
              <div className="payment-methods-grid">
                <div 
                  className={`payment-method-card ${paymentMethod === 'card' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <div className="payment-method-header">
                    <FaCreditCard />
                    <span>Credit/Debit Card</span>
                  </div>
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                </div>
                
                <div 
                  className={`payment-method-card ${paymentMethod === 'paypal' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('paypal')}
                >
                  <div className="payment-method-header">
                    <FaPaypal />
                    <span>PayPal</span>
                  </div>
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={paymentMethod === 'paypal'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                </div>
                
                <div 
                  className={`payment-method-card ${paymentMethod === 'bank' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('bank')}
                >
                  <div className="payment-method-header">
                    <FaMoneyBill />
                    <span>Bank Transfer</span>
                  </div>
                  <input
                    type="radio"
                    name="payment"
                    value="bank"
                    checked={paymentMethod === 'bank'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                </div>
              </div>

              {/* Card Details Form */}
              {paymentMethod === 'card' && (
                <div className="card-details-form">
                  <div className="form-group">
                    <label>Card Number</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      value={cardDetails.number}
                      onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={cardDetails.expiry}
                        onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label>CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        value={cardDetails.cvv}
                        onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Terms and Conditions */}
              <div className="terms-section">
                <label className="terms-checkbox">
                  <input 
                    type="checkbox" 
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                  />
                  <span>
                    I agree to the <Link to="/terms">Terms of Service</Link> and 
                    <Link to="/privacy"> Privacy Policy</Link>. I understand that I 
                    have 30 days to request a refund if not satisfied.
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="order-summary-sidebar">
            <div className="summary-card">
              <div className="summary-header">
                <FaLock className="lock-icon" />
                <span>Secure Checkout</span>
              </div>
              
              <div className="summary-content">
                <div className="summary-item">
                  <span>Course:</span>
                  <span>{course?.title}</span>
                </div>
                <div className="summary-item">
                  <span>Price:</span>
                  <span>${course?.price}</span>
                </div>
                <div className="summary-item">
                  <span>Tax:</span>
                  <span>${calculateTax()}</span>
                </div>
                
                <div className="summary-divider"></div>
                
                <div className="summary-item total">
                  <span>Total:</span>
                  <span className="total-price">${calculateTotal()}</span>
                </div>
              </div>
              
              <button 
                onClick={handleOrder}
                className="confirm-button"
                disabled={!acceptedTerms}
              >
                <FaLock />
                Confirm & Pay ${calculateTotal()}
              </button>
              
              <div className="payment-security">
                <FaShieldAlt />
                <span>Your payment is secured with 256-bit SSL encryption</span>
              </div>
            </div>
            
            <div className="assurance-card">
              <h3>What You Get</h3>
              <ul className="assurance-list">
                <li>✅ Lifetime access to course content</li>
                <li>✅ Certificate of completion</li>
                <li>✅ 30-day money-back guarantee</li>
                <li>✅ 24/7 support access</li>
                <li>✅ Downloadable resources</li>
                <li>✅ Community access</li>
              </ul>
            </div>
            
            <button 
              onClick={() => navigate(-1)}
              className="back-button"
            >
              <FaArrowLeft />
              Back to Course
            </button>
          </div>
        </div>

        {/* Help Section */}
        <div className="help-section">
          <h3>Need Help?</h3>
          <div className="help-content">
            <p>Contact our support team at <strong>support@learnify.com</strong></p>
            <p>Call us at <strong>+8801000000000</strong> (Mon-Fri, 9AM-6PM)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderPage