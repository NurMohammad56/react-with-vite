import React from "react";

const Card = (props) => {
  const { data } = props;

  return (
    <div className="card">
      <p>Id: {data.Id}</p>
      <p>Text: {data.Text}</p>
    </div>
  );
};

export default Card;
