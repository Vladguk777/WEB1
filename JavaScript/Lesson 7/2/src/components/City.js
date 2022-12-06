export default function City(props) {
  return (
    <div className="City">
      <div className="City1">
        <p>{props.name}</p>
        <p>{props.text}</p>
        <img
          src={props.img}
          width="200px"
          height="140px"
          alt={props.name}
        ></img>
      </div>
    </div>
  );
}
