import Collect from "./Collect";

export default function CollecttList(props) {
  return (
    <>
        <h1>Collection of paintings:</h1>
      {props.Collect.map((item, ind) => (
        <Collect
          key={ind}
          name={item.name}
          description={item.description}
          genre={item.genre}
          autor={item.autor}
          ric={item.ric}
          img={item.img}

        />
      ))}
    </>
  );
}