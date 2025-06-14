
//-------------------- Console to Log file ------------------------
const { appendFileSync } = require('fs');
const origConsole = globalThis.console;
const console = {
    log: (...args) => {
        appendFileSync('../logPtoESptoId.txt', args.join('\n') + '\n');
        return origConsole.log.apply(origConsole, args);
    }
}

async function getPuertoEsPtoId(PtoMedicionId) {
  //localhost:5000/puertoes/puntoes/2
  const response = await fetch("http://localhost:5000/puertoes/puntoes/" + PtoMedicionId);
  const data = await response.json();

  return data;
}
//------------------------------- --------------------------------------
export default async function datoJason(namePto) {
  try {
    const  data = await getPuertoEsPtoId(namePto)
    return data
    }
   catch (error) {
    console.log("Error al convertir Datos en formato JSON: " + error);
  }
}

//-----------------------------------------------------------------------

async function getPuertoEsPtoEtiquetaId(PtoMedicionId) {
  //localhost:5000/puertoes/puntoes/2
  const response = await fetch("http://localhost:5000/puertoes/puntoes/");
  const data = await response.json();

  return data;
}
//------------------------------- --------------------------------------
export default async function datoJasonEtiquetaId(namePto) {
  try {
    const  data = await (namePto)
    return data
    }
   catch (error) {
    console.log("Error al convertir Datos Etiqueta ID en formato JSON: " + error);
  }
}