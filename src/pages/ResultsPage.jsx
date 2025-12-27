import React from "react";
import ReactDOM from "react-dom";
import styles from "../styles/App.module.css";

export const ResultModal = ({ moves, onRestart, onNewGame }) => {
  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div style={{ fontSize: "4rem", marginBottom: "10px" }}>🎉</div>
        <h2>Чудова робота!</h2>
        <p>
          Ваш результат: <strong>{moves}</strong> ходів
        </p>
        <div className={styles.modalButtons}>
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
