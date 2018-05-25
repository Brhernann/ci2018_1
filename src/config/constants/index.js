
export const TITLE_WELCOME = 'Encuesta empresarial';
export const MESSAGE_WELCOME = ''; 
export const SECRET_TOKEN = 'CORPINDEXORATION';

export const EMPATIA_DEFINITON = 'Se define como  el impacto emocional, económico y de desarrollo sostenible'+
 ' que produce una entidad en la sociedad, nuevas generaciones, trabajadores, clientes, proveedores, beneficiarios, audiencias y accionistas';

// FORM TEXT register
export const L_REGISTER = {
    LABEL_1 : 'Persona de contacto al interior de la empresa',
    LABEL_2 : 'Cargo',
    LABEL_3 : 'Email de contacto',
    LABEL_4 : 'Nombre de la empresa',
    LABEL_5 : 'Dirección principal de la empresa',
    LABEL_6 : 'Sector de actividad',
    LABEL_7 : 'Municipalidad a la cual pertenece la empresa ',
    LABEL_8 : ' Tipo de empresa',
}

export const END_MSSAGE = {
    FROM_REGISTER: 'Haz finalizado exitosamente el registro.',
    FROM_QUESTIONARY: 'Haz finalizado exitosamente el cuestionario.',
    END_EMAIL_MESSAGE: 'Si usted desea recibir los resultados finales antes de la publicación en el medio, ingrese su correo acá.'
}

export const WELCOME_MESSAGE = {
    titleencuesta2: 'Marque el factor mas relevante de la empatía de la empresa',
}

export const QUESTIONARY_1 = {
    title:'LAS EMPRESAS CON MEJOR EMPATÍA CORPORATIVA',
    subtitle:' La empatía corporativa a nivel empresarial se define como: ',
    resumen: '<b>El inpacto emocional, económico que produce una organización en la sociedad,</b>' + 
    ' en las <b>Nuevas generaciones, trabajadores/as, clientes, audiencias, accionistas,</b> y que ' +
    'aporta al desarrollo sostenible.',
    question: 'Considerando la definición anterior y según su punto de vista personal.'+
    '<br><br>'+
    'Señale almenos una empresa que usted considera <b>más empáticas</b> en su que hacer empresarial'+
    ' (desplegable de empresas con nombre predeterminado según catastro).'

}

export const REDUX_Q = {
    GET_EMAIL:'GET_EMAIL',
    GET_COMPANY: 'GET_COMPANY',
    GET_FACTOR: 'GET_FACTOR',
    GET_OPENQUESTION:'GET_OPENQUESTION'
}

export const REDUX_R = {
    GET_REGISTER:'GET_REGISTER',
    GET_TOKEN:'GET_TOKEN'
}
