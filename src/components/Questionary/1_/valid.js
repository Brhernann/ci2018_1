import React, { Component } from 'react';
import jwt from 'jwt-simple';
import { Spin } from 'antd';
import { SECRET_TOKEN } from '../../../config/constants';
import { token_valid, token_invalid } from '../../';

export default class Validator extends Component {
    constructor(props){
        super(props);
        this.state = {
            TOKEN: this.props.match.params.id,
            err: 9,
        }
    }

    componentDidMount() {
        this.ValidateToken();
    }

    ValidateToken = () => {
        
        const { TOKEN } = this.state;

        try{
            let  auth = jwt.decode(TOKEN, SECRET_TOKEN)

            if (auth.sub === 'VALIDO') {
                this.setState({ err: 0 });
            }

        }catch(e){
            console.log(e.toString())

            switch (e.toString()) {
                case 'Error: Token expired':
                this.setState({ err: 1 })
                    break;
                case 'Error: Not enough or too many segments':
                this.setState({ err : 2 })
                    break;
                case 'Error: Signature verification failed':
                this.setState({ err: 3 })
                    break;
                default:
                this.setState({ err: 9 })
                    break;
            }
        }
    }

    render(){

        const { err } = this.state;
                    
                switch (err) {
                    case 0:
                    return token_valid();
                    case 1:
                    return token_invalid('Lamentamos informarte que el Link ha expirado con el tiempo.');
                    case 2:
                    return token_invalid('El Link que intentas abrir NO existe.');
                    case 3:
                    return token_invalid('El Link con el que te haz redireccionado es invalido');
                    default:
                    return <Spin tip='Estamos validando tu Link'/>
                }
            
    }
}
