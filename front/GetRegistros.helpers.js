import { useEffect, useState } from "react";
import axios from "axios";
import {config} from"64.181.164.73";
config();
// const url='http://localhost:5000/registros/PuertoES/1';  
// localhost:5000/registros/PuertoES/2?fecha=1695200000,1695224746
//146.235.26.71
export default  function GetRegistros(PuertoES = 1, fechaIni, fechaFin) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://${64.181.164.73}:5000/registros/PuertoES/${PuertoES}?fecha=${fechaIni},${fechaFin}`)
      // .get("http://146.235.26.71:5000/registros")

      //   .get("http://:5000/registros")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [PuertoES, fechaFin, fechaIni]);
  // console.log(JSON.stringify(data));
  return (data);
}


// export async function GetUltimoRegistro(PuertoES=1) {
//   const [data1, setData1] = useState([]);
//   useEffect(() => {
//     axios   // .get(`http://146.235.26.71:5000/ultimoregistro/5`)
//      .get(`http://146.235.26.71:5000/ultimoregistro/${PuertoES}`)


//       //   .get("http://:5000/registros")
//       .then((res) => setData1(res.data))
//       .catch((err) => console.log(err));
//   }, [PuertoES]);
//   //  console.log(" HelperGetUltimoRegistro");
//   //  console.log(JSON.stringify(data1));
//    console.log("------Valor--Helper---------");
//    console.log((data1));

//    //{"Id":158816,"Valor":"20.90","FechaHoraCreacion":1728054135,"FechaHoraRegistro":1728054134,"PuertoES_Id":16}

//   //return(data1['Valor']+',' +data1['FechaHoraCreacion']+','+data1['FechaHoraRegistro']);
//   return(data1);
// }



// export async function GetUltimoRegistro(PuertoES = 1) {
//   const response = await fetch(`http://146.235.26.71:5000/ultimoregistro/${PuertoES}`);
//   //const movies = await response.json();
//   //const movies = await response.text();
//   const movies = await response;
//   console.log("------Valor--Helper---------");
//   console.log(movies);
//   //console.log(JSON.stringify(movies));
//   return movies;
//   // return (movies.Valor +',' + movies.FechaHoraCreacion+','+movies.FechaHoraRegistro);
// };

// export  function GetUltimoRegistro(PuertoEs=1) {
//   const [data1, setData1] = useState([]);

//   useEffect(() => {

//     axios
//       .get(`http://146.235.26.71:5000/ultimoregistro/${PuertoEs}`)
//     //  .get(`http://146.235.26.71:5000/registros/PuertoES/${mensajeFrontSidebar}`)
//       .then((res) => setData1(res.data))
//       .catch((err) => console.log(err));
//   }, [PuertoEs]);
//   console.log(JSON.stringify(data1));
//   return(data1);
// }

// async function fetchData(PuertoES) {
//   const response = await fetch(`http://146.235.26.71:5000/ultimoregistro/${PuertoES}`);
//   const dataos = await response.json();
//   return dataos;
// }

// export async  function GetUltimoRegistro(PuertoES = 1) {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     async function getData() {
//       const fetchedData = await fetchData(PuertoES);
//       setData(fetchedData);
//     }
//     getData();
//   }, [PuertoES]);
//   return (data
//     // <div>
//     //   {data.map((item) => (
//     //     <div key={item.id}>{item.name}</div>
//     //   ))}
//     // </div>
//   );
// }
