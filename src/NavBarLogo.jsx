import NavBarBotons from "./NavBarBotons";
import "./CSS/file.css";


export default function NavBarLogo() {
  return (
    <div className="container-nav">
      <nav className="Navbar">
        <a href="#" className="d-flex p-4">
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
