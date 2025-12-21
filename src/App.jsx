
import { BrowserRouter as Router, 
  Routes, Route

 } from "react-router-dom";
import NavBar from "./Components/NavBar";
import ContactUs from "./Components/Contactus";
import Homepage from "./Components/Home";
import Skills from "./Components/Skills";
import MyProjects from "./Components/MyProject";
import Introduction from "./Components/Introduction";
import "./App.css"; // Import global styles

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar /> 
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/myprojects" element={<MyProjects />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
