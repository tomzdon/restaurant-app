import styles from "../styles/NavbarFooter.module.css";
import Navlinks from "./Navlinks";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { asPath } = useRouter();
  const [pageName, setPageName] = useState();

  useEffect(() => {
    switch (asPath) {
      case "/contact":
        setPageName("Contact");
        return;
      case "/about":
        setPageName("About Us");
        return;
      default:
        setPageName("Contact");
    }
  }, [asPath]);

  return (
    <div>
      <div className={styles.navbar}>
        <div style={{ maxWidth: "1200px", margin: "auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <Link href="/">
              <a>
                <h2 className={styles.logo}>Zetta Hotels</h2>
              </a>
            </Link>
            <div style={{ display: "flex" }}>
              <Navlinks />
            </div>
          </div>
          <div
            style={{
              color: "white",
              paddingTop: "40px",
            }}
          >
            <h1 style={{ fontSize: "42px", fontWeight: "bold" }}>{pageName}</h1>
            <h5 style={{ fontSize: "14px" }}>Home&nbsp;&nbsp;|&nbsp;&nbsp;{pageName}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
