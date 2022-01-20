import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import Facebook from "../styles/facebook.svg";
import Twitter from "../styles/twitter.svg";
import Google from "../styles/google.svg";
import Contact1 from "../styles/contact1.png";
import Contact2 from "../styles/contact2.png";
import Contact3 from "../styles/contact3.png";
import Contact4 from "../styles/contact4.png";
import About1 from "../styles/about1.png";
import About2 from "../styles/about2.png";
import About3 from "../styles/about3.png";
import AboutBackground from "../styles/about4-background.png";

export const hotelinfo = {
  logoText: "Zetta ",
  contact: {
    email: "example@yahoo.com",
    phone: "1+ 0 320 422 4254",
  },
  socials: [
    { name: "facebook", url: Facebook },
    { name: "twitter", url: Twitter },
    { name: "google", url: Google },
  ],
  description:
    "Our hotel is an image of quality and profesionalism combined with hard work and precision. You can expect only the best services from our staff.",
  contact: [
    { name: "example@yahoo.com", link: "", icon: faEnvelope },
    { name: "+ 0 320 422 4254", link: "", icon: faPhoneAlt },
    { name: "Main Str Chicago IIinois", link: "", icon: faMapMarkedAlt },
  ],
  usefulLinks: [
    { type: "Blog", link: "" },
    { type: "Rooms", link: "" },
    { type: "Gift Card", link: "" },
    { type: "Testimonials", link: "" },
  ],
  privacy: [
    { type: "Career", link: "" },
    { type: "About Us", link: "" },
    { type: "Contact Us", link: "" },
    { type: "Services", link: "" },
  ],
  contactImages: [
    { name: "contact1", url: Contact1 },
    { name: "contact2", url: Contact2 },
    { name: "contact3", url: Contact3 },
    { name: "contact4", url: Contact4 },
  ],
  aboutImages: [
    { name: "about1", url: About1 },
    { name: "about2", url: About2 },
    { name: "about3", url: About3 },
    { name: "about4-background", url: AboutBackground },
  ],
  blogText: [
    {
      title: "Free Wifito stay connected",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 150",
    },
    {
      title: "4K Television and Netflix included",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 150",
    },
    {
      title: "Span zone where you can chill",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 150",
    },
    {
      title: "Spacious rooms for awesome parties",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 150",
    },
  ],
  greeting: {
    title: "Hey there, I am Michael.",
    subtitle:
      "Michael Gary Scott is a fictional character in NBC's The Office, portrayed by Steve Carell. Michael is the protagonist of the series, serving as the Regional Manager of the Scranton branch of a paper distribution company, Dunder Mifflin Inc. Also, that's what she said!",
  },
};


