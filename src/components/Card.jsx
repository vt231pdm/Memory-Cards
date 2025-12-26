export const Card = ({ content, isFlipped, onClick }) => {
  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={onClick}>
      <div className="card-face card-front">?</div>
      <div className="card-face card-back">{content}</div>
    </div>
  );
};
