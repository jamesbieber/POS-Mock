import React from "react";
import styled from "styled-components";
import { foodData } from "../../dummy-data";
import Item from "./Item";

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 63%;
  background-color: #fffaf2;
`;

const POSItems = props => {
  return (
    <Items>
      {foodData.map(foodItem => {
        return <Item fooditem={foodItem} />;
      })}
    </Items>
  );
};

export default POSItems;
