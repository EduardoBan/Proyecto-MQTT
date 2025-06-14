//import { Console } from "console";

// -------------------  Recupero de la tabla el punto de medicion correspondiente a la ID -------------------
async function getPtoMedicion(IdPtoMedicion) {
  try {
    // 1) await the fetch() request to get the response
    const response = await fetch(
      "http://localhost:5000/puntodemedicion/" + IdPtoMedicion,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    // 2) await the .json() call to get the data
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}

export default function datoJason(palabra) {
  try {
    const obj = JSON.parse(palabra);

    //  ------------- obtengo los puntos de medición ---------------
    let PtoMedicion = Object.values(obj.pMed);
    getPtoMedicion(PtoMedicion[0].id).then((data) => {
      if (data) {
        console.log("Pto de medicion existente: ");
        console.log(data);
      } else {
        console.log("Error Pto de medicion no existente");
      }
    });

    let DataLog = Object.values(PtoMedicion);
    return (
      "Nomb. Central: " +
      obj.nom +
      " pasw: " +
      obj.pasC +
      " PMedicion:" +
      PtoMedicion[0].id +
      " Pasw:" +
      PtoMedicion[0].pas +
      " Dalo 0 Fecha: " +
      DataLog[0].f
    );
  } catch (error) {
    console.log("Error al convertir Datos en formato JSON: " + error);
  }
  return;
}
