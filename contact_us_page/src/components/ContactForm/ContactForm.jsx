import { Buutton } from "./Button/Buutton";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export const ContactForm = () => {
  const onViaCall = () => {
    console.log("I am From Call");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("name", event.target[0].value);
    console.log("email", event.target[1].value);
    console.log("text", event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.form}>
        <div className={styles.top_btn}>
          <Buutton
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Buutton
            onClick={onViaCall}
            text="VIA CALL"
            icon={<FaPhoneAlt fontSize="24px" />}
          />
        </div>
        <Buutton
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
          isOutline={true}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="7" />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Buutton text="SUBMIT" />
          </div>
        </form>
      </div>
      <div className={styles.contactImage}>
        <img src="/contact.svg" alt="contact image" />
      </div>
    </section>
  );
};
