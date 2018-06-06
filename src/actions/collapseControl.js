//puedo tener muchas acciones, failure, success, warning,!

import { REDUX } from '../config/constants';

export const Booleano = Booleano => ({
        type: REDUX.COLLAPSE_BOOLEAN, 
        Booleano
    }
);

export const CollapseActive = CollapseActive => ({
        type: REDUX.COLLAPSE_ACTIVE, 
        CollapseActive
    }
);
 
export const QuestionaryActive = QuestionaryActive => ({
        type: REDUX.QUESTIONARY_ACTIVE, 
        QuestionaryActive
    }
);