import React, {Component} from 'react';
import jwt from 'jwt-simple';
import {Spin} from 'antd';
import {connect} from 'react-redux';
import { AllCompany } from '../../../actions/Questionary';
import {SECRET_TOKEN} from '../../../constants';
import {token_valid, token_invalid} from '../../';
import ReadLink from '../../../API/ReadLink';
import GetSectorId_from_enterprise_evaluation from '../../../API/GetSectorId_from_enterprise_evaluation';
import GetSubsector_and_id from '../../../API/GetSubsector_and_id';
import GetEnterprise_Stored from '../../../API/GetEnterprise_Stored';

class Validator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            RAND: this.props.match.params.id,
            err: 9,
            tip: 'Estamos validando tu Link'
        }
    }

    componentDidMount() {
        this.ValidateToken();
        console.log(this.state.RAND)
    }

    async getData(id) {

        let sector_id = null,  subsector = [], enterprise = [];

        await GetSectorId_from_enterprise_evaluation(id)
            .then(res => sector_id = res.data.data[0].Sector_ID)
            .catch(err => console.log(err));
        
        this.setState({tip: 'Estamos cargando los componentes necesarios.'})
        await GetSubsector_and_id(sector_id)
            .then(res => subsector = res.data.data)
            .catch(err => console.log(err))
        
        for(let value of subsector){
        await GetEnterprise_Stored(value.ID)
            .then(res => enterprise.push(res.data.data))
            .catch(err => console.log(err))
        }
        
        let final = subsector.map((q,i) => {
            return {
                ...q,
                enterprise: enterprise[i]
            }
        });

        this.props.AllCompany(final);
        this.setState({ err: 0 });
        }

    ValidateToken = () => {

        const {RAND} = this.state;

        ReadLink({Rand: RAND})
            .then(res => {
                try {
                    if (res.data.data !== null) {

                        let TOKEN = res.data.data[0].Token;
                        let auth = jwt.decode(TOKEN, SECRET_TOKEN)
                        if (auth.sub === 'VALIDO') {
                            this.getData(res.data.data[0].Enterprise_Evaluation_ID);
                        }

                    } else {
                        this.setState({err: 2});
                    }

                } catch (e) {
                    switch (e.toString()) {
                        case 'Error: Token expired':
                            this.setState({err: 1})
                            break;
                        case 'Error: Not enough or too many segments':
                            this.setState({err: 2})
                            break;
                        case 'Error: Signature verification failed':
                            this.setState({err: 3})
                            break;
                        default:
                            this.setState({err: 9})
                            break;
                    }
                }
            })
            .catch(err => console.log(err))
        }

    render() {

        const {err} = this.state;

        switch (err) {
            case 0:
                return token_valid();
            case 1:
                return token_invalid(
                    'Lamentamos informarte que el Link ha expirado con el tiempo.'
                );
            case 2:
                return token_invalid('El Link que intentas abrir NO existe.');
            case 3:
                return token_invalid('El Link con el que te haz redireccionado es invalido');
            default:
                return <div style={{marginTop:'10%'}}><Spin tip={this.state.tip}/></div>
        }

    }
}

const mapDispatchToPropsAction = dispatch => ({
    AllCompany: value => dispatch(AllCompany(value))
});

export default connect(null, mapDispatchToPropsAction)(Validator);
