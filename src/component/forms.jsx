import React, { useState , useEffect} from "react";
import "../CSS/file.css";
import axios from "axios";

const API = "https://localhost:7122/api/GeneralInfo";


  
  


export default function Forms() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');



const Info = {
  name,
  email,
  message
}

const onInputNameChange = (event) =>{
  setName(event.target.value)
  Info.name = setName(event.target.value)
}

const onInputEmailChange = (event) =>{
  setEmail(event.target.value)
  Info.email = setEmail(event.target.value)
}

const onInputMessageChange = (event) =>{
  setMessage(event.target.value)
  Info.message = setMessage(event.target.value)
}

//  function Test() {
//    const [info, setInfo] = useState([])
   
//    useEffect(() => {
//      axios
//        .get(`https://localhost:7122/api/generalinfo/`)
//        .then(res => setInfo(res.data))
//    }, [])
 
   
//   //  info.map(item => console.log(item.firstName))
//   return info
//  }

// //https://pokeapi.co/api/v2/pokemon/ditto

const handleSubmit = (e) => {
  e.preventDefault();
  enviarSolicitud(Info);
};

const enviarSolicitud = async(Info) => {
  await axios ({
    method: 'POST', 
    url:`https://localhost:7122/api/generalinfo/`, 
    data: {
      "firstName": Info.name,
      "email": Info.email,
      "message": Info.message
    }}).then(response => console.log(response))
}






  return (
<aside className="signup js-signup-widget">
<div class="signup__front">
      <h2 className="signup__title">Send me a message</h2>
      <div className="signup__desc">
       If you'd like to know more about me send me a message
      </div>
      <div className="signup__form">
        <form onSubmit={handleSubmit} className="form form--signup">
          <div className="form__body">
            <input type="hidden" name="u" value="64781452976687d0f4f2ea370" />
            <input type="hidden" name="id" value="772b9208b5" />
            <input type="hidden" name="SOURCE" value="/mailinglist/" />
            <div className="form__fields">
              <p className="form__field">
                <label htmlfor="mce-FNAME" class="form__label"
                  >First Name</label
                >
                <input
                  type="text"
                  className="form__input"
                  placeholder="Bob"
                  value = {name}
                  onChange={onInputNameChange}
                />
              </p>
              <p className="form__field">
                <label htmlfor="mce-EMAIL" className="form__label">Email Address</label>
                <input
                  type="email"
                  className="form__input"
                  name="EMAIL"
                  placeholder="bob@gmail.com"
                  value={email}
                  onChange={onInputEmailChange}
                />
              </p>
            </div>
            <div className="sr-only" aria-hidden="true">
              <textarea onChange={onInputMessageChange} value={message} className="text-tarea"></textarea>
            </div>
          </div>
          <div className="form__actions">
            <button type="submit" class="btn btn--primary" name="enviar">
              Enviar
            </button>
            <div
              className="form__feedback js-signup-widget-feedback"
              hidden=""
            ></div>
            <div className="spinner">
              <div className="spinner__layercontainer">
                <div className="spinner__layer spinner__layer--1">
                  <div className="spinner__circle-clipper spinner__left">
                    <div className="spinner__circle"></div>
                  </div>
                  <div className="spinner__gap-patch">
                    <div className="spinner__circle"></div>
                  </div>
                  <div className="spinner__circle-clipper spinner__right">
                    <div className="spinner__circle"></div>
                  </div>
                </div>
                <div className="spinner__layer spinner__layer--2">
                  <div className="spinner__circle-clipper spinner__left">
                    <div className="spinner__circle"></div>
                  </div>
                  <div className="spinner__gap-patch">
                    <div className="spinner__circle"></div>
                  </div>
                  <div className="spinner__circle-clipper spinner__right">
                    <div className="spinner__circle"></div>
                  </div>
                </div>
                <div className="spinner__layer spinner__layer--3">
                  <div className="spinner__circle-clipper spinner__left">
                    <div className="spinner__circle"></div>
                  </div>
                  <div className="spinner__gap-patch">
                    <div className="spinner__circle"></div>
                  </div>
                  <div className="spinner__circle-clipper spinner__right">
                    <div className="spinner__circle"></div>
                  </div>
                </div>
                <div className="spinner__layer spinner__layer--4">
                  <div className="spinner__circle-clipper spinner__left">
                    <div className="spinner__circle"></div>
                  </div>
                  <div className="spinner__gap-patch">
                    <div className="spinner__circle"></div>
                  </div>
                  <div className="spinner__circle-clipper spinner__right">
                    <div className="spinner__circle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
 


 <p>Nombre: {name}</p>
 <p>Email: {email}</p>
 <p>Message: {message}</p>
</aside>
  );
}

