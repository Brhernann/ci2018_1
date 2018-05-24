import { createStore } from 'redux';
import { company_selected } from '../reducers/Company'

  const initialState = {
      email:'',
      company_selected:'',
      factor_selected:[],
      answer_selected:''

  }

export const store = createStore(company_selected, initialState, 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());