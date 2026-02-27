import React from "react";
import ReactDOM from "react-dom";
import styles from "../styles/App.module.css";
/** @module Components */
/**
 * Модальне вікно з результатами гри.
 *
 * Відображається після завершення гри та показує кількість ходів.
 * Рендериться через React Portal у document.body.
 *
 * @component
 * @param {Object} props - Властивості компонента.
 * @param {number} props.moves - Кількість ходів, за які гравець завершив гру.
 * @param {function} props.onRestart - Обробник для перезапуску поточної гри.
 * @param {function} props.onNewGame - Обробник для повернення на головну сторінку.
 *
 * @returns {JSX.Element} Модальне вікно з результатами та кнопками керування.
 */
export const ResultModal = ({ moves, onRestart, onNewGame }) => {
  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>🎉 Вітаємо!</h2>
        <p>
          Ви знайшли всі пари за <strong>{moves}</strong> ходів.
        </p>
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button onClick={onRestart} className="btn btn-primary">
            Зіграти ще раз
          </button>
          <button onClick={onNewGame} className="btn btn-secondary">
            На головну
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
};
