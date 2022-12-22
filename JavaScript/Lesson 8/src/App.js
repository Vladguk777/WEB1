import { Routes, Route, BrowserRouter } from "react-router-dom";

import Biography from "./components/Biography";
import CollectList from "./components/CollectList"
import Paint from "./components/Paint";
import Header from "./components/Header";
import "./styles.css";
const Collect = [
{
name: "Соняшники",
description: "Картина «Соняшники» є візитівкою творчості Вінсента Ван Гога – видатного голландського живописця епохи постімпресіонізму. Художник обожнював цю квітку, вважав його символом вдячності і подяки. Сам жовтий колір асоціювався у нього з дружбою і надією.",
genre: "Натюрморт",
autor: "Ван Гог",
ric: "1888",
img: "https://lihtaryk.com.ua/wp-content/uploads/2020/09/podsolnyhi-819x1024.jpg"
},
{
  name: "Зоряна ніч над Роною",
  description: "Дане полотно була написана Вінсентом Ван Гогом в 1889 році, він писав цю картину цілий рік. Робота виконана великими і об’ємними мазками, це улюблена техніка художника. “Зоряна ніч над Роной” виконана в темних, в основному синіх кольорах, які переходять в сотні різних відтінків і поєднуючись з жовто-золотим кольором зірок і вогнів міста.",
  genre: "Пейзаж",
  autor: "Ван Гог",
  ric: "1888",
  img: "https://zimamagazine.com/wp-content/uploads/2019/05/zvezdnaya-noch-nad-ronoi-600x400.jpg"
  }
];
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <Biography /> } />
          <Route path="paint" element={ <Paint /> } />
          <Route path="Collect" element={ <CollectList Collect={Collect} /> } />
          <Route path="*" element={ <h1>Page Not Found!</h1> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
