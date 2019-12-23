import React from "react";
import styled from "styled-components";

const POSItem = styled.div`
  width: 20%;
  height: 75px;
  border: 1px solid black;
  background-color: grey;
  text-align: center;
  margin-right: 3%;
  padding-top: 3%;

  :hover {
    opacity: 0.9;
    cursor: pointer;
    color: white;
  }
`;

const Item = props => {
  return (
    <POSItem>
      <h3>{props.fooditem.name}</h3>
      <p>{props.fooditem.cost}</p>
    </POSItem>
  );
};

export default Item;
