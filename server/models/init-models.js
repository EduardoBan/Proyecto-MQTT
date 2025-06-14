var DataTypes = require("sequelize").DataTypes;
var _comandos = require("./comandos");
var _contrato = require("./contrato");
var _empresa = require("./empresa");
var _formula = require("./formula");
var _grupo_rol = require("./grupo_rol");
var _ingresosregistro = require("./ingresosregistro");
var _puertoes = require("./puertoes");
var _puntodemedicion = require("./puntodemedicion");
var _regcomunicacion = require("./regcomunicacion");
var _registro = require("./registro");
var _registroalarmas = require("./registroalarmas");
var _registroemail = require("./registroemail");
var _registroreporte = require("./registroreporte");
var _reporte_entsal_usuario = require("./reporte_entsal_usuario");
var _string_comando = require("./string_comando");
var _usuario_entsal = require("./usuario_entsal");
var _usuarios = require("./usuarios");
var _vistas = require("./vistas");
var _vistas_has_puertoes = require("./vistas_has_puertoes");

function initModels(sequelize) {
  var comandos = _comandos(sequelize, DataTypes);
  var contrato = _contrato(sequelize, DataTypes);
  var empresa = _empresa(sequelize, DataTypes);
  var formula = _formula(sequelize, DataTypes);
  var grupo_rol = _grupo_rol(sequelize, DataTypes);
  var ingresosregistro = _ingresosregistro(sequelize, DataTypes);
  var puertoes = _puertoes(sequelize, DataTypes);
  var puntodemedicion = _puntodemedicion(sequelize, DataTypes);
  var regcomunicacion = _regcomunicacion(sequelize, DataTypes);
  var registro = _registro(sequelize, DataTypes);
  var registroalarmas = _registroalarmas(sequelize, DataTypes);
  var registroemail = _registroemail(sequelize, DataTypes);
  var registroreporte = _registroreporte(sequelize, DataTypes);
  var reporte_entsal_usuario = _reporte_entsal_usuario(sequelize, DataTypes);
  var string_comando = _string_comando(sequelize, DataTypes);
  var usuario_entsal = _usuario_entsal(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);
  var vistas = _vistas(sequelize, DataTypes);
  var vistas_has_puertoes = _vistas_has_puertoes(sequelize, DataTypes);

  contrato.belongsToMany(contrato, { as: 'contrato_empresa_ID_contratos', through: puntodemedicion, foreignKey: "contrato_Id", otherKey: "contrato_empresa_ID" });
  contrato.belongsToMany(contrato, { as: 'contrato_Id_contratos', through: puntodemedicion, foreignKey: "contrato_empresa_ID", otherKey: "contrato_Id" });
  usuarios.belongsToMany(usuarios, { as: 'usuarios_contrato_Id_usuarios', through: grupo_rol, foreignKey: "usuarios_ID", otherKey: "usuarios_contrato_Id" });
  usuarios.belongsToMany(usuarios, { as: 'usuarios_ID_usuarios', through: grupo_rol, foreignKey: "usuarios_contrato_Id", otherKey: "usuarios_ID" });
  puntodemedicion.belongsTo(contrato, { as: "contrato", foreignKey: "contrato_Id"});
  contrato.hasMany(puntodemedicion, { as: "puntodemedicions", foreignKey: "contrato_Id"});
  puntodemedicion.belongsTo(contrato, { as: "contrato_empresa", foreignKey: "contrato_empresa_ID"});
  contrato.hasMany(puntodemedicion, { as: "contrato_empresa_puntodemedicions", foreignKey: "contrato_empresa_ID"});
  usuarios.belongsTo(contrato, { as: "contrato", foreignKey: "contrato_Id"});
  contrato.hasMany(usuarios, { as: "usuarios", foreignKey: "contrato_Id"});
  contrato.belongsTo(empresa, { as: "empresa", foreignKey: "empresa_ID"});
  empresa.hasMany(contrato, { as: "contratos", foreignKey: "empresa_ID"});
  registroreporte.belongsTo(empresa, { as: "Empresa", foreignKey: "EmpresaId"});
  empresa.hasMany(registroreporte, { as: "registroreportes", foreignKey: "EmpresaId"});
  registro.belongsTo(puertoes, { as: "Puerto", foreignKey: "PuertoES_Id"});
  puertoes.hasMany(registro, { as: "registros", foreignKey: "PuertoES_Id"});
  registro.belongsTo(puertoes, { as: "PuertoES_puntodemedicion", foreignKey: "PuertoES_puntodemedicion_Id"});
  puertoes.hasMany(registro, { as: "PuertoES_puntodemedicion_registros", foreignKey: "PuertoES_puntodemedicion_Id"});
  registro.belongsTo(puertoes, { as: "PuertoES_puntodemedicion_contrato", foreignKey: "PuertoES_puntodemedicion_contrato_Id"});
  puertoes.hasMany(registro, { as: "PuertoES_puntodemedicion_contrato_registros", foreignKey: "PuertoES_puntodemedicion_contrato_Id"});
  registro.belongsTo(puertoes, { as: "PuertoES_puntodemedicion_contrato_empresa", foreignKey: "PuertoES_puntodemedicion_contrato_empresa_ID"});
  puertoes.hasMany(registro, { as: "PuertoES_puntodemedicion_contrato_empresa_registros", foreignKey: "PuertoES_puntodemedicion_contrato_empresa_ID"});
  registroalarmas.belongsTo(puertoes, { as: "Puerto", foreignKey: "PuertoESID"});
  puertoes.hasMany(registroalarmas, { as: "registroalarmas", foreignKey: "PuertoESID"});
  vistas_has_puertoes.belongsTo(puertoes, { as: "Puerto", foreignKey: "PuertoES_Id"});
  puertoes.hasMany(vistas_has_puertoes, { as: "vistas_has_puertos", foreignKey: "PuertoES_Id"});
  vistas_has_puertoes.belongsTo(puertoes, { as: "PuertoES_puntodemedicion", foreignKey: "PuertoES_puntodemedicion_Id"});
  puertoes.hasMany(vistas_has_puertoes, { as: "PuertoES_puntodemedicion_vistas_has_puertos", foreignKey: "PuertoES_puntodemedicion_Id"});
  vistas_has_puertoes.belongsTo(puertoes, { as: "PuertoES_puntodemedicion_contrato", foreignKey: "PuertoES_puntodemedicion_contrato_Id"});
  puertoes.hasMany(vistas_has_puertoes, { as: "PuertoES_puntodemedicion_contrato_vistas_has_puertos", foreignKey: "PuertoES_puntodemedicion_contrato_Id"});
  vistas_has_puertoes.belongsTo(puertoes, { as: "PuertoES_puntodemedicion_contrato_empresa", foreignKey: "PuertoES_puntodemedicion_contrato_empresa_ID"});
  puertoes.hasMany(vistas_has_puertoes, { as: "PuertoES_puntodemedicion_contrato_empresa_vistas_has_puertos", foreignKey: "PuertoES_puntodemedicion_contrato_empresa_ID"});
  comandos.belongsTo(puntodemedicion, { as: "PuntoMedicion", foreignKey: "PuntoMedicionID"});
  puntodemedicion.hasMany(comandos, { as: "comandos", foreignKey: "PuntoMedicionID"});
  puertoes.belongsTo(puntodemedicion, { as: "puntodemedicion", foreignKey: "puntodemedicion_Id"});
  puntodemedicion.hasMany(puertoes, { as: "puertos", foreignKey: "puntodemedicion_Id"});
  puertoes.belongsTo(puntodemedicion, { as: "puntodemedicion_contrato", foreignKey: "puntodemedicion_contrato_Id"});
  puntodemedicion.hasMany(puertoes, { as: "puntodemedicion_contrato_puertos", foreignKey: "puntodemedicion_contrato_Id"});
  puertoes.belongsTo(puntodemedicion, { as: "puntodemedicion_contrato_empresa", foreignKey: "puntodemedicion_contrato_empresa_ID"});
  puntodemedicion.hasMany(puertoes, { as: "puntodemedicion_contrato_empresa_puertos", foreignKey: "puntodemedicion_contrato_empresa_ID"});
  regcomunicacion.belongsTo(puntodemedicion, { as: "PuntoMedicion", foreignKey: "PuntoMedicionID"});
  puntodemedicion.hasMany(regcomunicacion, { as: "regcomunicacions", foreignKey: "PuntoMedicionID"});
  registroalarmas.belongsTo(puntodemedicion, { as: "PtoMedicion", foreignKey: "PtoMedicionID"});
  puntodemedicion.hasMany(registroalarmas, { as: "registroalarmas", foreignKey: "PtoMedicionID"});
  registroreporte.belongsTo(puntodemedicion, { as: "PtoMedicion", foreignKey: "PtoMedicionId"});
  puntodemedicion.hasMany(registroreporte, { as: "registroreportes", foreignKey: "PtoMedicionId"});
  formula.belongsTo(registro, { as: "Registro", foreignKey: "RegistroID"});
  registro.hasMany(formula, { as: "formulas", foreignKey: "RegistroID"});
  comandos.belongsTo(usuarios, { as: "Usuario", foreignKey: "UsuarioID"});
  usuarios.hasMany(comandos, { as: "comandos", foreignKey: "UsuarioID"});
  grupo_rol.belongsTo(usuarios, { as: "usuario", foreignKey: "usuarios_ID"});
  usuarios.hasMany(grupo_rol, { as: "grupo_rols", foreignKey: "usuarios_ID"});
  grupo_rol.belongsTo(usuarios, { as: "usuarios_contrato", foreignKey: "usuarios_contrato_Id"});
  usuarios.hasMany(grupo_rol, { as: "usuarios_contrato_grupo_rols", foreignKey: "usuarios_contrato_Id"});
  ingresosregistro.belongsTo(usuarios, { as: "IDUsuario_usuario", foreignKey: "IDUsuario"});
  usuarios.hasMany(ingresosregistro, { as: "ingresosregistros", foreignKey: "IDUsuario"});
  registroemail.belongsTo(usuarios, { as: "Usuario", foreignKey: "UsuarioID"});
  usuarios.hasMany(registroemail, { as: "registroemails", foreignKey: "UsuarioID"});
  registroreporte.belongsTo(usuarios, { as: "Usuario", foreignKey: "UsuarioId"});
  usuarios.hasMany(registroreporte, { as: "registroreportes", foreignKey: "UsuarioId"});
  reporte_entsal_usuario.belongsTo(usuarios, { as: "Usuario", foreignKey: "UsuarioId"});
  usuarios.hasMany(reporte_entsal_usuario, { as: "reporte_entsal_usuarios", foreignKey: "UsuarioId"});
  string_comando.belongsTo(usuarios, { as: "Usuario", foreignKey: "UsuarioID"});
  usuarios.hasMany(string_comando, { as: "string_comandos", foreignKey: "UsuarioID"});
  usuario_entsal.belongsTo(usuarios, { as: "Usuario", foreignKey: "UsuarioID"});
  usuarios.hasMany(usuario_entsal, { as: "usuario_entsals", foreignKey: "UsuarioID"});
  vistas_has_puertoes.belongsTo(vistas, { as: "vista", foreignKey: "vistas_Id"});
  vistas.hasMany(vistas_has_puertoes, { as: "vistas_has_puertos", foreignKey: "vistas_Id"});

  return {
    comandos,
    contrato,
    empresa,
    formula,
    grupo_rol,
    ingresosregistro,
    puertoes,
    puntodemedicion,
    regcomunicacion,
    registro,
    registroalarmas,
    registroemail,
    registroreporte,
    reporte_entsal_usuario,
    string_comando,
    usuario_entsal,
    usuarios,
    vistas,
    vistas_has_puertoes,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
