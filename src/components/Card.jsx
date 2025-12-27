export const Card = ({ content, isFlipped, onClick }) => {
  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={onClick}>
      <div className="card-face">{isFlipped ? content : "?"}</div>
    </div>
  );
};
