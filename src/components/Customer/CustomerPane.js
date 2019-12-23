import React from "react";
import styled from "styled-components";
import Customer from "./Customer";
import Order from "./Order";
import { dummyData } from "../../dummy-data";

const Pane = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  width: 30%;
`;

class CustomerPane extends React.Component {
  state = {
    customer: dummyData[0]
  };

  render() {
    return (
      <Pane>
        <div>
          <Customer person={this.state.customer} />
          <Order person={this.state.customer} />
        </div>
      </Pane>
    );
  }
}

export default CustomerPane;
