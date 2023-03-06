import React from "react";
import styles from "./style.module.css";
export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.sidebar_list}>
        <li style={{ color: "#fff" }}>Home</li>
        <li>Services</li>
        <li>News</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
