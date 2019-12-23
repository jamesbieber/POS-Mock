import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h2 {
    margin-top: 5%;
    margin-bottom: 5%;
    font-size: 1.5rem;
  }
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-bottom: 2%;
  width: 100%;

  div {
    font-size: 1.3rem;
    padding: 1% 1% 1% 1%;
    width: 30%;
    border: 1px solid grey;
  }
`;

const Notes = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #bbb8b2;

  h2 {
    margin-bottom: 1%;
  }

  div {
    margin-bottom: 3%;
    padding-left: 1%;
  }
`;

const Customer = props => {
  return (
    <Container>
      <h2>{props.person.name}</h2>
      <Stats>
        <div>
          <h3>${props.person.avgspend}</h3>
          <p>Avg Spend</p>
        </div>
        <div>
          <h3>{props.person.visits}</h3>
          <p>Visits</p>
        </div>
        <div>
          <h3>{props.person.lastvisit}</h3>
          <p>Last Visit</p>
        </div>
      </Stats>
      <Notes>
        <div>
          <h2>Customer Notes</h2>
          {props.person.notes.map(note => {
            return <li>{note.comment}</li>;
          })}
        </div>
        <div>
          <h2>Favorite Items</h2>
          {props.person.favorites.map(item => {
            return <li>{item.favorite}</li>;
          })}
        </div>
      </Notes>
    </Container>
  );
};

export default Customer;
