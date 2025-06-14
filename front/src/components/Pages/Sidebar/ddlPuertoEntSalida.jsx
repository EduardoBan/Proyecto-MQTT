import React, { Component } from "react";
import AsyncSelect from "react-select/async";
import axios from "axios";

class DdlPuertoEntSalida extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedOption: "Indice:" + null,
    };
  }
  //64.181.164.73
  fetchPuntodeMedicion = (inputValue, callback) => {
    let valores = this.state.selectedOption.value || 1;
    setTimeout(() => {
      axios
        .get(`http://64.181.164.73:5000/puertoEsPtoId/${valores}`)
        .then((resp) => {
          const persons = resp.data;
          return persons;
        })
        .then((data) => {
          const tempArray = [];
          if (data) {
            if (data.length) {
              data.forEach((element) => {
                tempArray.push({
                  label: element.Nombre,
                  value: element.Id,
                });
              });
            } else {
              tempArray.push({
                label: data.Nombre,
                value: data.Id,
              });
            }
          }
          callback(tempArray);
        })
        .catch((error) => {
          console.log(error, " al tomar datos de la Tabla");
        });
    }, 5000);
  };

  onSearchChange = (selectedOption) => {
    if (selectedOption) {
      this.setState({
        selectedOption,
      });
    }
  };

  render() {
    return (
      <div style={{ marginLeft: "1px", width: "195px", color: "black" }}>
        <div>
          {this.state.selectedOption &&
            `Indice :${this.state.selectedOption.value}`}
          <AsyncSelect
            value={this.state.selectedOption}
            loadOptions={this.fetchPuntodeMedicion}
            placeholder="Seleccione..."
            onChange={(e) => {
              this.onSearchChange(e);
            }}
            defaultOptions={true}
          />
        </div>
      </div>
    );
  }
}
export default DdlPuertoEntSalida;
