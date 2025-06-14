import { useEffect, useState } from "react";
import axios from "axios";
// const url='http://localhost:5000/registros/PuertoES/1';  
// localhost:5000/registros/PuertoES/2?fecha=1695200000,1695224746
//64.181.164.73
export default function GetRegistros(PuertoES=1,fechaIni,fechaFin) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://64.181.164.73:5000/registros/PuertoES/${PuertoES}?fecha=${fechaIni},${fechaFin}`)
      // .get("http://64.181.164.73:5000/registros")

      //   .get("http://:5000/registros")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [PuertoES, fechaFin, fechaIni]);
  console.log(JSON.stringify(data));
  return(data);
}



