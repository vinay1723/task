function Answer({ card }) {
  return (
    <div className="answer" id="answer1">
      <h2>
        <span>{card.title}</span>
      </h2>
      <p>{card.description}</p>
    </div>
  );
}

export default Answer;
