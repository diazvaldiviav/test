import "./CSS/file.css";

export default function BotonEnlace(props) {
  return <a target="_blank" className="Boton-enlace" href={props.enlace}>{props.name}</a>;
}
