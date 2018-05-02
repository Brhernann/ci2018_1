import React, { Component } from 'react';
import { token_invalid } from '../';

class NotFound extends Component {
  
    render() {
        return token_invalid('Hola, La pagina que intentas acceder no existe!')
      }
    }

export default NotFound;
