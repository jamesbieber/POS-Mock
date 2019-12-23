import React from "react";
import CustomerPane from "./components/Customer/CustomerPane";
import "./App.css";
import styled from "styled-components";
import data from "./dummy-data";
import POSButtons from "./components/POS/POSButtons";
import POSItems from "./components/POS/POSItems";

const Panel = styled.div`
  height: 100vh;
  display: flex;
`;

class App extends React.Component {
  state = {};

  componentDidMount() {
    this.setState({ customer: data[0] });
  }

  render() {
    return (
      <Panel>
        <CustomerPane />
        <POSButtons />
        <POSItems />
      </Panel>
    );
  }
}

export default App;
