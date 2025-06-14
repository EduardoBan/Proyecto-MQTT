import { useEffect, useState } from "react";
import axios from "axios";


export function GetUltimosRegistros(PuertoEs=1) {
  const [data1, setData1] = useState([]);
  useEffect(() => {
    axios
      .get(`http://64.181.164.73:5000/ultimosregistros/${PuertoEs}`)
      .then((res) =>  setData1(res.data))
      .catch((err) => console.log(err));
  }, [PuertoEs]);
 
  console.log("------Valor-Ultimos REgistros-Helper---------");
  console.log(data1);

  return(data1);
}


export default function GetUltimoRegistro(PuertoEs=1) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await axios.get(`http://64.181.164.73:5000/ultimoregistro/${PuertoEs}`);
      setData(response.data);
    }
    getData();
  }, [PuertoEs]);

  console.log("------Valor-Ultimo registro-Helper---------");
  console.log(data);
  
  return(data);
}

