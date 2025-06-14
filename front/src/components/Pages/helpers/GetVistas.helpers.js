import { useEffect, useState } from "react";
import axios from "axios";

export default function GetVistas() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await axios.get(`http://64.181.164.73:5000/vistas`);
      setData(response.data);
    }
    getData();
  }, []);
  return(data);
}
