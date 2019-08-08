export const SECRET_TOKEN = "CLIENTASHJDJHASHJB3"
// FETCH
export const FETCHING_DATA = "FETCHING_DATA"
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS"
export const FETCHING_DATA_FAILURE = "FETCHING_DATA_FAILURE"

export const URLWEB =
  "https://corporateindex.cl/empatiacorporativa/#/bienvenido/"
export const URL = "https://devcorporateindex.com/faseuno/webservices/"

//export const URLWEB = "http://localhost:3001/#/bienvenido/"
// export const URL = "http://localhost:3000/webservices/"

export const WS = {
  InsertEnterprise_evaluation: URL + "InsertEnterprise_evaluation",
  InsertLink: URL + "InsertLink",
  ReadSector: URL + "GetSector",
  ReadLink: URL + "GetLink",
  GetSectorId_from_enterprise_evaluation:
    URL + "GetSectorId_from_enterprise_evaluation",
  GetEnterprise_Stored: URL + "GetEnterprise_Stored",
  GetSubsector_and_id: URL + "GetSubsector_and_id",
  getMailsubscribed: URL + "GetMailSurveyed_And_ID",
  getMailperson: URL + "getMailPerson"
}

export const OHWS = {
  InsertMail_surveyed: URL + "InsertMail_surveyed",
  InsertAnswers_to_question: URL + "InsertAnswers_to_question",
  InsertEnterprise_Selected: URL + "InsertEnterprise_Selected",
  InsertVariablesSelected: URL + "InsertVariablesSelected",
  InsertRelationship: URL + "InsertRelationship",
  InsertRelationShip_Person: URL + "Insert_RelationShipPerson",
  InsertNatural_person: URL + "InsertNatural_person",
  Insert_Auto_Evaluation: URL + "InsertAutoEvaluation",
  InsertRelationship_Auto_Evaluation: URL + "InsertRelationshipAutoEvaluation"
}

export const EMPATIA_DEFINITON =
  "Se define como  el impacto emocional, económico y de desarrollo sostenible" +
  " que produce una entidad en la sociedad, nuevas generaciones, trabajadores, clientes, proveedores, beneficiarios, audiencias y accionistas"

export const INTRODUCTION = ""

export const VISION = {
  TITLE: "ÍNDICE CORPORATIVO DE EMPATÍA.",
  RESUMEN:
    '<p><b>"Empresas más empáticas con propósito, inclusivas y sostenibles"</b>.</p>' +
    "<p>El Índice de Empatía Corporativa ICE es nuestro primer producto de excelencia en la investigación de la empatía a nivel empresarial." +
    "<br>" +
    "Es una herramienta de gestión sin costo para las empresas o instituciones que necesiten medir los niveles de empatía " +
    "de sus compañías en sus stakeholders." +
    "</p>"
}

export const EMPATIA = {
  TITLE: "Índice Verificado.",
  RESUMEN:
    "<p>El Índice de Empatía Corporativa ICE, tiene tres fases sucesivas de evaluación, cada una de ellas pesa un 33,3% " +
    "en la valoración de la empresa en el ranking final y en esta edición, consulta a 22 fuentes de información. " +
    "El método permite realizar una auto-evaluación de la empresa participante. " +
    "KPMG Chile verifica nuestra medición, a través de la norma internacional ISAE 3000." +
    "</p>"
}

export const MISION = {
  TITLE: "Metodología.",
  RESUMEN:
    "<p>El Índice de Empatía Corporativa tiene una metodología basada en el modelo inglés y mide " +
    "los niveles de empatía de las empresas en torno a las expectativas " +
    "y al impacto emocional y económico que produce una entidad en sus stakeholders " +
    "Encontrar el equilibrio entre expectativas e impacto emocional nos permitirá entender " +
    "las necesidades de todas las partes interesadas y es un factor clave de liderazgo para el éxito empresarial." +
    "</p>"
}

export const LINK_CREATED = {
  TITLE: "Gracias por su participación.",
  RESUMEN:
    "Aquí puede descargar un LINK PÚBLICO, el que puede adjuntar y pegar en su correo de invitación a contestar la encuesta."
}

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
  LABEL_11:
    "Cargo que desempeña actualmente o cargo más alto que obtuvo anteriormente en una compañía. ",
  LABEL_12: "Nombre",
  LABEL_13: "Correo",
  LABEL_14: "Nombre de su empresa (en la que Usted trabaja actualmente)"
}

export const END_MSSAGE = {
  FROM_REGISTER: "Finalizaste exitosamente el registro.",
  FROM_QUESTIONARY: "Ha finalizado exitosamente el cuestionario.",
  FROM_ENDFACTOR: "Tu respuesta ha sido guardada.",
  END_EMAIL_MESSAGE:
    "Si usted desea recibir los resultados finales antes de la publicación en el medio, ingrese su correo acá."
}

export const WELCOME_MESSAGE = {
  FROM_REGISTER:
    "Bienvenido(a) a la plataforma del área de investigación y estudios públicos de Corporate Index.",
  FROM_QUESTIONARY: "Encuesta empresarial"
}

export const QUESTIONARY_1 = {
  title: "RANKING DE LAS EMPRESAS CON MEJOR EMPATÍA CORPORATIVA",
  subtitle: " La empatía corporativa a nivel empresarial se define como:",
  resumen:
    "El grado de compromiso que se percibe de una compañía al hacerse cargo de las expectativas " +
    "y del impacto emocional y económico que la entidad genera en sus públicos de interés. La Empatía Corporativa, se define también, " +
    "como la habilidad de una compañía de ponerse en el lugar del otro.",
  question:
    "Considerando la definición anterior y según su punto de vista personal, " +
    "seleccione una empresa de cada uno de las siguientes industrias,  " +
    "que Ud considere <b><u>Empática</u></b> en su que hacer empresarial. " +
    "<br><br>" +
    "(los nombres de las empresas se desplegarán por sub sector)" +
    "<br><br>" +
    "<b>Nota: Usted no puede votar aquí por su misma empresa u otras empresas del mismo Holding, más adelante se le pedirá la evaluación de su empresa.<b>"
}

export const QUESTIONARY_3 = {
  resumen:
    "La empatía corporativa es considerada como un Driver clave del negocio en relación al cumplimiento de los Objetivos de Desarrollo Sostenible decretados por la ONU en el año 2015.",
  question:
    "¿Cómo considera usted que su empresa está gestionando los ODS a nivel interno?",
  resumen2:
    "Indíquenos alguna empresa que opera en Chile, que usted considere lider en materia de empatía."
}

export const INCOMPLETE_QUESTIONAY = {
  title: "¡Tienes un formulario incompleto!",
  content:
    "Puedes guardar el siguiente cuestionario y continuar, pero se perderá el progreso del anterior.",
  okButtom: "Continuar",
  cancelButtom: "Terminar anterior"
}

export const REDUX = {
  COLLAPSE_BOOLEAN: "COLLAPSE_BOOLEAN",
  COLLAPSE_ACTIVE: "COLLAPSE_ACTIVE",
  QUESTIONARY_ACTIVE: "QUESTIONARY_ACTIVE"
}

export const REDUX_Q = {
  GET_EMAIL: "GET_EMAIL",
  ALL_COMPANY: "ALL_COMPANY",
  ALL_MAILS: "ALL_MAILS",
  GET_COMPANY: "GET_COMPANY",
  GET_FACTOR: "GET_FACTOR",
  GET_OPENQUESTION: "GET_OPENQUESTION",
  GET_ALL_THE_ANSWER: "GET_ALL_THE_ANSWER",
  AUTO_COMPANY: "AUTO_COMPANY"
}

export const REDUX_R = {
  GET_REGISTER: "GET_REGISTER",
  GET_TOKEN: "GET_TOKEN",
  GET_MAILS: "GET_MAILS",
  GET_REGISTER_PERSON: "GET_REGISTER_PERSON",
  GET_REGISTER_AUTO_EVALUATION: "GET_REGISTER_AUTO_EVALUATION",
  GET_REGISTER_AUTO_EVALUATIONID: "GET_REGISTER_AUTO_EVALUATIONID",
  GET_REGISTER_NATURAL_PERSON_ID: "GET_REGISTER_NATURAL_PERSON_ID"
}
