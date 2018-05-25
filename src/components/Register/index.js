import React, {Component} from 'react';
import {
    Form,
    Input,
    Button,
    Select,
    Card,
    Icon
} from 'antd';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import jwt from 'jwt-simple';
import moment from 'moment';
import { L_REGISTER, SECRET_TOKEN } from '../../config/constants';
import Sector from '../../config/constants/sector.json';
import { getRegister, getToken } from '../../actions/Register'
const Option = Select.Option;
const Item = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}
class Register extends Component {

    constructor(props) {
        super(props);
        this.state={
            redirect: false,
            tokenGenerated: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.form.validateFields();
    }

    createToken = () => {
        const payload = {
            sub: 'VALIDO',
            iat: moment().unix(),
            exp: moment().add(1, 'minute').unix(),
        }

        let token = jwt.encode(payload, SECRET_TOKEN);
        this.props.Token(token);
    }

    handleSubmit = (e) => {

        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
              this.props.Company(values);
              this.createToken();
           // this.setState({redirect: true});
          }
        });
    }
    
    render() {

        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        const label_1_Error = isFieldTouched('label_1') && getFieldError('label_1');
        const label_2_Error = isFieldTouched('label_2') && getFieldError('label_2');
        const label_3_Error = isFieldTouched('label_3') && getFieldError('label_3');
        const label_4_Error = isFieldTouched('label_4') && getFieldError('label_4');
        const label_5_Error = isFieldTouched('label_5') && getFieldError('label_5');
        const label_6_Error = isFieldTouched('label_6') && getFieldError('label_6');
        const label_7_Error = isFieldTouched('label_7') && getFieldError('label_7');
        const label_8_Error = isFieldTouched('label_8') && getFieldError('label_8');

        if (this.state.redirect) {
            return <Redirect push to="/gracias/registrado" />;
        }
        
        return (
            <Card
                title="Bienvenido, te invitamos a registrar los datos de empresa."
                bordered={false}
                style={{width: '40%',
                textAlign: 'left',
                marginTop: '2%',}}>

                <Form layout='horizontal' onSubmit={this.handleSubmit}>

                    <Item label={L_REGISTER.LABEL_1} validateStatus={label_1_Error ? 'error' : ''} help={label_1_Error || ''}>
                    {getFieldDecorator('label_1', { rules: [{ required: true, message: 'Porfavor ingrese ' + L_REGISTER.LABEL_1 }],})(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Ejemplo" />)}
                    </Item>

                    <Item label={L_REGISTER.LABEL_2} validateStatus={label_2_Error ? 'error' : ''} help={label_2_Error || ''}>
                    {getFieldDecorator('label_2', { rules: [{ required: true, message: 'Porfavor ingrese ' + L_REGISTER.LABEL_2 }],})(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Ejemplo" />)}
                    </Item>

                    <Item label={L_REGISTER.LABEL_3} validateStatus={label_3_Error ? 'error' : ''} help={label_3_Error || ''}>
                    {getFieldDecorator('label_3', { rules: [{ required: true, message: 'Porfavor ingrese ' + L_REGISTER.LABEL_3 }],})(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Ejemplo" />)}
                    </Item>

                    <Item label={L_REGISTER.LABEL_4} validateStatus={label_4_Error ? 'error' : ''} help={label_4_Error || ''}>
                    {getFieldDecorator('label_4', { rules: [{ required: true, message: 'Porfavor ingrese ' + L_REGISTER.LABEL_4 }],})(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Ejemplo" />)}
                    </Item>

                    <Item label={L_REGISTER.LABEL_5} validateStatus={label_5_Error ? 'error' : ''} help={label_5_Error || ''}>
                    {getFieldDecorator('label_5', { rules: [{ required: true, message: 'Porfavor ingrese ' + L_REGISTER.LABEL_5 }],})(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Ejemplo" />)}
                    </Item>

                    <Item label={L_REGISTER.LABEL_6} validateStatus={label_6_Error ? 'error' : ''} help={label_6_Error || ''}>
                    {getFieldDecorator('label_6', { rules: [{ required: true, message: 'Porfavor ingrese ' + L_REGISTER.LABEL_6 }],})(
                        <Select placeholder="Ejemplo">
                        {Sector.data.map((q,i) =>
                        <Option key={i} value={q}>{q}</Option>
                        )}
                        </Select>)}
                    </Item>

                    <Item label={L_REGISTER.LABEL_7} validateStatus={label_7_Error ? 'error' : ''} help={label_7_Error || ''}>
                    {getFieldDecorator('label_7', { rules: [{ required: true, message: 'Porfavor ingrese ' + L_REGISTER.LABEL_7 }],})(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Ejemplo" />)}
                    </Item>

                    <Item label={L_REGISTER.LABEL_8} validateStatus={label_8_Error ? 'error' : ''} help={label_8_Error || ''}>
                    {getFieldDecorator('label_8', { rules: [{ required: true, message: 'Porfavor ingrese ' + L_REGISTER.LABEL_8 }],})(
                    <Select placeholder="Ejemplo">
                    <Option value="little">Empresa pequeña</Option>
                    <Option value="medium">Empresa mediana</Option>
                    <Option value="large">Emprega grande</Option>
                    </Select>)}
                    </Item>
                    
                    <Item> 
                    <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                    Finalizar
                    </Button>
                    </Item>
                </Form>

            </Card>
        )
    }

}
const WrappedNormalLoginForm = Form.create()(Register);

const mapDispatchToPropsAction = dispatch => ({ 
    Company: value => dispatch(getRegister(value)),
    Token: value => dispatch(getToken(value))
  });

export default connect(null, mapDispatchToPropsAction)(WrappedNormalLoginForm); 