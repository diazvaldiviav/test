import BotonEnlace from "./BotonEnlace";
import "./CSS/file.css";


export default function Footer() {
    return(
        <footer className="container-footer">
            <div>
            <div className="item-footer">
                <p><BotonEnlace name="&copy; Victor Diaz" enlace="#"></BotonEnlace></p>
            </div>
            <div className="item-footer">
                <div className="img-phone"></div>
                <BotonEnlace name="786 876 0040" enlace="#"></BotonEnlace>
            </div>
            <div className="item-footer">
                <div className="img-email"></div>
                <BotonEnlace name="diazvaldiviav@gmail.com" enlace="#"></BotonEnlace>
            </div>
            <div className="item-footer">
                <div className="img-git"></div>
                <BotonEnlace name="GitHub" enlace="https://github.com/diazvaldiviav"></BotonEnlace>
            </div>
            </div>
        </footer>
    );
}