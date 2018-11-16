import React, { Component } from 'react';
import {
    Form,
    Input,
    Button,
    Select,
    Card,
    Icon,
    Checkbox
} from 'antd';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import jwt from 'jwt-simple';
import moment from 'moment';
import rand from 'random-key';
import { FirstChild, FormContent } from './css'
import { cardstyle } from '../globalcss'
import { L_REGISTER, SECRET_TOKEN } from '../../constants';
import REGION from '../../json/Chile.json';
import {getRegister, getToken} from '../../actions/Register';
import fetchSector from '../../actions/FetchSector';
import InsertNaturalP from '../../API/InsertNatural_person';
import InsertLink from '../../API/InsertLink';
import './style.css';
const Option = Select.Option;
const Item = Form.Item;

function hasErrors(fieldsError) {
    return Object
        .keys(fieldsError)
        .some(field => fieldsError[field]);
}
class Persona extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            tokenGenerated: '',
            isFetching: true,
            Communes: [
                {
                    "comunas": ["HERHU"]
                }
            ],
            sectors: [],
            CommunesBool: true
        }
    }

    componentWillReceiveProps(NextProps) {
        this.setStateAsync(
            {isFetching: NextProps.GetSector.isFetching, sectors: NextProps.GetSector.data.data}
        )
    }

    componentDidMount() {
        this
            .props
            .form
            .validateFields();
        this
            .props
            .FetchSector();
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        })
    }

    createToken = id => {

        const payload = { sub: 'VALIDO', iat: moment().unix(), exp: moment().add(3, 'M').unix() }

        let objtoken = {
            token: jwt.encode(payload, SECRET_TOKEN),
            rand: rand.generateBase30(5),
            Url: 'empty',
            ID: id
        }

        this.props.Token(objtoken);

        InsertLink(objtoken)
            .then(res => {
                this.setState({redirect: true});
            })
            .catch(err => console.log(err))
    }

    handleSubmit = async (e) => {

        e.preventDefault();
        await this.props.form
            .validateFields((err, values) => {
                if (!err) {
                    InsertNaturalP(values)
                        .then(res => {
                            this.createToken(res.data.id);
                            this.props.Company({id: res.data.id})
                        })
                        .catch(err => console.log(err))
                    }
            });
    }

    GetCommune(value) {

        let Communes = REGION
            .regiones
            .filter(q => q.region === value)
        this.setState({ Communes, CommunesBool: false })
    }
    

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const { CommunesBool, Communes } = this.state;

        const label_1_Error = isFieldTouched('label_1') && getFieldError('label_1');
        const label_2_Error = isFieldTouched('label_2') && getFieldError('label_2');
        const label_3_Error = isFieldTouched('label_3') && getFieldError('label_3');
        const label_4_Error = isFieldTouched('label_4') && getFieldError('label_4');
        const label_5_Error = isFieldTouched('label_5') && getFieldError('label_5');
        const label_6_Error = isFieldTouched('label_6') && getFieldError('label_6');
        const label_7_Error = isFieldTouched('label_7') && getFieldError('label_7');
        const label_8_Error = isFieldTouched('label_8') && getFieldError('label_8');
        const label_9_Error = isFieldTouched('label_9') && getFieldError('label_9');

        if (this.state.redirect) {
            return <Redirect push to="/RegistroMail"/>;
        }

        return (
            <Card
                title="Bienvenido, te invitamos a registrar tus datos para responder la encuesta."
                bordered={false}
                style={cardstyle}>
                <Form
                    layout='horizontal'
                    onSubmit={this
                        .handleSubmit
                        .bind(this)}>
                    <FormContent>
                        <FirstChild>
                            <Item
                                label={L_REGISTER.LABEL_1}
                                validateStatus={label_1_Error
                                    ? 'error'
                                    : ''}
                                help={label_1_Error || ''}>
                                {
                                    getFieldDecorator('label_1', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Porfavor ingrese ' + L_REGISTER.LABEL_1
                                            }
                                        ]
                                    })(
                                        <Input
                                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            placeholder="Ejemplo" />
                                    )
                                }
                            </Item>
                        </FirstChild>

                        <FirstChild>
                            <Item
                                label={L_REGISTER.LABEL_2}
                                validateStatus={label_2_Error
                                    ? 'error'
                                    : ''}
                                help={label_2_Error || ''}>
                                {
                                    getFieldDecorator('label_2', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Porfavor ingrese ' + L_REGISTER.LABEL_2
                                            }
                                        ]
                                    })(
                                        <Input
                                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            placeholder="Ejemplo" />
                                    )
                                }
                            </Item>
                        </FirstChild>

                        <FirstChild>
                            <Item
                                label={L_REGISTER.LABEL_5}
                                validateStatus={label_5_Error
                                    ? 'error'
                                    : ''}
                                help={label_5_Error || ''}>
                                {
                                    getFieldDecorator('label_5', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Porfavor ingrese ' + L_REGISTER.LABEL_5
                                            }
                                        ]
                                    })(
                                        <Select placeholder="Ejemplo">
                                            {

                                                this.state.isFetching
                                                    ? console.log('cargando')
                                                    : this
                                                        .state
                                                        .sectors
                                                        .map((q, i) => <Option key={i} value={q.ID}>{q.Name}</Option>)
                                            }
                                        </Select>
                                    )
                                }
                            </Item>
                        </FirstChild>
                        
                        <FirstChild>
                            <Item>
                                <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                                    Finalizar
                                </Button>
                            </Item>
                        </FirstChild>
                    </FormContent>
                </Form>
            </Card>
        )
    }

}
const WrappedNormalLoginForm = Form.create()(Persona);

const mapStateToProps = state => {
    return {GetSector: state.FetchSector}
}

const mapDispatchToPropsAction = dispatch => ({
    Company: value => dispatch(getRegister(value)),
    Token: value => dispatch(getToken(value)),
    FetchSector: value => dispatch(fetchSector(value))
});

export default connect(mapStateToProps, mapDispatchToPropsAction)(
    WrappedNormalLoginForm
);