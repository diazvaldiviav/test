import "../CSS/file.css";

export default function Forms() {
  return (
<aside className="signup js-signup-widget">
<div class="signup__front">
      <h2 class="signup__title">Send me a message</h2>
      <div class="signup__desc">
       If you'd like to know more about me send me a message
      </div>
      <div class="signup__form">
        <form
          action="#"
          method="POST"
          className="form form--signup"
        >
          <div class="form__body">
            <input type="hidden" name="u" value="64781452976687d0f4f2ea370" />
            <input type="hidden" name="id" value="772b9208b5" />
            <input type="hidden" name="SOURCE" value="/mailinglist/" />
            <div className="form__fields">
              <p className="form__field">
                <label for="mce-FNAME" class="form__label"
                  >First Name</label
                >
                <input
                  type="text"
                  className="form__input"
                  value=""
                  name="FNAME"
                  id="mce-FNAME"
                  placeholder="Bob"
                />
              </p>
              <p className="form__field">
                <label for="mce-EMAIL" className="form__label">Email Address</label>
                <input
                  type="email"
                  class="form__input"
                  value=""
                  name="EMAIL"
                  id="mce-EMAIL"
                  placeholder="bob@gmail.com"
                  required=""
                />
              </p>
            </div>
            <div class="sr-only" aria-hidden="true">
              <textarea className="text-tarea"></textarea>
            </div>
          </div>
          <div class="form__actions">
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
  
</aside>
  );
}
