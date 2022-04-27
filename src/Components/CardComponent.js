import React from "react";

function CardComponent(props) {
  console.log(props);
  return (
    <>
      <div className="display">
        <img src={props.data.img} width="300px" alt="" />
        <h1 className="text90">{props.data.name}</h1>
      </div>
    </>
  );
}

export default CardComponent;
