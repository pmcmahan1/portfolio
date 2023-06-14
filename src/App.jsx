import React, { useState } from 'react'
import Switch from '@mui/material/Switch';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import './App.scss'


function App() {

 const [isDarkMode, setIsDarkmode] = useState(false)

 const handleDarkMode = () => {
  setIsDarkmode(prev => !prev)
 }

  return (
<div className={`app ${isDarkMode ? "dark" : ""}`}>
  <div className="sidebar">
    <div className="sidebar-group-top">
    <div className="sidebar-item">Patrick's Portfolio</div>
    <div className="sidebar-item">
      <LightModeIcon />
      <Switch onClick={handleDarkMode}/>
      <DarkModeIcon />
      </div>
     </div>   
     <div className="sidebar-group-middle">
    <div className="sidebar-item link">Top</div>
    <div className="sidebar-item link">About</div>
    <div className="sidebar-item link">Projects</div>
    <div className="sidebar-item link">Contact</div>
    </div>
    <div className="sidebar-group-bottom">
    <div className="sidebar-item link"><ContactPageIcon />Resume</div>
    <div className="sidebar-item link"><LinkedInIcon />LinkedIn</div>
    <div className="sidebar-item link"><GitHubIcon />GitHub</div>
    <div className="sidebar-item email"><EmailIcon /></div>
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
  )
}

export default App
