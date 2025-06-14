/* eslint-disable react-hooks/rules-of-hooks */
//import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";
import { useState } from "react";
import SelPuertoESPuntoMedId from "./SelPuertoESPuntoMedId.jsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//const { DateTime } = require("luxon");


//                                    /----- envio la props con el mensaje de datos a RegistroFetchData
export default function sidebar({ addMensaje }) {
  // ----------------------Mensaje por Props a REgistros.fetchData -------------------------

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [puertoSelec, setpuertoSelec] = useState(1);
  // const [message] = useState("");
  // eslint-disable-next-line
  // const [updated, setUpdated] = useState(message);
  const [isOpen, setIsOpen] = useState(false);
  const handleStateChange = (state) => setIsOpen(state.isOpen);

  //--------
  // - props que me llega desde  el sidebar con el ID del puerto seleccionado---------------- DateTime.now().minus({days:66}).toUnixInteger(),
  const puertoESPuntoId = (puertoSeleccionado) => {
    setpuertoSelec(puertoSeleccionado);
    //  const fechaIni = DateTime.fromObject(startDate).toUnixInteger();
    //  const fechaFin = DateTime.fromObject(endDate).toUnixInteger();
    //  addMensaje(puertoSeleccionado+','+fechaIni+','+fechaFin);
    // addMensaje(  '5,1731342533,1737044933');

  };



  // const HandleEndDate = async (e) => {
  //  setEndDate(e);
  //  const fechaIni =parseInt(startDate.valueOf()/1000); 
  //  const fechaFin =parseInt(endDate.valueOf()/1000);
  //   addMensaje(puertoSelec+','+fechaIni+','+fechaFin);

  // };

  //--------- props que me llega desde  el sidebar con la fecha inicial----------------
  // const StartDate = (fechainicial) => {
  //   addMensaje(fechainicial);
  //   // setUpdated(message);
  //   console.log(fechainicial);
  // };

  //-------------------------------------------------------------------------------------------------------

  const controlStyles = {
    border:" 1mm ridge rgba(100, 193, 205, 0.2)",
    //border: "2px solid rgba(100, 193, 205, 1)",
    padding: "10px",
    // background: " rgba(100, 193, 205, 1)",
    color: "black",
  };

  function handleClick() {
    // alert('You clicked me!');
    const fechaIni =parseInt(startDate.valueOf()/1000); 
    const fechaFin =parseInt(endDate.valueOf()/1000);
     addMensaje(puertoSelec+','+fechaIni+','+fechaFin);

  }


  return (
    <>
      <Menu isOpen={isOpen} onStateChange={handleStateChange}>
        <div style={controlStyles}>
          <SelPuertoESPuntoMedId
            puertoESPuntoId={puertoESPuntoId}
          />{" "}

          {/*  recibo la props del sidebar con el  Puerto seleccionado */}
        </div>
        {/* -------------------------------- Fecha Inicial ------------------------------ */}
        <div style={controlStyles}>
          Fecha inicial
          <DatePicker
            // fixedHeight
            showIcon
            timeInputLabel="Hora:"
            showTimeInput
            dateFormat="dd/MM/yyyy HH:mm:ss"
            // selected={startDate}
            // onChange={(date) => setStartDate(date)}
            // onSelect={(date) => setEndDate(date)}
            is24Hour
            locale="es"
            closeOnScroll={true}
            shouldCloseOnSelect={true}
            todayButton="Hoy"

            selected={startDate}
            onChange={(date) => setStartDate(date)}

            selectsStart
            startDate={startDate}
            endDate={endDate}
          />

          {/* -------------------------------- Fecha Final ------------------------------ */}
          Fecha final
          <DatePicker
            // fixedHeight
            showIcon
            timeInputLabel="Hora:"
            showTimeInput
            dateFormat="dd/MM/yyyy HH:mm:ss"
            // selected={endDate}
            // //selectsEnd
            // //startDate={startDate}
            // //endDate={endDate}
            // minDate={startDate}
            //onSelect={(date) => setEndDate(date)}
            //onChange={(date) => HandleEndDate(date)}
            is24Hour
            locale="es"
            shouldCloseOnSelect={true}
            todayButton="Hoy"


            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />


        </div>

        <button style={controlStyles} onClick={handleClick}>
            Cargar Valores
          </button>


      </Menu>
    </>
  );
}
