import Head from "next/head";
import Contact from "../Components/Contact";
import HeadTag from "../Components/HeadTag";

export default function Home() {
  return (
    <div>
      <HeadTag page="Contact" />
      <Contact />
    </div>
  );
}
