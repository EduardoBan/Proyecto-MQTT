import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import GetPuertoEs from "./GetPuertoES.helpers";

import { DownloadTableExcel } from "react-export-table-to-excel";
//https://www.npmjs.com/package/react-export-table-to-excel
const { DateTime } = require("luxon");
let words = "";
function FetchData() {
  const [data, setData] = useState([]);
  const [mensajeFrontSidebar, setmensajeFrontSidebar] = useState("1");

  //----------------------------- Acceso a la base de datos -------------------------------------
  useEffect(() => {

    var cadenaenviar = mensajeFrontSidebar.toString();
    words = cadenaenviar.split(',');
    const palabra = words[0] + '?fecha=' + words[1] + ',' + words[2]

    axios
      // .get(`http://localhost:5000/registros/PuertoES/${mensajeFrontSidebar}`)
      .get(
        //`http://64.181.164.73:5000/registros/PuertoES/${mensajeFrontSidebar}`
        `http://64.181.164.73:5000/registros/PuertoES/${palabra}`
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));

  
  }, [mensajeFrontSidebar]); //<----- actualiza cada vez que selecionamos algo en el dropdown, que nos llega por la props mensajeFrontSidebar


  //----------------------- Props para recibir desde el elemento Sidebar---------------------------
  const AddMensaje = (mensajeIng) => {
    setmensajeFrontSidebar(mensajeIng); // me llega la props mensajeIng y la envio
  };
  const dataPuertoES = GetPuertoEs(mensajeFrontSidebar);
  //-----------------------------------------------------------------------------------------------


  const tableRef = useRef(null);


  


  return (
    <div className="container">
      <div className="App" id="outer-container">
        <div className="mt-3">
          <Sidebar
            addMensaje={AddMensaje}
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          />
          {/* <div id="page-wrap"> */}
          {/* <h3>Datos guardados en la tabla Registros</h3> */}
          {/* <h4>{mensajeFrontSidebar}</h4>  -----------  Props con datoa recividos desde Sidebar------------ */}
          {/* </div> */}
          <div>
            <h4>
              Puerto seleccionado: {dataPuertoES.Nombre}
            </h4>
            {/* -----------  Props con datoa recividos desde Sidebar------------ */}
          </div>

          <DownloadTableExcel
            filename={`Datos del Puerto ${words[0]} ${dataPuertoES.Nombre} ${DateTime.now().toFormat(
              "dd-MM-yyyy HH:mm:ss"
            )}`}
            sheet="users"
            currentTableRef={tableRef.current}
          >
            <button
              style={{
                padding: "5px",
                position: "absolute",
                top: "100px",
                right: "4px",
              }}
            >
              {" "}
              Grabar XLS{" "}
            </button>
          </DownloadTableExcel>

          {/* ---------------------------------- Creo la Tabla con los datos regresados ------------------------- */}
          <table className="table" ref={tableRef} id="tablaReg">
            <thead>
              <tr>
                <th>ID</th>
                <th>Fecha Creacion</th>
                <th>Fecha Registro</th>
                <th>Valor</th>
                {/* <th>Puerto ES</th> */}
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.Id} </td>
                    <td>
                      {DateTime.fromSeconds(
                        Number(user.FechaHoraCreacion)
                      ).toFormat("dd-MM-yyyy HH:mm:ss")}{" "}
                    </td>
                    <td>
                      {DateTime.fromSeconds(
                        Number(user.FechaHoraRegistro)
                      ).toFormat("dd-MM-yyyy HH:mm:ss")}{" "}
                    </td>
                    <td>{user.Valor} </td>
                    {/* <td>{user.PuertoES_Id} </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  
}

export default FetchData;
