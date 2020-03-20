import React, { Component } from "react";
import "./App.css";
import Smurfs from '../components/Smurfs';
import FormikForm from './Form';


class App extends Component {
  render() {
    return (
      <div className="App">
        <FormikForm />
        <Smurfs/>
      </div>
    );
  }
}

export default App;
