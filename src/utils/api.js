import axios from 'axios';

const API_BASE_URL = 'https://api.freeapi.app/api/v1/public/courses';

const mockCourses = [
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
  }
];

export const fetchCourses = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}?limit=10`);
    console.log('API Response:', response.data);
    
    if (response.data.data && response.data.data.data) {
      return response.data.data.data.map(course => ({
        id: course.id || Math.random(),
        title: course.title || 'No Title',
        description: course.description || 'No description available',
        price: course.price || 29.99,
        category: course.category || 'General',
        image: course.image || null,
        rating: course.rating || 4.5,
        duration: course.duration || '8 weeks'
      }));
    }
    return mockCourses;
  } catch (error) {
    console.error('API Error, using mock data:', error);
    return mockCourses;
  }
};

export const fetchCourseById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    
    if (response.data.data) {
      const course = response.data.data;
      return {
        id: course.id || id,
        title: course.title || 'Course Title',
        description: course.description || 'Course description',
        price: course.price || 49.99,
        category: course.category || 'Web Development',
        duration: course.duration || '8 weeks',
        level: course.level || 'Beginner',
        instructor: course.instructor || 'Arafatul Islam Zami',
        rating: course.rating || 4.8,
        students: course.students || 1500,
        learningPoints: course.learningPoints || [
          "Understand React components and JSX",
          "Master state and props management",
          "Learn React Hooks (useState, useEffect)"
        ],
        syllabus: course.syllabus || [
          "Week 1: Introduction",
          "Week 2: Core Concepts",
          "Week 3: Advanced Topics"
        ]
      };
    }
  } catch (error) {
    console.error('API Error for single course:', error);
  }
  
  return {
    id: id || 1,
    title: "React Fundamentals",
    description: "Learn React from scratch with hands-on projects. This comprehensive course covers everything from basic JSX to advanced state management.",
    price: 49.99,
    category: "Web Development",
    duration: "8 weeks",
    level: "Beginner",
    instructor: "Arafatul Islam Zami",
    rating: 4.8,
    students: 1500,
    learningPoints: [
      "Understand React components and JSX",
      "Master state and props management",
      "Learn React Hooks (useState, useEffect)",
      "Build responsive React applications",
      "Implement routing with React Router",
      "Connect React apps to APIs"
    ],
    syllabus: [
      "Week 1: Introduction to React",
      "Week 2: Components and Props",
      "Week 3: State and Lifecycle",
      "Week 4: React Hooks",
      "Week 5: Routing with React Router",
      "Week 6: API Integration",
      "Week 7: State Management",
      "Week 8: Final Project"
    ]
  };
};