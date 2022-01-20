import { useState } from "react";
import styles from "../styles/ContactAbout.module.css";
import Swipper, { SwipperlItem } from "./Swipper";
import { hotelinfo } from "../Constants/hotelinfo";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import BlogCard from "./BlogCard";

const About = () => {
  return (
    <>
      <div className={styles.contactWrapper}>
        <div className={styles.sectionReadMore}>
          <div className={styles.sectionReadMoreText}>
            <p style={{ marginTop: "150px" }} className={styles.paragraph}>
              ABOUT US
            </p>
            <span className={styles.spanText}>Trust and quality</span>
            <span className={styles.spanText}>are our atuus</span>
            <div
              style={{
                fontWeight: "bold",
                marginBottom: "10px",
                marginTop: "10px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div style={{ color: "rgb(143,143,143)" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <button className={styles.sectionReadMoreButton}>
              Read more
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ width: "15px", color: "white", marginLeft: "10px" }}
              />
            </button>
          </div>
          <div
            className={styles.sectionReadMorePhotos}
            style={{ marginTop: "150px" }}
          >
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <Image
                src={hotelinfo.aboutImages[0].url}
                width="auto"
                height="185"
                alt="about"
              />
              <Image
                src={hotelinfo.aboutImages[1].url}
                width="auto"
                height="185"
                alt="about1"
              />
            </div>
            <Image
              src={hotelinfo.aboutImages[2].url}
              width="536"
              height="260"
              alt="about2"
            />
          </div>
        </div>
      </div>

      <div className={styles.sectionBlock}>
        <div className={styles.contactWrapper}>
          <p style={{ paddingTop: "50px" }} className={styles.paragraph}>
            ABOUT US
          </p>
          <span style={{ color: "white" }} className={styles.spanText}>
            We bring you the
          </span>
          <br />
          <span style={{ color: "white" }} className={styles.spanText}>
            finest details
          </span>
          {hotelinfo.blogText ? (
            <Swipper isExternalButton={true}>
              {hotelinfo.blogText.slice(0, 6).map((blog, key) => {
                return (
                  <SwipperlItem key={key} style={{marginRight: '10px'}}>
                    <BlogCard blog={blog} />
                  </SwipperlItem>
                );
              })}
            </Swipper>
          ) : null}
        </div>
      </div>
      <div className={styles.contactWrapper}>
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
    </>
  );
};

export default About;
