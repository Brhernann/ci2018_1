//puedo tener muchas acciones, failure, success, warning,!

import { REDUX } from '../constants';

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

export const resetCollapse = resetCollapse => (
    {
        type: 'RESET_ACTION',
        resetCollapse
    }
);