import css from "./Options.module.css";

export default function Options({ updateFeedback, onReset, totalFeedback }) {
  return (
    <div className={css.optionsBtn}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={onReset}>Reset</button> }
    </div>
  );
}
