import React from "react";
import styles from "./style.module.css";
import logo from "../../Util/Images/logoNCC 1.png";
import LoremCard from "../LoremCard/LoremCard";
import css from "../../Util/Images/css-icon 1.svg";
import html from "../../Util/Images/html-icon 1.svg";
import url from "../../Util/Images/url-icon 1.svg";
import Drawer from "../Drawer/Drawer";
export default function Content() {
  return (
    <div className={styles.bodyContent}>
      <div className={styles.Drawer}>
        <Drawer />
      </div>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.loremBox}>
        <h4 className={styles.loremTitle}>Lorem ipsum dolor sit asmet?</h4>
        <div className={styles.loremContent}>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tristique consequat placerat. Vestibulum auctor pellentesque sem, eu
            posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
            facilisis, ligula in mattis sodales, augue justo tristique nulla,
            sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
            mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
            convallis. Quisque suscipit maximus vestibulum. Phasellus congue
            mollis orci, sit amet luctus augue tristique eu. Donec vulputate
            odio neque, sed semper turpis pellentesque a.
          </span>
        </div>
      </div>
      <div className={styles.loremCard}>
        <LoremCard img={css} />
        <LoremCard img={html} />
        <LoremCard img={url} />
      </div>
    </div>
  );
}
