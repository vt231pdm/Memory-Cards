import React from "react";
import styles from "../styles/App.module.css";

export const Card = ({ content, isFlipped, onClick }) => {
  return (
    <div
      className={`${styles.card} ${isFlipped ? styles.cardFlipped : ""}`}
      onClick={onClick}
    >
      <div className={styles.cardFace}>{isFlipped ? content : "?"}</div>
    </div>
  );
};
