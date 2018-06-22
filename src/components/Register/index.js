import React, {Component} from 'react';
import {
    Form,
    Input,
    Button,
    Select,
    Card,
    Icon
} from 'antd';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import jwt from 'jwt-simple';
import moment from 'moment';
import rand from 'random-key';
import {FirstChild, FormContent} from './css'
import {cardstyle} from '../globalcss'
import {L_REGISTER, SECRET_TOKEN} from '../../config/constants';
import Sector from '../../json/sector.json';
import REGION from '../../json/Chile.json';
import {getRegister, getToken} from '../../actions/Register';
import { fetchData } from '../../actions/fetch'
const Option = Select.Option;
const Item = Form.Item;

function hasErrors(fieldsError) {
    return Object
        .keys(fieldsError)
        .some(field => fieldsError[field]);
}
class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            tokenGenerated: '',
            Communes: [
                {
                    "comunas": ["HERHU"]
                }
            ],
            CommunesBool: true
        }
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    componentDidMount() {
        this
            .props
            .form
            .validateFields();
    }

    createToken = () => {
        const payload = {
            sub: 'VALIDO',
            iat: moment().unix(),
            exp: moment()
                .add(5, 'minute')
                .unix()
        }

        let objtoken = {
            token: jwt.encode(payload, SECRET_TOKEN),
            rand: rand.generateBase30(5)
        }
        this
            .props
            .Token(objtoken);
    }

    handleSubmit = (e) => {

        e.preventDefault();
        this
            .props
            .form
            .validateFields((err, values) => {
                if (!err) {
                    this
                        .props
                        .Company(values);
                    this.createToken();

                    //INFETCH
                    this.props.Fetch()
                    //ENDFETCH
                    this.setState({redirect: true});
                }
            });
    }

    GetCommune(value) {

        let Communes = REGION
            .regiones
            .filter(q => q.region === value)
        this.setState({Communes, CommunesBool: false})
    }

    render() {

        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        const {CommunesBool, Communes} = this.state;

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
            return <Redirect push to="/gracias/registrado"/>;
        }

        return (
            <Card
                title="Bienvenido, te invitamos a registrar los datos de empresa."
                bordered={false}
                style={cardstyle}>
                <Form layout='horizontal' onSubmit={this.handleSubmit}>
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
                                            prefix={<Icon type = "user" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
                                            placeholder="Ejemplo"/>
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
                                            prefix={<Icon type = "user" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
                                            placeholder="Ejemplo"/>
                                    )
                                }
                            </Item>
                        </FirstChild>

                        <FirstChild>
                            <Item
                                label={L_REGISTER.LABEL_3}
                                validateStatus={label_3_Error
                                    ? 'error'
                                    : ''}
                                help={label_3_Error || ''}>
                                {
                                    getFieldDecorator('label_3', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Porfavor ingrese ' + L_REGISTER.LABEL_3,
                                                type: 'email'
                                            }
                                        ]
                                    })(
                                        <Input
                                            prefix={<Icon type = "user" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
                                            placeholder="Ejemplo"/>
                                    )
                                }
                            </Item>
                        </FirstChild>

                        <FirstChild>
                            <Item
                                label={L_REGISTER.LABEL_4}
                                validateStatus={label_4_Error
                                    ? 'error'
                                    : ''}
                                help={label_4_Error || ''}>
                                {
                                    getFieldDecorator('label_4', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Porfavor ingrese ' + L_REGISTER.LABEL_4
                                            }
                                        ]
                                    })(
                                        <Input
                                            prefix={<Icon type = "user" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
                                            placeholder="Ejemplo"/>
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
                                                Sector
                                                    .data
                                                    .map((q, i) => <Option key={i} value={q}>{q}</Option>)
                                            }
                                        </Select>
                                    )
                                }
                            </Item>
                        </FirstChild>

                        <FirstChild>
                            <Item
                                label={L_REGISTER.LABEL_6}
                                validateStatus={label_6_Error
                                    ? 'error'
                                    : ''}
                                help={label_6_Error || ''}>
                                {
                                    getFieldDecorator('label_6', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Porfavor ingrese ' + L_REGISTER.LABEL_6
                                            }
                                        ]
                                    })(
                                        <Input
                                            prefix={<Icon type = "user" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
                                            placeholder="Ejemplo"/>
                                    )
                                }
                            </Item>
                        </FirstChild>

                        <FirstChild>
                            <Item
                                label={L_REGISTER.LABEL_7}
                                validateStatus={label_7_Error
                                    ? 'error'
                                    : ''}
                                help={label_7_Error || ''}>
                                {
                                    getFieldDecorator('label_7', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Porfavor ingrese ' + L_REGISTER.LABEL_7
                                            }
                                        ]
                                    })(

                                        <Select
                                            placeholder="Ejemplo"
                                            onChange={this
                                                .GetCommune
                                                .bind(this)}>
                                            {
                                                REGION
                                                    .regiones
                                                    .map((q, i) => <Option key={i} value={q.region}>{q.region}</Option>)
                                            }
                                        </Select>
                                    )
                                }
                            </Item>
                        </FirstChild>

                        <FirstChild>
                            <Item
                                label={L_REGISTER.LABEL_8}
                                validateStatus={label_8_Error
                                    ? 'error'
                                    : ''}
                                help={label_8_Error || ''}>
                                {
                                    getFieldDecorator('label_8', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Porfavor ingrese ' + L_REGISTER.LABEL_8
                                            }
                                        ]
                                    })(

                                        <Select placeholder="Ejemplo" disabled={CommunesBool}>
                                            {
                                                Communes[0]
                                                    .comunas
                                                    .map((q, i) => <Option key={i} value={q}>{q}</Option>)
                                            }
                                        </Select>
                                    )
                                }
                            </Item>
                        </FirstChild>

                        <FirstChild>
                            <Item
                                label={L_REGISTER.LABEL_9}
                                validateStatus={label_9_Error
                                    ? 'error'
                                    : ''}
                                help={label_9_Error || ''}>
                                {
                                    getFieldDecorator('label_9', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Porfavor ingrese ' + L_REGISTER.LABEL_9
                                            }
                                        ]
                                    })(
                                        <Select placeholder="Ejemplo">
                                            <Option value="little">Empresa pequeña</Option>
                                            <Option value="medium">Empresa mediana</Option>
                                            <Option value="large">Emprega grande</Option>
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
const WrappedNormalLoginForm = Form.create()(Register);

const mapDispatchToPropsAction = dispatch => ({
    Company: value => dispatch(getRegister(value)),
    Token: value => dispatch(getToken(value)),
    Fetch: value => dispatch(fetchData(value))
});

export default connect(null, mapDispatchToPropsAction)(WrappedNormalLoginForm);