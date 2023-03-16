import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './component/NavBarLogo';
import Header from './component/Header';
import ProjectsSection from './component/ProjectsSection';
import Footer from './component/Footer';
import Forms from './component/forms';
import "./CSS/file.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar></NavBar>
    <Header></Header>
    <ProjectsSection></ProjectsSection>
    <Forms></Forms>
    <Footer></Footer>
  </React.StrictMode>
);

