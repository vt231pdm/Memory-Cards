import { Card } from "./Card";
import "../styles/App.module.css";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    onClick: { action: "clicked" },
    content: { control: "text" },
  },
};

// Варіація 1
export const Closed = {
  args: {
    content: "🍎",
    isFlipped: false,
  },
};

// Варіація 2
export const Flipped = {
  args: {
    content: "🍎",
    isFlipped: true,
  },
};

// Варіація 3
export const CustomEmoji = {
  args: {
    content: "🍕",
    isFlipped: true,
  },
};
