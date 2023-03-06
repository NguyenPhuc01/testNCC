import React, { useRef } from "react";
import styles from "./style.module.css";
export default function Drawer() {
  const mysideNav = useRef();
  const closeNav = () => {
    mysideNav.current.style.width = "0";
  };
  const openNav = () => {
    mysideNav.current.style.width = "250px";
  };
  return (
    <div>
      <div id="mySidenav" className={styles.sidenav} ref={mysideNav}>
        <a className={styles.closebtn} onClick={closeNav}>
          &times;
        </a>
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">News</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div>
      <span
        onClick={openNav}
        style={{
          display: "flex",
          justifyContent: "end",
          marginRight: 10,
          fontSize: 25,
        }}
      >
        &#9776;
      </span>
    </div>
  );
}
