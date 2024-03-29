import NavBarBotons from "./NavBarBotons";
import "../CSS/file.css";


export default function NavBarLogo() {
  return (
    <div className="container-nav">
      <nav className="Navbar">
        <a href="#who-i-am" className="d-flex">
          <div className="container-logo">
          <div className="img-logo"></div>
          <span className="My-name-container">
            <span className="My-name">Victor Diaz</span>
          </span>
          </div>
        </a>
       <NavBarBotons/>
      </nav>
    </div>
  );
}
