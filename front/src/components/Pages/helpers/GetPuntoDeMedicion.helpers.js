// "http://localhost:5000/puntodemedicion/1",

import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get("http://64.181.164.73:5000/puntodemedicion").then((res) => {
    //  axios.get("http://64.181.164.73:5000/puntodemedicion").then((res) => {  
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
          <li key={person.Id}>{person.Nombre}</li>
        ))}
      </ul>
    );
  }
}
