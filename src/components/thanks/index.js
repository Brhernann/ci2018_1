import React, {Component} from 'react'
import 'antd/dist/antd.css';
import {connect} from 'react-redux';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {
    Card,
    Progress,
    Button,
    Alert,
    notification,
    Form,
    Input,
    Icon
} from 'antd';
import {END_MSSAGE} from '../../config/constants';
import {cardstyle} from '../globalcss';

const Item = Form.Item;

function hasErrors(fieldsError) {
    return Object
        .keys(fieldsError) 
        .some(field => fieldsError[field]);
}

class Goodbay extends Component {

    constructor(props) {
        super(props);
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

    handleSubmit = (e) => {
        e.preventDefault();
        this
            .props
            .form
            .validateFields((err, values) => {
                if (!err) {
                    console.log(values)
                    notification.success({message: 'Correo Guardado', description: ''})
                }
            });
    }

    render() {

        let string = 'none';
        if (this.props.match !== undefined) {
            string = this.props.match.params.string
        }
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;

        const label_1_Error = isFieldTouched('label_1') && getFieldError('label_1');

        let rand = this.props.registerReducers.Token.rand
        const URL = 'http://www.corporateindex.cl/EmpatiaCorporativa/bienvenido/' +
                rand;

        return (
            <Card
                title={string === 'registrado'
                    ? END_MSSAGE.FROM_REGISTER
                    : string === 'respondido'
                        ? END_MSSAGE.FROM_QUESTIONARY
                        : string === 'none'
                            ? END_MSSAGE.FROM_ENDFACTOR
                            : '¿WHO ARE YOU?'}
                bordered={false}
                style={cardstyle}>

                <div>
                    <div><Progress type="circle" percent={100}/></div>
                    <br/>
                    <div>
                        {
                            string === 'registrado' && <p>Copie y pegue en el portapapeles el siguiente link para responder la encuesta.</p>
                        }

                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column'
                            }}>
                            {string === 'registrado' && <Alert message={URL} type="info" showIcon="showIcon"/>}
                            <p>&nbsp;</p>

                            {
                                string === 'registrado' && <CopyToClipboard
                                        text={URL}
                                        onCopy={() => notification.success({message: 'Copiado', description: ''})}>
                                        <Button type="primary" icon="copy" size="small"/>
                                    </CopyToClipboard>
                            }

                            {
                                string === 'respondido' && <p>Si usted desea recibir los resultados finales de este estudio, antes de su publicación, indíquenos por favor, su correo electrónico</p>
                            }

                            {
                                string === 'respondido' && <Form layout='inline' onSubmit={this.handleSubmit}>
                                        <Item
                                            label=''
                                            validateStatus={label_1_Error
                                                ? 'error'
                                                : ''}
                                            help={label_1_Error || ''}>
                                            {
                                                getFieldDecorator('label_1', {
                                                    rules: [
                                                        {
                                                            required: true,
                                                            message: 'Correo inválido.',
                                                            type:'email'
                                                        }
                                                    ]
                                                })(
                                                    <Input
                                                        prefix={<Icon type = "mail" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
                                                        placeholder="sam@corpindex.com"/>
                                                )
                                            }
                                        </Item>
                                        <Item>
                                            <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                                                Guardar
                                            </Button>
                                        </Item>
                                    </Form>
                            }

                        </div>

                    </div>
                </div>
            </Card>
        )
    }
}

const WrappedNormalLoginForm = Form.create()(Goodbay);

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, null)(WrappedNormalLoginForm);
