import styles from "./Contact.module.css";
import Button from "../Button/Button";
import { MdOutlineMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useEffect, useState } from "react";

const ContactForm = (event) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")

    const funCall = (event) => {
    event.preventDefault();

    setName(event.target[0].value)
    setEmail (event.target[1].value);
    setText (event.target[2].value);
  }
  ;
  useEffect(()=>{
    if(name!="",email!="",text!="")
    {
      alert(`
    My name is ${name},
    My mail id is ${email},
    About : ${text}
    `)
    ;}
  },[name,email,text,funCall])
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdOutlineMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />

        <form onSubmit={event => funCall(event)}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="./Images/contact.svg" alt="content image" />
      </div>
    </section>
  );
};

export default ContactForm;
