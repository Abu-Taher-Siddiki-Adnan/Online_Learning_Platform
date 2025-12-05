import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthButtons from "./AuthButtons";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Learnify</span>
        </Link>

        <div className="navbar-menu">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          {currentUser && (
            <Link to="/dashboard" className="navbar-link">
              Dashboard
            </Link>
          )}
          <Link to="#" className="navbar-link">
            Courses
          </Link>
          <Link to="#" className="navbar-link">
            About
          </Link>
        </div>

        {currentUser ? (
          <div className="user-menu">
            <div className="user-info">
              <div>
                <span className="user-name">
                  {currentUser.displayName || currentUser.email}
                </span>
              </div>
              <div>
                <button onClick={handleLogout} className="logout-btn">
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <AuthButtons />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
