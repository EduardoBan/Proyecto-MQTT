//------------------------ Registro los datos del JSON----------------------
async function RegistroDato(dataEnviar = {}) {
    const response = await fetch("http://localhost:5000/registros/", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      body: dataEnviar, // body data type must match "Content-Type" header
    });
    const data = await response.json();
    return data;
  }
  // -----------------------------------------------------------------
  export async function postRegistroDatoJson(valores) {
    try {
      const data = await RegistroDato(valores);
      return data;
    } catch (error) {
      console.log(
        "Error al convertir Datos en formato JSON: " + error
      );
    }
  }
  