async function getPtoMedicionName(PtoMedicionName) {
  const response = await fetch(
    "http://localhost:5000/puntodemedicion/nombre/" + PtoMedicionName
  );
  const data = await response.json();
  // console.log(" Punto de Medicion datos:" + JSON.stringify(data[0]));
  return data;
}
//------------------------------- --------------------------------------
export default async function datoJason(namePto) {
  try {
    const data = await getPtoMedicionName(namePto);
    return data;
  } catch (error) {
    console.log("Error en el nombre del pto de Medicion:" + namePto);
    console.log("Error al convertir Datos en formato JSON: " + error);
  }
}
