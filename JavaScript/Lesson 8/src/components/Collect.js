export default function Collect(props) {
  return (
    <div className="Collect">
  <p>{props.name}</p>
    <p>{props.description}</p>
    <img
          src={props.img}
          width="200px"
          height="140px"
          alt={props.name}
        ></img>
    <p>{props.genre}</p>
    <p>{props.autor}</p>
    <p>{props.ric}</p>
    <div className="Line"></div>
  </div>

  );
}
