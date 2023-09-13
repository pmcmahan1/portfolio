import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { Tooltip, IconButton } from "@mui/material";
import { ContactUs } from "./Contact";
import { ToastContainer, toast } from "react-toastify";
import { Link, animateScroll as scroll } from "react-scroll";
import "react-toastify/dist/ReactToastify.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { FaHtml5, FaCss3Alt, FaReact, FaGitSquare } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import avatar from "./avatar.jpg";
import preview from "./preview.jpg";
import data from "./data";
import Card from "./Card";
import Pdf from "./Patrick McMahan Resume.pdf";
import "./App.scss";

// Hey there, thanks for checking out my code!
// Since this is a simple static site, I decided
// It wasnt worth the time to make seperate components.
// So sorry if there's not much that's interesting to see!

function App() {
  const cards = data.map((item) => {
    return <Card key={item.title} {...item} />;
  });

  const [isDarkMode, setIsDarkmode] = useState(false);
  const notify = () => toast("Message sent!");

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
          <div
            className="sidebar-item link"
            onClick={() => scroll.scrollToTop()}
          >
            Top
          </div>
          <Link to="about" smooth={true}>
            <div className="sidebar-item link">About</div>
          </Link>
          <Link to="projects" smooth={true}>
            <div className="sidebar-item link">Projects</div>
          </Link>
          <div
            className="sidebar-item link"
            onClick={() => scroll.scrollToBottom()}
          >
            Contact
          </div>
        </div>
        <div className="sidebar-group bottom">
          <a href={Pdf} target="_blank" rel="noopener noreferrer">
            <div className="sidebar-item link">
              <ContactPageIcon />
              Resume
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/patrick-mcmahan-736a42234/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="sidebar-item link">
              <LinkedInIcon className="icon" />
              LinkedIn
            </div>
          </a>
          <a
            href="https://github.com/pmcmahan1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="sidebar-item link">
              <GitHubIcon className="icon" />
              GitHub
            </div>
          </a>
          <div className="sidebar-item email">
            <EmailIcon className="icon" />
          </div>
          <div className="sidebar-item">mcmahanconner@gmail.com</div>
        </div>
      </div>
      <div className="page">
        <div className="content">
          <div className="media-warning">
            Best viewed on Desktop
            <br />
            <div className="media-switch">
              <LightModeIcon className="icon" />
              <Switch onClick={handleDarkMode} />
              <DarkModeIcon className="icon" />
            </div>
          </div>
          <div className="intro">
            <div className="intro-headtext">
              <div>
                Hello,
                <br />
                my name is Patrick.
              </div>
              <img src={avatar} alt="" className="avatar" />
            </div>
            <div className="intro-bodytext">
              I have experience in repairing and maintaining electronic devices,
              providing exceptional customer service, full-stack development,
              troubleshooting, research, and process optimization. I possess
              keen interpersonal, communication, and organizational skills, as
              well as a strong proficiency in technology, computer science, and
              education. I earned a Bachelor's degree in History with a minor in
              Business Administration from the University of South Carolina. My
              core competencies include expertise in research and
              troubleshooting, process improvement, problem-solving, and
              analytical and technical skills. I am a self-learner with a strong
              drive to continue expanding and developing my skills
            </div>
          </div>
        </div>
        <div className="content">
          <div className="about" id="about">
            <div className="about-headtext">About Me</div>
            <div className="about-bodytext">
              Since I was a child, I have enjoyed being a part of development
              productions. My interest in development started when I began
              creating game modes for the popular video game Roblox using Lua.
              In this capacity, I collaborated with friends in a team
              environment to provide fun experiences. I continued this passion
              in a game called Garry's Mod, where I followed the same
              principles. Subsequently, I pursued a Bachelor's degree in History
              with a minor in Business Administration at the University of South
              Carolina while also enjoying development activities as a hobby on
              the side.
              <br />
              <br />
              After returning from teaching English overseas, I decided to
              transform my interest in the development process into a full-time
              passion. I began my journey with The Odin Project and continued to
              explore other free learning resources such as Scrimba,
              freeCodeCamp, and HarvardX. My primary focus was on learning HTML,
              CSS, and Javascript, which eventually led me to discover React, a
              powerful JavaScript library that I instantly found enjoyable for
              building applications.
              <br />
              <br />
              When I'm not at my computer, I enjoy lifting weights and playing
              sports such as volleyball and basketball. Recently, I've also
              taken up hiking and traveling out west to explore some of our
              great national parks, including the Grand Canyon and Zion. My
              future goals include obtaining a position as a Business Analyst,
              where I can effectively utilize my soft skills in combination with
              my technical knowledge.
            </div>
            <div className="about-skills">
              <Tooltip
                title="HTML5"
                disableInteractive
                disableRipple
                className="skill-logo"
              >
                <IconButton>
                  <FaHtml5 size={50} />
                </IconButton>
              </Tooltip>
              <Tooltip
                title="CSS3"
                disableInteractive
                disableRipple
                className="skill-logo"
              >
                <IconButton>
                  <FaCss3Alt size={50} />
                </IconButton>
              </Tooltip>
              <Tooltip
                title="JavaScript ES6"
                disableInteractive
                disableRipple
                className="skill-logo"
              >
                <IconButton>
                  <IoLogoJavascript size={50} />
                </IconButton>
              </Tooltip>
              <Tooltip
                title="React"
                disableInteractive
                disableRipple
                className="skill-logo"
              >
                <IconButton>
                  <FaReact size={50} />
                </IconButton>
              </Tooltip>
              <Tooltip
                title="Git"
                disableInteractive
                disableRipple
                className="skill-logo"
              >
                <IconButton>
                  <FaGitSquare size={50} />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="projects" id="projects">
            <div className="projects-headtext">My Projects</div>
            <div className="projects-featured">
              <div className="featured-header">Featured Project</div>
              <div className="featured-container">
                <div className="featured-title">Project Zomboid Builder</div>
                <div className="featured-desc">
                  This React application was inspired by the game Project
                  Zomboid. You can select different occupations and positive or
                  negative traits that will impact your character's starting
                  statistics. This project was incredibly fun for me and has
                  some pretty intricate React/Javascript functionality. I
                  learned alot about custom components, conditional renders, and
                  properly tracking and modifying state variables.
                </div>
                <div className="featured-img">
                  <img src={preview} alt="" />
                </div>
                <div className="featured-buttons">
                  <a
                    href="https://pmcmahan1.github.io/pz-builder/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="primary">View Site</button>
                  </a>
                  <a
                    href="https://github.com/pmcmahan1/pz-builder"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="secondary">Source Code</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="featured-header">Other Recent Projects</div>
            <div className="projects-list">{cards}</div>
          </div>
        </div>
        <div className="featured-header for-contact">Contact</div>
        <div className="content contact-container">
          <div className="contact">
            <ContactUs notify={notify} />
            <div className="contact-text">
              <div className="contact-text-head">Message me</div>
              <div className="contact-text-body">
                If you have any questions or would like to reach out to me,
                please use the following form. I look forward to hearing from
                you!
              </div>
            </div>
          </div>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="light"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
