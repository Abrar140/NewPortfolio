import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import ContactUs from "./Components/Contactus"
import Homepage from "./Components/Home";
import Skills from "./Components/Skills";
import MyProjects from "./Components/MyProject";
import Introduction from "./Components/Introduction";
import "./App.css"; // Import global styles

const App = () => {
  const [activeComponent, setActiveComponent] = useState("home"); // State to manage active component

  const handleNavClick = (component) => {
    setActiveComponent(component);
  };

  // Render different components based on activeComponent state
  const renderComponent = () => {
    switch (activeComponent) {
      case "home":
        return <Homepage />;
      case "introduction":
        return <Introduction />;
      case "skills":
        return <Skills />;
      case "myprojects":
        {
          console.log("case");
        }
        return <MyProjects />;

      case "contact":
        return <ContactUs />;

      default:
        return <Homepage />;
    }
  };

  return (
    <div className="App">
      <NavBar onNavClick={handleNavClick} /> {/* Pass handleNavClick as prop */}
      {renderComponent()}
    </div>
  );
};

export default App;
