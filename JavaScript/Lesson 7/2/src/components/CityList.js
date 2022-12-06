import City from "./City";

export default function CityList(props) {
  return (
    <div className="CityList">
      {props.City.map((city, i) => (
        <City key={i} name={city.name} text={city.text} img={city.img}></City>
      ))}
    </div>
  );
}
