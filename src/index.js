import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './NavBarLogo';
import Header from './Header';
import ProjectsSection from './ProjectsSection';
import Footer from './Footer';
import "./CSS/file.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar></NavBar>
    <Header></Header>
    <ProjectsSection></ProjectsSection>
    <Footer></Footer>
  </React.StrictMode>
);

