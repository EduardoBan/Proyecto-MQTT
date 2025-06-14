import puntoMedicionName from "../database/parse/ptoMedicionName.parse.js";
// import puertoEsPtoId from "../database/parse/puertoEsPtoId.parse.js";
import { postRegistroDatoPtoEs } from "../database/parse/registroDatoPtoEs.parse.js";

export default async function recibirDatos(datos) {
  try {
    //------------------------- obtengo el Id del pto de medicion con el nombre-------------------------
    const dataPtoMedicion = await puntoMedicionName(datos.TemaNombre);
    if (!!dataPtoMedicion && Object.keys(dataPtoMedicion).length) {   // controlo que existe el punto de medicion
      console.log("Existe el Punto de medicion ");
      const datosjson = datos;
      console.log(" Datos recibidos en recibirDatos:");
      console.log(datosjson);
      //TODO Hasta aca llega el dato recibido bien, listo para grabar si uso aedes llega formateado string
      //TODO , si uso postman derecho a guardar el registro no

      const respuesta = await postRegistroDatoPtoEs(
        "http://localhost:5000/registros",
        datosjson
      );
      console.log("Respuesta: ");
      console.log(respuesta);
    } else {
      console.log("No existe el Punto de medicion ");
    }
  } catch (error) {
    console.log("Error RecibirDatos: " + error);
  }
  return;
}
