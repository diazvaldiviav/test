import { useState } from "react";
import "./CSS/file.css";

// const [active, setActive] = useState("nav__menu");
//   const [icon, setIcon] = useState("nav__toggler");
//   const navToggle = () => {
//     if (active === "nav__menu") {
//       setActive("nav__menu nav__active");
//     } else setActive("nav__menu");

//     // Icon Toggler
//     if (icon === "nav__toggler") {
//       setIcon("nav__toggler toggle");
//     } else setIcon("nav__toggler");
//   };



export default function NavBarBotons() {
  const [active, setActive] = useState("container-inactive");
  const [icon, setIcon] = useState("Burger-boton");
  const navToggle = () => {
    if (active === "container-inactive") {
      setActive("container-active container-main");
    } else setActive("container-inactive");

    // Icon Toggler
    if (icon === "Burger-boton") {
      setIcon("Burger-boton");
    } else setIcon("Burger-boton");
  };
  return (
    <section className="container-botons">
      <div className={icon} onClick={navToggle}></div>

      <div className={active}>
        <ul className="botons-list">
          <li>
            <a href="#">Who am I?</a>
          </li>
          <li>
            <a href="#">My proyects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
