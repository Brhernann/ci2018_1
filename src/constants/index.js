export const SECRET_TOKEN = "CLIENTASHJDJHASHJB3";
// FETCH
export const FETCHING_DATA = "FETCHING_DATA";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const FETCHING_DATA_FAILURE = "FETCHING_DATA_FAILURE";

export const URLWEB =
  "https://corporateindex.cl/EmpatiaCorporativa/#/bienvenido/";

export const URL =
  "https://jerasport.cl/webservices/";

/* export const URLWEB = "http://localhost:3000/#/bienvenido/";
export const URL = "http://localhost:8081/webservices/"; */

export const WS = {
  InsertEnterprise_evaluation: URL + "InsertEnterprise_evaluation",
  InsertLink: URL + "InsertLink",
  ReadSector: URL + "GetSector",
  ReadLink: URL + "GetLink",
  GetSectorId_from_enterprise_evaluation: URL + "GetSectorId_from_enterprise_evaluation",
  GetEnterprise_Stored: URL + "GetEnterprise_Stored",
  GetSubsector_and_id: URL + "GetSubsector_and_id",
  getMailsubscribed: URL + "GetMailSurveyed_And_ID"
};

export const OHWS = {
  InsertMail_surveyed: URL + "InsertMail_surveyed",
  InsertAnswers_to_question: URL + "InsertAnswers_to_question",
  InsertEnterprise_Selected: URL + "InsertEnterprise_Selected",
  InsertVariablesSelected: URL + "InsertVariablesSelected",
  InsertRelationship: URL + "InsertRelationship",
  InsertRelationShip_Person: URL + "Insert_RelationShipPerson",
  InsertNatural_person: URL + "InsertNatural_person"
};

export const EMPATIA_DEFINITON =
  "Se define como  el impacto emocional, económico y de desarrollo sostenible" +
  " que produce una entidad en la sociedad, nuevas generaciones, trabajadores, clientes, proveedores, beneficiarios, audiencias y accionistas";

export const INTRODUCTION = "";

export const VISION = {
  TITLE: "ÍNDICE CORPORATIVO DE EMPATÍA.",
  RESUMEN: '<p><b>"Empresas más empáticas con propósito, inclusivas y sostenibles"</b>.</p>' +
    "<p>El Índice de Empatía Corporativa es nuestro primer producto de excelencia en la investigación de la empatía a nivel empresarial." +
    "<br>" +
    "Es una herramienta de gestión sin costo para las empresas o instituciones que necesiten medir los niveles de empatía de su compañía " +
    "con todos sus stakeholders o públicos estratégicos." +
    "</p>"
};

export const EMPATIA = {
  TITLE: "Índice Verificado.",
  RESUMEN: "<p>El Índice Corporativo de Empatía tiene tres fases de evaluación de la empatía empresarial" +
    " y consulta a siete grupos de interés, además permite la autoevaluación de las empresas participantes." +
    " Se encuentra en proceso de verificación bajo la norma internacional ISAE 3000 por una empresa internacional de auditoria.</p>"
};

export const MISION = {
  TITLE: "Metodología.",
  RESUMEN: "<p>Nuestra metodología está validada en Inglaterra, contiene una parte similar al estudio que se aplica hace algunos años" +
    " en ese país y se encuentra adaptada a nuestra cultura local y ámbito empresarial. La propiedad intelectual del indice corporativa pertenece a Corporate Index" +
    " y ha sido desarrollada en Chile." +
    "</p>"
};

export const LINK_CREATED = {
  TITLE: "Gracias por su participación.",
  RESUMEN: "Aquí puede descargar un LINK PÚBLICO, el que puede adjuntar y pegar en su correo de invitación a contestar la encuesta."
};

// FORM TEXT register
export const L_REGISTER = {
  LABEL_1: "Nombre de la persona de contacto",
  LABEL_2: "Cargo de la persona de contacto",
  LABEL_3: "Email de la persona de contacto",
  LABEL_4: "Nombre de la empresa",
  LABEL_5: "Sector de actividad",
  LABEL_6: "Dirección principal de la empresa",
  LABEL_7: "Región",
  LABEL_8: "Comuna",
  LABEL_9: " Tipo de empresa",
  LABEL_10: "",
  LABEL_11: "Cargo que desempeña actualmente o cargo más alto que obtuvo anteriormente en una compañía. ",
  LABEL_12: "Nombre"
};

export const END_MSSAGE = {
  FROM_REGISTER: "Finalizaste exitosamente el registro.",
  FROM_QUESTIONARY: "Ha finalizado exitosamente el cuestionario.",
  FROM_ENDFACTOR: "Tu respuesta ha sido guardada.",
  END_EMAIL_MESSAGE: "Si usted desea recibir los resultados finales antes de la publicación en el medio, ingrese su correo acá."
};

export const WELCOME_MESSAGE = {
  FROM_REGISTER: "Bienvenido(a) a la plataforma del área de investigación y estudios públicos de Corporate Index.",
  FROM_QUESTIONARY: "Encuesta empresarial"
};

export const QUESTIONARY_1 = {
  title: "LAS EMPRESAS CON MEJOR EMPATÍA CORPORATIVA",
  subtitle: " La empatía corporativa a nivel empresarial se define como:",
  resumen: " El grado de compromiso, respecto a hacerse cargo de las expectativas que se generan en los públicos" +
    " de interés - adecuando en consecuencia - sus acciones y mensajes para entregar una respuesta" +
    " más alineada con el impacto emocional y económico que produce una entidad.",
  question: "Considerando la definición anterior y según su punto de vista personal, " +
    "señale una empresa de cada uno de los siguientes sub sectores de la industria " +
    "que Ud considere <b><u>Empática</u></b> en su quehacer empresarial. " +
    "<br><br>" +
    "(los nombres de las empresas se desplegarán por sub sector)" +
    "<br><br>" +
    "<b>Nota: Usted no puede votar por su misma empresa u otras empresas del mismo Holding.<b>"
};

export const QUESTIONARY_3 = {
  resumen: "La empatía corporativa es considerada como un Driver clave del negocio en relación al cumplimiento de los Objetivos de Desarrollo Sostenible decretados por la ONU en el año 2015.",
  question: "¿Cómo considera usted que su empresa está gestionando los ODS a nivel interno?"
};

export const INCOMPLETE_QUESTIONAY = {
  title: "¡Tienes un formulario incompleto!",
  content: "Puedes guardar el siguiente cuestionario y continuar, pero se perderá el progreso del anterior.",
  okButtom: "Continuar",
  cancelButtom: "Terminar anterior"
};

export const REDUX = {
  COLLAPSE_BOOLEAN: "COLLAPSE_BOOLEAN",
  COLLAPSE_ACTIVE: "COLLAPSE_ACTIVE",
  QUESTIONARY_ACTIVE: "QUESTIONARY_ACTIVE"
};

export const REDUX_Q = {
  GET_EMAIL: "GET_EMAIL",
  ALL_COMPANY: "ALL_COMPANY",
  ALL_MAILS: "ALL_MAILS",
  GET_COMPANY: "GET_COMPANY",
  GET_FACTOR: "GET_FACTOR",
  GET_OPENQUESTION: "GET_OPENQUESTION",
  GET_ALL_THE_ANSWER: "GET_ALL_THE_ANSWER"
};

export const REDUX_R = {
  GET_REGISTER: "GET_REGISTER",
  GET_TOKEN: "GET_TOKEN",
  GET_MAILS: "GET_MAILS",
  GET_REGISTER_PERSON: "GET_REGISTER_PERSON"
};