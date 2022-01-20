import { useState } from "react";
import styles from "../styles/ContactAbout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faPhoneAlt,
  faEnvelope,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import Swipper, { SwipperlItem } from "./Swipper";
import { hotelinfo } from "../Constants/hotelinfo";
import Image from "next/image";

const Contact = ({ currentTheme }) => {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");

    let data = {
      name: name,
      email: email,
      description: description,
      subject: subject,
    };
    console.log(data);
    setName("");
    setEmail("");
    setSubject("");
    setDescription("");

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setDescription("");
        setSubject("");
      }
    });
  };

  return (
    <div className={styles.contactWrapper}>
      <div className={styles.mapouter}>
        <iframe
          width="100%"
          height="286"
          id="gmap_canvas"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
      <div className={styles.sectionForm}>
        <p className={styles.paragraph}>CONTACT</p>
        <span className={styles.spanText}>Contact us to get</span>
        <br />
        <span className={styles.spanText}>free support</span>
        {!submitted ? (
          <form className={styles.formSection}>
            <textarea
              id="description"
              className={styles.textareaStyles}
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <div className={styles.formInputs}>
              <input
                type="text"
                className={styles.inputStyles}
                name="subject"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              ></input>
              <input
                type="text"
                className={styles.inputStyles}
                name="name"
                placeholder="Name/Surname"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <input
                type="text"
                className={styles.inputStyles}
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <button onClick={handleSubmit}>
                Send
                <FontAwesomeIcon
                  style={{ width: "10px", color: "white" }}
                  icon={faPaperPlane}
                />
              </button>
            </div>
          </form>
        ) : (
          <div> Thank you for your message</div>
        )}
        <div className={styles.iconSection}>
          <div className={styles.iconSectionDisplay}>
            <div className={styles.circule}>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ width: "20px", color: "white" }}
              />
            </div>
            <span className={styles.iconSectionTitle}>Email</span>
            <span>example@yahoo.com</span>
            <span>exampleemail2@yahoo.com</span>
          </div>
          <div className={styles.iconSectionDisplay}>
            <div className={styles.circule}>
              <FontAwesomeIcon
                icon={faPhoneAlt}
                style={{ width: "20px", color: "white" }}
              />
            </div>
            <span className={styles.iconSectionTitle}>Phone</span>
            <span>+ 0 320 422 4254</span>
            <span>+ 0 342 552 523</span>
          </div>
          <div className={styles.iconSectionDisplay}>
            <div className={styles.circule}>
              <FontAwesomeIcon
                icon={faMapMarkedAlt}
                style={{ width: "20px", color: "white" }}
              />
            </div>
            <span className={styles.iconSectionTitle}>Location</span>
            <span>Main Str Chicago Ilinois</span>
            <span>Main Street New York City</span>
          </div>
        </div>
        <p style={{ marginTop: "150px" }} className={styles.paragraph}>
          PHOTOS
        </p>
        <span className={styles.spanText}>See our latest photos</span>
        <br />
        <span className={styles.spanText}>from restaurant</span>
        {hotelinfo.contactImages ? (
          <Swipper>
            {hotelinfo.contactImages.slice(0, 6).map((image, key) => {
              return (
                <SwipperlItem key={key}>
                  <Image
                    src={image.url}
                    width="300"
                    height="300"
                    alt={image.name}
                  />
                </SwipperlItem>
              );
            })}
          </Swipper>
        ) : null}
      </div>
    </div>
  );
};

export default Contact;
