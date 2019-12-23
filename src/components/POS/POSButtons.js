import React from "react";
import styled from "styled-components";
import { buttonData } from "../../dummy-data";

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  width: 7%;
`;

const Category = styled.button`
  width: 100%;
  height: 100px;
  border: none;

  :hover {
    opacity: 0.9;
    cursor: pointer;
    color: white;
    font-size: 1rem;
  }
`;

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "dodgerblue",
  "olivedrab",
  "blue",
  "orange",
  "purple"
];

const POSButtons = props => {
  return (
    <Buttons>
      {buttonData.map((button, i) => {
        return (
          <Category style={{ backgroundColor: colors[i] }}>
            {button.button}
          </Category>
        );
      })}
    </Buttons>
  );
};

export default POSButtons;
