import QuoteList from "./components/QuoteList";
import "./styles.css";
const Quotes = [
  {
    text: "Cool day!",
    autor: "San Sebastian",
    data: "30.11.2022"
  },
  {
    text: "Cool night!",
    autor: "Olga Smith",
    data: "29.11.2022"
  }
];
export default function App() {
  return (
    <div className="App">
      <QuoteList Quotes={Quotes} />
    </div>
  );
}
