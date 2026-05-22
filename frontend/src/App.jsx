import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";   
import Register from "./pages/register";
import Login from "./pages/login";
import Navbar from "./pages/navbar";

function App() {
  return (
    
    <Router>
      <Navbar />
      <div className="pt-20">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
     

  );
}

export default App;