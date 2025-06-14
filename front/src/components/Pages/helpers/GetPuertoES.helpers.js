import { useEffect, useState } from "react";
import axios from "axios";
// const url='http://localhost:5000/registros/PuertoES/1';  
// localhost:5000/registros/PuertoES/2?fecha=1695200000,1695224746
//64.181.164.73
export default function GetPuertoEs(PuertoEs=1) {
  const [data, setData] = useState([]);

  useEffect(() => {

    axios
      .get(`http://64.181.164.73:5000/puertoes/${PuertoEs}`)
    //  .get(`http://64.181.164.73:5000/registros/PuertoES/${mensajeFrontSidebar}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [PuertoEs]);
  console.log(JSON.stringify(data));
  return(data);
}
