import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <div className="container">
          <Home />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
