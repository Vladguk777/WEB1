export default function Quote(props) {
  return (
    <div className="Quote">
      <h2>Quote of the day:</h2>
      <p>{props.text}</p>
      <p>{props.autor}</p>
      <p>{props.data}</p>
    </div>
  );
}
