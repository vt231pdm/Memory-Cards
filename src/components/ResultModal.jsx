import React from "react";
import ReactDOM from "react-dom";
import styles from "../styles/App.module.css";

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
    document.body
  );
};
