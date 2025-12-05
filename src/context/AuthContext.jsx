import React, { createContext, useState, useContext, useEffect } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth'
import { auth, googleProvider, githubProvider } from '../firebase/Firebase'

// Create Auth Context
const AuthContext = createContext()

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    // Cleanup subscription
    return unsubscribe
  }, [])

  // Sign up with email and password
  const signup = async (email, password, fullName) => {
    try {
      setError('')
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      
      // Update user profile with full name
      if (fullName) {
        await updateProfile(userCredential.user, {
          displayName: fullName
        })
      }
      
      // Update current user state
      setCurrentUser({
        ...userCredential.user,
        displayName: fullName
      })
      
      return userCredential
    } catch (error) {
      // Handle specific Firebase errors
      let errorMessage = 'Registration failed'
      
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'Email already in use'
          break
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address'
          break
        case 'auth/operation-not-allowed':
          errorMessage = 'Operation not allowed'
          break
        case 'auth/weak-password':
          errorMessage = 'Password is too weak'
          break
        default:
          errorMessage = error.message
      }
      
      setError(errorMessage)
      throw new Error(errorMessage)
    }
  }

  // Login with email and password
  const login = async (email, password) => {
    try {
      setError('')
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      return userCredential
    } catch (error) {
      let errorMessage = 'Login failed'
      
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address'
          break
        case 'auth/user-disabled':
          errorMessage = 'User account is disabled'
          break
        case 'auth/user-not-found':
          errorMessage = 'No user found with this email'
          break
        case 'auth/wrong-password':
          errorMessage = 'Incorrect password'
          break
        default:
          errorMessage = error.message
      }
      
      setError(errorMessage)
      throw new Error(errorMessage)
    }
  }

  // Login with Google
  const loginWithGoogle = async () => {
    try {
      setError('')
      const userCredential = await signInWithPopup(auth, googleProvider)
      return userCredential
    } catch (error) {
      let errorMessage = 'Google login failed'
      
      switch (error.code) {
        case 'auth/popup-closed-by-user':
          errorMessage = 'Popup closed by user'
          break
        case 'auth/cancelled-popup-request':
          errorMessage = 'Popup request cancelled'
          break
        case 'auth/popup-blocked':
          errorMessage = 'Popup blocked by browser'
          break
        default:
          errorMessage = error.message
      }
      
      setError(errorMessage)
      throw new Error(errorMessage)
    }
  }

  // Login with GitHub
  const loginWithGithub = async () => {
    try {
      setError('')
      const userCredential = await signInWithPopup(auth, githubProvider)
      return userCredential
    } catch (error) {
      let errorMessage = 'GitHub login failed'
      
      switch (error.code) {
        case 'auth/popup-closed-by-user':
          errorMessage = 'Popup closed by user'
          break
        case 'auth/cancelled-popup-request':
          errorMessage = 'Popup request cancelled'
          break
        case 'auth/popup-blocked':
          errorMessage = 'Popup blocked by browser'
          break
        case 'auth/account-exists-with-different-credential':
          errorMessage = 'Account exists with different credentials'
          break
        default:
          errorMessage = error.message
      }
      
      setError(errorMessage)
      throw new Error(errorMessage)
    }
  }

  // Logout
  const logout = async () => {
    try {
      setError('')
      await signOut(auth)
    } catch (error) {
      setError('Logout failed: ' + error.message)
      throw error
    }
  }

  // Clear error
  const clearError = () => setError('')

  const value = {
    currentUser,
    signup,
    login,
    loginWithGoogle,
    loginWithGithub,
    logout,
    error,
    clearError,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}