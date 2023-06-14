import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "./App.scss";

// Hey there, thanks for checking out my code!
// Since this is a simple static site, I decided
// It wasnt worth the time to make seperate components.
// So sorry if there's not much that's interesting to see!
// MUI is one of my favorite components, so I work with it often.

function App() {

  const [isDarkMode, setIsDarkmode] = useState(false);
  
  const handleDarkMode = () => {
    setIsDarkmode((prev) => !prev);
  };

  return (
    <div className={`app ${isDarkMode ? "dark" : ""}`}>
      <div className="sidebar">
        <div className="sidebar-group top">
          <div className="sidebar-item">Patrick's Portfolio</div>
          <div className="sidebar-item">
            <LightModeIcon className="icon" />
            <Switch onClick={handleDarkMode} />
            <DarkModeIcon className="icon" />
          </div>
        </div>
        <div className="sidebar-group middle">
          <div className="sidebar-item link">Top</div>
          <div className="sidebar-item link">About</div>
          <div className="sidebar-item link">Projects</div>
          <div className="sidebar-item link">Contact</div>
        </div>
        <div className="sidebar-group bottom">
          <div className="sidebar-item link">
            <ContactPageIcon />
            Resume
          </div>
          <div className="sidebar-item link">
            <LinkedInIcon className="icon" />
            LinkedIn
          </div>
          <div className="sidebar-item link">
            <GitHubIcon className="icon" />
            GitHub
          </div>
          <div className="sidebar-item email">
            <EmailIcon className="icon" />
          </div>
          <div className="sidebar-item">mcmahanconner@gmail.com</div>
        </div>
      </div>
      <div className="page">
        <div className="content">hello, world</div>
        <div className="content">hello, world</div>
        <div className="content">hello, world</div>
        <div className="content">hello, world</div>
      </div>
    </div>
  );
}

export default App;
