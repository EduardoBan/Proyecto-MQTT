// libreria DateTime: https://reactdatepicker.com/?ref=retool-blog.ghost.io

import { useState, useEffect } from "react";



import { registerLocale } from "react-datepicker";
import { es } from "date-fns/locale/es";
registerLocale("es", es);
// import axios from "axios";
// ------------------------------ Funcion Principal --------------------------------------
// tiene la props puertoESPuntoId
function SelPuertoESPuntoMedId({ puertoESPuntoId}) {
  const [puntoMed, setPuntoMed] = useState([]);
  const [ptoESPuntoId, setptoESPuntoId] = useState([]);
  const [enable, setEnable] = useState(true);
  // const [startDate, setStartDate] = useState(new Date());
  // // eslint-disable-next-line
  // const [endDate, setEndDate] = useState(new Date());
  //-------------------------- Obtengo el Punto de Medicion ------------------------------
  useEffect(() => {

    const getPuntoMed = async () => {
      const reqdata = await fetch("http://64.181.164.73:5000/puntodemedicion", {
        method: "GET",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      });

      console.log("Punto de Medicion: ");
      console.log(reqdata);
      const resdata = await reqdata.json();
      setPuntoMed(resdata);
    };
    getPuntoMed();
  }, []);
  
  //-------------------- Obtengo el Puerto de Es por el ID del Punto -----------------------
  const handlePuertoESPuntoId = async (e) => {
    const PuntoId = e.target.value;
    if (PuntoId !== "") {
      const reqstatedata = await fetch(
        "http://64.181.164.73:5000/puertoEsPtoId/" + PuntoId,
        {
          method: "GET",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
        }
      );
      const resstatedata = await reqstatedata.json();
      console.log("data PtoES Punto");
      console.log(resstatedata);

      setptoESPuntoId(await resstatedata);
      setEnable(false);

      //------------------------------------
    } else {
      setptoESPuntoId([]);
      setEnable(true);
    }
  };
  //------------------------------Selecciono EntSalida -------------------------------------H
  const HandlePuertoES = async (e) => {
    const valrRes = e;
    let datosSelc = valrRes.target.value; // paso el valor por la props datosSelc ?
    console.log("Puerto E/S selec: ");
    console.log(datosSelc);
    puertoESPuntoId(datosSelc); // Funcion que me devuelve el Puerto de ES seleccionado de acuerdo a Punto ID por medio de la props puertoESPuntoId
  };

  //-------------------------- BTn cargar --------------------------------


  // const cargarBtn = () => {
  //   // alert("Hello!")
  // };


  //------------------------------Selecciono FechaIni -------------------------------------
  // const HandleStartDate = async (e) => {
  //   const valrRes = e;
  //   let datosSelc = String(valrRes); // paso el valor por la props datosSelc ?
  //   console.log("Fecha Inicial selec: ");
  //   console.log(datosSelc);
  //   setStartDate(datosSelc);
  //   StartDate(datosSelc);
  // };
  //------------------------------Selecciono FechaFin -------------------------------------
  // const HandleEndDate = async (e) => {
  //   const valrRes = e;
  //   console.log("Fecha Final selec: ");
  //   console.log(valrRes);
  // };

  //----------------------------------------------------------------------------------------
  // const controlStyles = {
  //   // border: "2px solid black",
  //   padding: "5px",
  //   // background: " rgba(100, 193, 205, 1)",
  //   color: "black",
  // };

  return (
    <div className="row">
      <div className="col-sm-12">
        <form>
          <div>
            <div className="form-group col-md-4">
              <label className="mb-2">Punto de Medicion </label>
              {/* ------------------------  Punto de MEdicion----------------------------------- */}
              <select
                name="puertoES"
                className="form-control p-2"
                onChange={(e) => handlePuertoESPuntoId(e)}
              >
                <option> Seleccione...</option>
                {puntoMed.map((getPuntoMed, index) => (
                  <option key={index} value={getPuntoMed.Id}>
                    {getPuntoMed.Id + "-" + getPuntoMed.Nombre}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-md-4">
              <label className="mb-2">Entrada Salida</label>
              {/* ------------------------  Entrada Salida----------------------------------- */}
              <select
                name="EntradaSalida"
                className="form-control p-2"
                disabled={enable}
                onChange={(e) => HandlePuertoES(e)}
              >
                {ptoESPuntoId.map((getstate, index) => (
                  <option key={index} value={getstate.Id}>
                    {getstate.Id + "-" + getstate.Nombre}
                  </option>
                ))}
              </select>
            </div>
            {/* -------------------------------- Fecha Inicial ------------------------------ */}
{}
            {/* <button onClick={cargarBtn}>Cargar</button> */}
            {/* ------------------------------------- Detalle ------------------------------------ */}
          </div>
        </form>
      </div>
    </div>
  );
}
export default SelPuertoESPuntoMedId;

