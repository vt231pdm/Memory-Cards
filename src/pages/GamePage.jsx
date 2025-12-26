import { Card } from "../components/Card";
import { Button } from "../components/Button";

export const GamePage = ({ onFinish, moves, setMoves }) => {
  const demoCards = Array(12).fill({ emoji: "🍎", flipped: false });

  const handleCardClick = () => {
    setMoves((prev) => prev + 1);
  };

  return (
    <div className="page game-screen">
      <div className="stats">
        <span>Спроби: {moves}</span>
        <Button variant="secondary" onClick={onFinish}>
          Завершити
        </Button>
      </div>
      <div className="grid">
        {demoCards.map((card, i) => (
          <Card
            key={i}
            content={card.emoji}
            isFlipped={card.flipped}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
};
