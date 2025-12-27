import { useState, useEffect, useCallback } from "react";
import { useGameStore } from "../store/useGameStore";

const ALL_EMOJIS = [
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🍍",
  "🥝",
  "🍉",
  "🍒",
  "🍑",
  "🍐",
  "🫐",
  "🥑",
  "🥦",
  "🌽",
  "🥕",
];

export const useMemoryGame = (onFinish) => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const cardCount = useGameStore((state) => state.cardCount);

  const initGame = useCallback(() => {
    const selectedEmojis = [...ALL_EMOJIS]
      .sort(() => Math.random() - 0.5)
      .slice(0, cardCount);
    const deck = [...selectedEmojis, ...selectedEmojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        content: emoji,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(deck);
    setMoves(0);
    setMatchedPairs(0);
    setFlippedCards([]);
    setIsGameOver(false);
  }, [cardCount]);

  const handleCardClick = (id) => {
    if (isGameOver) return;
    const card = cards.find((c) => c.id === id);
    if (card.isFlipped || card.isMatched || flippedCards.length === 2) return;

    const newCards = cards.map((c) =>
      c.id === id ? { ...c, isFlipped: true } : c
    );
    setCards(newCards);
    setFlippedCards((prev) => [...prev, card]);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      setMoves((prev) => prev + 1);
      const [first, second] = flippedCards;
      if (first.content === second.content) {
        setCards((prev) =>
          prev.map((c) =>
            c.content === first.content ? { ...c, isMatched: true } : c
          )
        );
        setMatchedPairs((prev) => prev + 1);
        setFlippedCards([]);
      } else {
        const timer = setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.id === first.id || c.id === second.id
                ? { ...c, isFlipped: false }
                : c
            )
          );
          setFlippedCards([]);
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [flippedCards]);

  useEffect(() => {
    if (matchedPairs > 0 && matchedPairs === Number(cardCount) && !isGameOver) {
      setIsGameOver(true);
      onFinish();
    }
  }, [matchedPairs, cardCount, isGameOver, onFinish]);

  return { cards, moves, handleCardClick, initGame };
};
