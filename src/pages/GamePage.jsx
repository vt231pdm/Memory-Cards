import { useEffect } from "react";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { useMemoryGame } from "../hooks/useMemoryGame";

export const GamePage = ({ onFinish, setMoves }) => {
  const { cards, moves, handleCardClick, initGame } = useMemoryGame(onFinish);

  useEffect(() => {
    initGame();
  }, []);

  useEffect(() => {
    setMoves(moves);
  }, [moves, setMoves]);

  return (
    <div className="page game-screen">
      <div className="stats">
        <span>Спроби: {moves}</span>
        <Button variant="secondary" onClick={onFinish}>
          Завершити
        </Button>
      </div>
      <div className="grid">
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
