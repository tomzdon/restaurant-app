import styles from "../styles/NavbarFooter.module.css";
import { hotelinfo } from "../Constants/hotelinfo";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className={styles.footermain} style={{ color: "rgb(136,136,136)" }}>
      <div className={styles.footertable}>
        <ul>
          <li className={styles.listHeading}>Zetta Hotels</li>
          <li
            style={{
              maxWidth: "265px",
              textAlign: "justify",
              paddingBottom: "5px",
            }}
          >
            {hotelinfo.description}
          </li>
        </ul>
        <ul>
          <li className={styles.listHeading}>Useful links</li>
          {hotelinfo.usefulLinks
            ? hotelinfo.usefulLinks.map((link, key) => {
                return (
                  <Link href={link.link} key={key}>
                    <a className={styles.linksFooter}>
                      <li>{link.type}</li>
                    </a>
                  </Link>
                );
              })
            : null}
        </ul>
        <ul>
          <li className={styles.listHeading}>Privacy</li>
          {hotelinfo.privacy
            ? hotelinfo.privacy.map((privacy, key) => {
                return (
                  <Link href={privacy.link} key={key}>
                    <a className={styles.linksFooter}>
                      <li>{privacy.type}</li>
                    </a>
                  </Link>
                );
              })
            : null}
        </ul>
        <ul>
          <li className={styles.listHeading}>Contact Info</li>
          {hotelinfo.contact
            ? hotelinfo.contact.map((contact, key) => {
                return (
                  <Link href={contact.link} key={key}>
                    <a>
                      <li>
                        <div className={styles.contactSection}>
                          <FontAwesomeIcon
                            icon={contact.icon}
                            className={styles.iconsFooter}
                          />
                          {contact.name}
                        </div>
                      </li>
                    </a>
                  </Link>
                );
              })
            : null}
        </ul>
        <div className={styles.socialFooter}>
          {hotelinfo.socials
            ? hotelinfo.socials.map((social) => (
                <Image
                  key={social.name}
                  alt={social.name}
                  src={social.url}
                  width="35"
                  height="35"
                  style={{ backgroundColor: "black" }}
                />
              ))
            : null}
        </div>
      </div>
      <div className={styles.copyright}>
        <span>
          Copyright ©2020 All rights reserved | This template is made with love
          by <span style={{ color: "rgb(88, 99, 248)" }}>Marian</span>
        </span>
        <span style={{ color: "rgb(88, 99, 248)" }}>www.portfolioname.com</span>
      </div>
    </div>
  );
};

export default Footer;
