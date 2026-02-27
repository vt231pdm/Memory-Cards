import React from "react";
import styles from "../styles/App.module.css";
/** @module Components */
/**
 * Компонент картки з можливістю перевертання.
 *
 * Відображає прихований символ "?" або переданий контент,
 * залежно від стану `isFlipped`.
 *
 * @component
 * @param {Object} props - Властивості компонента.
 * @param {React.ReactNode} props.content - Вміст картки, який відображається при перевертанні.
 * @param {boolean} props.isFlipped - Визначає, чи перевернута картка.
 * @param {function} props.onClick - Обробник кліку по картці.
 *
 * @returns {JSX.Element} Рендерить інтерактивну картку.
 */
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
