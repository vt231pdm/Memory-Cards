import { Button } from "../components/Button";

export const StartPage = ({ onStart }) => (
  <div className="page fade-in">
    <h1>Memory Game</h1>
    <p>Знайди всі пари однакових карток!</p>
    <Button onClick={onStart}>Почати гру</Button>
  </div>
);
