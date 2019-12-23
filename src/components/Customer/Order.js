import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid grey;
  padding-bottom: 60%;
  width: 100%;

  div {
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    margin: 5%;
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  margin: 5%;
`;

const Buttons = styled.div`
  display: flex;
  align-items: space-between;
  font-family: "Poppins", sans-serif;
  width: 100%;

  button {
    color: white;
    font-size: 1.2rem;
    height: 50px;
    width: 100%;
    background-color: teal;
    border: 1px solid grey;
  }

  button:hover {
    opacity: 0.9;
    cursor: pointer;
  }

  .print {
    background-color: grey;
    color: white;
  }
`;

const Order = props => {
  return (
    <Container>
      <Items>
        {props.person.order.map(item => {
          return (
            <div>
              <h3>{item.item}</h3>
              <p>${item.cost}</p>
            </div>
          );
        })}
      </Items>
      <Total>
        <h3>Total: </h3>
        <p>${props.person.total}</p>
      </Total>
      <Buttons>
        <button>PAY</button>
        <button className="print">PRINT</button>
        <button>DONE</button>
      </Buttons>
    </Container>
  );
};

export default Order;
