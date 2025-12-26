import { Button } from "../components/Button";

export const ResultsPage = ({ onRestart, finalMoves }) => (
  <div className="page fade-in">
    <h2>Чудова робота!</h2>
    <p>Ваш результат: {finalMoves} ходів</p>
    <Button onClick={onRestart}>Грати знову</Button>
  </div>
);
