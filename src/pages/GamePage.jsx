import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMemoryGame } from "../hooks/useMemoryGame";
import { Card } from "../components/Card";
import styles from "../styles/App.module.css";

export const GamePage = ({ onFinish }) => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const { cards, moves, handleCardClick, initGame } = useMemoryGame(() => {
    onFinish(moves, userId);
  });

  useEffect(() => {
    initGame();
  }, [initGame]);

  return (
    <div className={styles.content}>
      <div className={styles.userIdDisplay}>
        Гравець: <strong>{userId}</strong>
      </div>

      <div className={styles.stats}>
        <span>Хиби: {moves}</span>
        <button className="btn btn-secondary" onClick={() => navigate("/")}>
          Завершити
        </button>
      </div>

      <div className={styles.grid}>
        {cards.map((card) => (
          <Card
            key={card.id}
            content={card.content}
            isFlipped={card.isFlipped || card.isMatched}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </div>
    </div>
  );
};
