import BotonEnlace from "./BotonEnlace";
import "./CSS/file.css";

export default function ProjectsSection() {
  return (
    <div className="container-portfolio">
    <h1>My projects</h1>
    <section className="main-contain-portfolio">
      <div className="item-1">
        <div className="item-img-1"></div>
        <p className="item-descripcion"><span>Green Component Software</span><br></br>corporate website done with HTML5, CSS and JS. "In progress"</p>
        <BotonEnlace name="More Info" enlace="https://diazvaldiviav.github.io/PROYECTO-DE-SITIO/index.html"></BotonEnlace>
      </div>
      <div className="item-2">
        <div className="item-img-2"></div>
        <p className="item-descripcion"><span>Company of electrician</span><br></br>computer inventory done with ASP.NET, C# and Entity Framework</p>
        <BotonEnlace name="More Info" enlace="https://inventarioobe.azurewebsites.net"></BotonEnlace>
      </div>
      <div className="item-3">
        <div className="item-img-3"></div>
        <p className="item-descripcion"><span>BatatBit</span><br></br>Layout about a Bitcoin site done with html5 and CSS</p>
        <BotonEnlace name="More Info" enlace="https://inventarioobe.azurewebsites.net"></BotonEnlace>
      </div>
    </section>
    </div>
  );
}
