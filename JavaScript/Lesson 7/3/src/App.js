import CardsList from "./components/CardsList";
import "./styles.css";

const cards = [
  {
    value: "🂦"
  },
  {
    value: "🂶"
  },
  {
    value: "🃆"
  },
  {
    value: "🃖"
  },
  {
    value: "🂧"
  },
  {
    value: "🂷"
  },
  {
    value: "🃇"
  },
  {
    value: "🃗"
  },
  {
    value: "🂨"
  },
  {
    value: "🂸"
  },
  {
    value: "🃈"
  },
  {
    value: "🃘"
  },
  {
    value: "🂩"
  },
  {
    value: "🂹"
  },
  {
    value: "🃉"
  },
  {
    value: "🃙"
  },
  {
    value: "🂪"
  },
  {
    value: "🂺"
  },
  {
    value: "🃊"
  },
  {
    value: "🃚"
  },
  {
    value: "🂫"
  },
  {
    value: "🂻"
  },
  {
    value: "🃋"
  },
  {
    value: "🃛"
  },
  {
    value: "🂭"
  },
  {
    value: "🂽"
  },
  {
    value: "🃍"
  },
  {
    value: "🃝"
  },
  {
    value: "🂮"
  },
  {
    value: "🂾"
  },
  {
    value: "🃎"
  },
  {
    value: "🃞"
  },
  {
    value: "🂡"
  },
  {
    value: "🂱"
  },
  {
    value: "🃁"
  },
  {
    value: "🃑"
  }
];

export default function App() {
  return (
    <div className="App">
      <CardsList cards={cards} />
    </div>
  );
}
