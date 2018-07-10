export const SECRET_TOKEN = 'CLIENTASHJDJHASHJB3';

// FETCH
export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAILURE = 'FETCHING_DATA_FAILURE';

export const URLWEB = 'http://www.corporateindex.cl/EmpatiaCorporativa/#/bienvenido/';
export const URL = 'http://mainmia.us-west-2.elasticbeanstalk.com/webservices/';
//export const URLWEB = 'localhost:3000/#/bienvenido/';
//export const URL = 'http://localhost:8081/webservices/';

export const WS = {
    InsertEnterprise_evaluation: URL+'InsertEnterprise_evaluation',
    InsertLink: URL+'InsertLink',
    ReadSector: URL+'GetSector',
    ReadLink: URL+'GetLink',
    GetSectorId_from_enterprise_evaluation: URL+'GetSectorId_from_enterprise_evaluation',
    GetEnterprise_Stored: URL+'GetEnterprise_Stored',
    GetSubsector_and_id: URL+'GetSubsector_and_id',
    getMailsubscribed: URL+'GetMailSurveyed_And_ID'

}

export const OHWS = {
    InsertMail_surveyed: URL+'InsertMail_surveyed',
    InsertAnswers_to_question: URL+'InsertAnswers_to_question',
    InsertEnterprise_Selected: URL+'InsertEnterprise_Selected',
    InsertVariablesSelected: URL+'InsertVariablesSelected',
    InsertRelationship: URL+'InsertRelationship'

}

export const EMPATIA_DEFINITON = 'Se define como  el impacto emocional, económico y de desarrollo sostenible' +
    ' que produce una entidad en la sociedad, nuevas generaciones, trabajadores, clientes, proveedores, beneficiarios, audiencias y accionistas';

export const INTRODUCTION = '';

export const VISION = {
    TITLE: 'Nuestra Visión',
    RESUMEN: '<p>Ser una referencia intelectual y profesional en la investigación y gestión de la empatía corporativa a nivel empresarial en alineación con indicadores de cumplimiento general y por industrias de los Objetivos de Desarrollo Sostenible decretados por la ONU en el año 2015.</p>'
};
export const EMPATIA = {
    TITLE: 'Empatía corporativa',
    RESUMEN:
        '<p>Nuestro primer producto de excelencia en la investigación de la empatía a nivel empresarial y tiene como misión evaluar los niveles de empatía y sus criterios de valoración en las empresas y grandes corporaciones. </p>' +
        '<p>Nuestra metodología está validada en Inglaterra, contiene una parte similiar, al estudio que se aplica, desde hace tres años en ese país y se encuentra adaptada a la cultura local. Su propiedad intelectual corresponde al país de origen CHILE. </p>' +
        '<p>Estámos veríficados en nuestras tres fases de investigación por la norma internacional ISAE 3.000 que se aplica para auditorías no financieras. </p>'
};

let color = "<b style='color:khaki'>El ÍNDICE DE EMPATÍA CORPORATIVA</b>";

export const MISION = {
    TITLE: 'Nuestra Misión',
    RESUMEN:
        '<p>Forlalecer y consolidar nuestro capital intelectual constantemente, a través de investigaciones asociadas a empatía corporativa y cumpimiento de los ODS, para entregar reportes, estudios y consultorías de excelencia a nuestros clientes. </p>' +
        '<p>'+color+' es nuestro primer producto de excelencia en la investigación de la empatía a nivel empresarial y tiene como misión evaluar los niveles de empatía y sus criterios de valoración en las empresas y grandes corporaciones. </p>' +
        '<p>Nuestra metodología está validada en Inglaterra, contiene una parte similiar, al estudio que se aplica, desde hace tres años en ese país y se encuentra adaptada a la cultura local. Su propiedad intelectual corresponde al país de origen CHILE. </p>' +
        '<p>Estámos veríficados en nuestras tres fases de investigación por la norma internacional ISAE 3.000 que se aplica para auditorías no financieras.</p > '
};

export const LINK_CREATED = {
    TITLE: 'Gracias por su participación.',
    RESUMEN: 'Aquí puede descargar un LINK PÚBLICO, el que puede adjuntar y pegar en su correo de invitación a contestar la encuesta.'
}

// FORM TEXT register
export const L_REGISTER = {
    LABEL_1: 'Nombre de la persona de contacto',
    LABEL_2: 'Cargo de la persona de contacto',
    LABEL_3: 'Email de la persona de contacto',
    LABEL_4: 'Nombre de la empresa',
    LABEL_5: 'Sector de actividad',
    LABEL_6: 'Dirección principal de la empresa',
    LABEL_7: 'Región', 
    LABEL_8: 'Comuna',
    LABEL_9: ' Tipo de empresa',
}

export const END_MSSAGE = {
    FROM_REGISTER: 'Finalizaste exitosamente el registro.',
    FROM_QUESTIONARY: 'Ha finalizado exitosamente el cuestionario.',
    FROM_ENDFACTOR: 'Tu respuesta ha sido guardada.',
    END_EMAIL_MESSAGE: 'Si usted desea recibir los resultados finales antes de la publicación en el medio, ingrese su correo acá.'
}

export const WELCOME_MESSAGE = {
    FROM_REGISTER: 'Bienvenido(a) a la plataforma del área de investigación y estudios públicos de Corporate Index.',
    FROM_QUESTIONARY: 'Encuesta empresarial'
}

export const QUESTIONARY_1 = {
    title: 'LAS EMPRESAS CON MEJOR EMPATÍA CORPORATIVA',
    subtitle: ' La empatía corporativa a nivel empresarial se define como: ',
    resumen: 'El inpacto emocional, económico que produce una organización en la sociedad,' +
        ' en las Nuevas generaciones, trabajadores/as, clientes, audiencias, accionistas, y que ' +
        'aporta al desarrollo sostenible.',
    question: 'Considerando la definición anterior y según su punto de vista personal,' +
        '<br><br>' +
        'Señale al menos una empresa que Usted considera empática en su quehacer empresarial' +
        ' (los nombres de las empresas se desplegarán por sector).'+
        '<br><br>'+
        '<b>Nota: Usted no puede votar por su misma empresa.<b>'

}

export const QUESTIONARY_3 = {
    resumen: 'La empatía corporativa es considerada como un Driver clave del negocio en relación al cumplimiento de los Objetivos de Desarrollo Sostenible decretados por la ONU en el año 2015.',
    question: '¿Cómo considera usted que su empresa está gestionando los ODS a nivel interno?'

}

export const INCOMPLETE_QUESTIONAY = {
    title:'¡Tienes un formulario incompleto!',
    content:'Puedes guardar el siguiente cuestionario y continuar, pero se perderá el progreso del anterior.',
    okButtom:'Continuar',
    cancelButtom:'Terminar anterior'
}

export const REDUX = {
    COLLAPSE_BOOLEAN: 'COLLAPSE_BOOLEAN',
    COLLAPSE_ACTIVE: 'COLLAPSE_ACTIVE',
    QUESTIONARY_ACTIVE: 'QUESTIONARY_ACTIVE'
}

export const REDUX_Q = {
    GET_EMAIL: 'GET_EMAIL',
    ALL_COMPANY: 'ALL_COMPANY',
    ALL_MAILS:'ALL_MAILS',
    GET_COMPANY: 'GET_COMPANY',
    GET_FACTOR: 'GET_FACTOR',
    GET_OPENQUESTION: 'GET_OPENQUESTION',
    GET_ALL_THE_ANSWER: 'GET_ALL_THE_ANSWER'
}

export const REDUX_R = {
    GET_REGISTER: 'GET_REGISTER',
    GET_TOKEN: 'GET_TOKEN',
    GET_MAILS: 'GET_MAILS'
}
