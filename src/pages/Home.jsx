import CourseCard from '../components/CourseCard'
import { fetchCourses } from '../utils/api';
import { useState, useEffect } from 'react';

const Home = () => {

    const courses = [
    {
      id: 1,
      title: "React Fundamentals",
      description: "Learn React from scratch with hands-on projects and real-world examples.",
      price: 49.99,
      category: "Web Development"
    },
    {
      id: 2,
      title: "JavaScript Mastery",
      description: "Master modern JavaScript concepts and advanced programming patterns.",
      price: 39.99,
      category: "Programming"
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Create beautiful and user-friendly interfaces with modern design principles.",
      price: 59.99,
      category: "Design"
    },
    {
      id: 4,
      title: "Python for Beginners",
      description: "Start your programming journey with Python fundamentals and practical projects.",
      price: 29.99,
      category: "Programming"
    },
    {
      id: 5,
      title: "Full Stack Development",
      description: "Build complete web applications from front-end to back-end with MERN stack.",
      price: 79.99,
      category: "Web Development"
    },
    {
      id: 6,
      title: "Data Science Essentials",
      description: "Introduction to data analysis, visualization, and machine learning concepts.",
      price: 69.99,
      category: "Data Science"
    }
  ]

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Learnify</h1>
          <h3 className="hero-title2">Learn From The Best Online Platform</h3>
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

      <section className="courses-section" id="courses-section">
        <h2 className="section-title">Featured Courses</h2>
        <div className="courses-grid">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
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
