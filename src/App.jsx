import React, { useState } from 'react'
import Switch from '@mui/material/Switch';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
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
    <div className="sidebar-item">Top</div>
    <div className="sidebar-item">About</div>
    <div className="sidebar-item">Projects</div>
    <div className="sidebar-item">Contact</div>
    </div>
    <div className="sidebar-group-bottom">
    <div className="sidebar-item">My Resume</div>
    <div className="sidebar-item">My LinkedIn</div>
    <div className="sidebar-item">My GitHub</div>
    <div className="sidebar-item">Email:</div>
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
