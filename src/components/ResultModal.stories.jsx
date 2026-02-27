import { ResultModal } from "./ResultModal";
import "../styles/App.module.css";

export default {
  title: "Components/ResultModal",
  component: ResultModal,
  parameters: {
    layout: "fullscreen",
  },
};

// Варіація 1
export const Default = {
  args: {
    moves: 15,
    onRestart: () => console.log("Restart clicked"),
    onNewGame: () => console.log("New Game clicked"),
  },
};

// Варіація 2
export const HighScore = {
  args: {
    moves: 6,
    onRestart: () => console.log("Restart clicked"),
    onNewGame: () => console.log("New Game clicked"),
  },
};

// Варіація 3
export const ManyMoves = {
  args: {
    moves: 48,
    onRestart: () => console.log("Restart clicked"),
    onNewGame: () => console.log("New Game clicked"),
  },
};
