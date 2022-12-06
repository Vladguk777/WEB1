import Quote from "./Quote";
export default function QuoteList(props) {
  return (
    <>
      {props.Quotes.map((item, ind) => (
        <Quote key={ind} text={item.text} autor={item.autor} data={item.data} />
      ))}
    </>
  );
}
