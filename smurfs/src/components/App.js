import React, { Component } from "react";
import "./App.css";
import Smurfs from '../components/Smurfs';
import FormikForm from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Smurfs/>
        <FormikForm />
      </div>
    );
  }
}

export default App;
