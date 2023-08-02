import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import bcg11 from "../../assets/bcg11.jpeg";
import Button from "../Button/Button";
import "../Form/Form.scss";

const Form = () => {
  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8sjpl4f",
        "template_96glbjq",
        e.target,
        "gxhVuR-MaQt-BRs6F"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="formArea">
      <div className="formArea__frame">
        <img className="formArea__img" src={bcg11} alt="przykład ciast" />
      </div>
      <form className="form" onSubmit={sendEmail}>
        <h3 className="form__heading">Formularz kontaktowy</h3>

        <label htmlFor="name"></label>
        <input
          type="text"
          className="form__control"
          id="name"
          name="name"
          aria-describedby="emailHelp"
          placeholder="Imię i nazwisko *"
          required
        />

        <label htmlFor="email"></label>
        <input
          type="email"
          className="form__control"
          id="email"
          name="email"
          placeholder="Email *"
          required
        />

        <label htmlFor="phone"></label>
        <input
          type="tel"
          className="form__control"
          id="phone"
          name="phone"
          placeholder="Telefon *"
          required
        />

        <textarea
          className="form__control form__control--message"
          id="message"
          name="message"
          placeholder="Twoja wiadomość *"
          maxLength={200}
          required
        />
        <p className="form__info">* pole wymagane</p>
        <Button value={"Wyślij"} type={"submit"} />
      </form>
    </div>
  );
};

export default Form;