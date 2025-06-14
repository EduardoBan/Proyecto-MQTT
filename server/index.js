import { createRequire } from "module";
import recibirdatos from "./utils/recibirDatos.js";

import empresaRouter from "./router/empresa.router.js";
import registroRouter from "./router/registro.router.js";
import puntodeMedicion from "./router/puntodemedicion.router.js";
import puertoEs from "./router/puertoEs.router.js";
import vistas from "./router/vistas.router.js";

//import parseptomedicion from "./database/parse/parsePtoMedicion.js";

import parseptomedicionname from "./database/parse/ptoMedicionName.parse.js";

const require = createRequire(import.meta.url);

var bodyParser = require("body-parser");
//const hostnamehttp = "localhost"; // Cliente - Servidor, socketIO URL
//const hostnamehttp = "http://146.235.26.71";
//const porthttp = 2000; // Cliente - Servidor, socketIO Port    // Cliente - Servidor, socketIO URL


const portExp = 5000; //Espress Port
const port = 1883; // MQTT port
import sequelize from "./database/baseDatos.js";

//-------------------- Console to Log file ------------------------
const { appendFileSync } = require('fs');
const origConsole = globalThis.console;
const timestamp = new Date().toISOString();
const console = {
    log: (...args) => {
        appendFileSync('./logresults.txt', `${timestamp}`+' : '+ args.join('\n') + '\n');
        return origConsole.log.apply(origConsole, args);
    }
}

//------------------------ Http Server  ---------------------------
const http = require("http");
const server = http.createServer();

// Create our server
// var server;
// server = http.createServer(function (req, res) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Request-Method", "*");
//   res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   res.setHeader("Access-Control-Allow-Headers", req.header.origin);
//   if (req.method === "OPTIONS") {
//     res.writeHead(200);
//     res.end();
//     return;
//   }
// });

//-------------------------   Base de Datos  ------------------
async function iniSequalize() {
  try {
    // ver de utilizar  await sequelize.sync();   // sincroniza la BD y crea las tablas de no existir, ver mas info.
    await sequelize.authenticate();
    console.log("Base de Datos, la conexión se ha establecido exitosamente.");
  } catch (error) {
    console.error("No se puede conectar a la base de datos, error: ", error);
  }
}
iniSequalize();
import "./models/empresa.models.js"; // importo la tabla empresa
import "./models/registro.models.js"; // importo la tabla de registros
import "./models/puertoes.models.js";
import "./models/puntodemedicion.models.js";
import "./models/vistas.models.js";
//--------------------------------- Config Express ---------------------------------------------

const express = require("express");
var cors = require("cors"); // habilito CORS para express

import { STRING } from "sequelize";
import { todo } from "node:test";
const appExp = express();
appExp.use(cors());
appExp.use(bodyParser.json());
appExp.use(empresaRouter, registroRouter, puntodeMedicion, puertoEs, vistas);
appExp.use(express.urlencoded({ extended: false }));

try {
  appExp.listen(portExp);
  console.log(
    "Servidor Express iniciado en el puerto:",portExp);
} catch (error) {
  console.log("Error en Server Express: " + error);
}

//  ----------------------   Servidor MQTT Aedes ------------------------------
const aedes = require("aedes")();
const serverMQTT = require("net").createServer(aedes.handle);

//------------------------   Servidor MQTT -------------------------------------

aedes.id = "ServerMQTT_01"; //Identificacion del servidor MQTT

serverMQTT.listen(port, function () {
  //creo el servidor en el puerto:
  console.log(
    "Servidor MQTT iniciado en el puerto: ", port );
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
aedes.authenticate = async (client, username, password, callback) => {
  // ------verifico si el pto de medicion existe, recibo el nombre y el Id, tengo que almacenar por Id

  var ptoMedicionName = await parseptomedicionname(username);

  console.log(
    "Datos de la BD: " +
      ptoMedicionName[0].Usuario +
      " : " +
      ptoMedicionName[0].Contrasena
  );

  if (
    username &&
    typeof username === "string" &&
    username === ptoMedicionName[0].Usuario
  ) {
    if (
      password &&
      typeof password === "object" &&
      password.toString() === ptoMedicionName[0].Contrasena
    ) {
      callback(null, true);
      console.log( `MQTT cliente conectado correctamente, fecha: ${new Date().toLocaleString()}` );
    }
  } else {
    callback(false, false);
  }
};

//------------------------------------------SOCKET IO --------------------------------------------
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
// ------------------------------------ AEDES Authorized publish---------------------------------
//-----------------------------------------------------------------------------------------------
//  *************  Tengo que hacer que se fije en la tabla si el Topico esta  *******************

// authorising client topic to publish a message
aedes.authorizePublish = (client, packet, callback) => {
  
  if (packet.topic === "Sensor") {
    console.log(" Nombre o Tema incorrecto  Sensor");
   // return callback(new Error("wrong topic"));
   console.log("Cliente: " + client);
  }
  if (packet.topic === "Punto2") {
    //packet.payload = Buffer.from('overwrite packet payload')
    console.log(" Nombre o Tema correcto Punto2");
    console.log("Cliente: " + client);
  }
  callback(null);
};

// ------------------------------------ AEDES Publish -------------------------------------------
aedes.on("publish", function (packet, client) {
  if (client) {
    recibirdatos(JSON.parse(packet.payload)); // recibo los datos y los grabo en la BD
  }
});
// ------------------------- Socket connection ---------------------------------------------------
io.on("connection", (socket) => {
  console.log("Socket-IO se ha conectado un cliente");
  // ------------------------------------ AEDES Publish -------------------------------------------
  aedes.on("publish", function (packet, client) {
    if (client) {
      console.log(
        `MAQTT mensaje publicado por cliente: ${client ? client.id : " Broker: " + aedes.id }  Mensaje: "${packet.payload}" en el topic:  ${ packet.topic} al broker: ${aedes.id}\n`
      );

      socket.broadcast.emit("chat_message", {
        usuario: "mensage",
        mensaje: packet.payload.toString(),
      });
    }
  });

  //------------------------------------------------------------------------------------------------
  // emitted when a client connects to the broker
  aedes.on("client", function (client) {
    console.log(`Cliente conectado ${client ? client.id : client} al broker: ${aedes.id}`
    );
    let msj = "Cliente conectado: ";
    let clien = client.id.toString();
    //let brok= aedes.id.toString();
    msj += clien + " a las : " + new Date().toLocaleString();

    socket.broadcast.emit("chat_message", {
      usuario: "Conectado",
      mensaje: msj,
    });

    // socket.on("disconnect", function () {
    //   console.log("[" + socket.id + "] disconnected");
    //   delete socket[socket.id];
    // });

    // emitted when a client disconnects from the broker
    aedes.on("clientDisconnect", function (client) {
      console.log(
        `CLIENT_DISCONNECTED : MQTT Client ${
          client ? client.id : client
        } disconnected from the aedes broker ${aedes.id}`
      );
    });

    socket.on("disconnect", () => {
      socket.broadcast.emit("user-disconnected", users[socket.id]);
      delete users[socket.id];
    });

    socket.on("disconnecting", function () {
      console.log("Disconnecting the chat: " + socket.id);
    });
    aedes.on("clientError", function (client, err) {
      console.log("client error", client.id, err.message, err.stack);
    });

    aedes.on("connectionError", function (client, err) {
      console.log("client error", client, err.message, err.stack);
      aedes.close();
    });

    //   socket.on("disconnecting", (reason) => {
    //     for (const room of socket.rooms) {
    //       if (room !== socket.id) {
    //         socket.to(room).emit("user has left", socket.id);
    //         console.log("Disconnecting the chat: " + socket.id);
    //       }
    //     }
    //   });
  });
  //-------------------------------AEDES-------------------------------------------------------
  // emitted when a client disconnects from the broker AEDES

  aedes.on("clientDisconnect", function (client) {
    console.log(
      `Cliente desconectado: ${client ? client.id : client} del broker ${ aedes.id}`
    );

    let msj = "Cliente desconectado: ";
    let clien = client.id.toString();
    //let brok= aedes.id.toString();
    msj += clien + " a las: " + new Date().toLocaleString();

    socket.broadcast.emit("chat_message", {
      usuario: "Desconectado",
      mensaje: msj,
    });
  });

  //---------------------------------Envio a los que estan conectado al Chat un mensaje-------------------------------------
  socket.on("chat_message", (data) => {
    console.log("mensaje del Chat: " + data.toString());
    io.emit("chat_message", data);
  });
});
// -------------------------------- Creo el servidor de Chat para enviar los mensajes con los datos ------------------------
// try {
//   server.listen(porthttp, hostnamehttp, () => {
//     console.log(
//       `Chat Servidor escuchando en el host: ${hostnamehttp} port:\x1b[33m ${porthttp} \x1b[0m `
//     );
//   });
// } catch (error) {
//   console.log("Error al crear el servidor http: " + error);
// }
