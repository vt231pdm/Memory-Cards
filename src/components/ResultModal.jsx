import ReactDOM from "react-dom";

export const ResultModal = ({ moves, onRestart, onNewGame }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-icon">🎉</div>
        <h2>Чудова робота!</h2>
        <p>
          Ваш результат: <strong>{moves}</strong> ходів
        </p>
        <div className="modal-buttons">
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
