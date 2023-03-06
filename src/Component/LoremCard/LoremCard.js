import React from "react";
import styles from "./style.module.css";
export default function LoremCard({ img }) {
  return (
    <div className={styles.boxLorem}>
      <h4 className={styles.loremTitle}>Lorem ipsum dolor sit amet</h4>
      <div className={styles.loremContent}>
        <img src={img} alt="" style={{ marginRight: 18 }} />
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
          sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
          accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
          massa in metus bibendum congue. Pellentesque ultrices liquam egestas
          nunc at
        </span>
      </div>
      <div>
        <span>
          ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
          ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
          porta massa in metus bibendum congue. Pellentesque ultrices vestibulum
          mattis.
        </span>
      </div>
    </div>
  );
}
