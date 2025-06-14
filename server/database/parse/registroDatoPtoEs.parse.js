async function registroDatoPto_Es(puertoEsId) {
  const response = await fetch(
    "http://localhost:5000/registro/:id" + puertoEsId
  );
  const data = await response.json();
  return data;
}
//------------------------------- ---------------------------------------
export default async function datoJason(namePto) {
  try {
    const data = await registroDatoPto_Es(namePto);
    return data;
  } catch (error) {
    console.log("Error al convertir Datos en formato JSON: " + error);
  }
}
//------------------------ Registro los datos del JSON----------------------
async function RegistroDatoPtoEs(url = "", dataEnviar = {}) {
  console.log("Registro los datos del JSON a:" + url);
  console.log(dataEnviar);
  //TODO  hago un POST a http://localhost:5000/registros, en el body envio el dataEnviar
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(dataEnviar), // body data type must match "Content-Type" header
  });
  const data = await response.json();

  return data;
}
// -----------------------------------------------------------------
export async function postRegistroDatoPtoEs(url, valores) {
  try {
    const data = await RegistroDatoPtoEs(url, valores);
    return data;
  } catch (error) {
    console.log("Error al convertir Datos en formato JSON: " + error);
  }
}
