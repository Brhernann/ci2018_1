import React from 'react';
import 'antd/dist/antd.css';
import {Card, Input, Button, Form} from 'antd';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {contentButtom} from './css';
import {cardstyle, separatorLeft} from '../../globalcss';
import {getEmails, getRegister} from '../../../actions/Register';
import InsertMail_surveyed from '../../../API/InsertMail_surveyed'

const {TextArea} = Input;
const Item = Form.Item;

function hasErrors(fieldsError) {
    return Object
        .keys(fieldsError)
        .some(field => fieldsError[field]);
}

class GETQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            MailError: false,
            TheMailError: '',
            maxemail: false
        }
    }

    componentDidMount() {
        this
            .props
            .form
            .validateFields();
    }

    handleSubmit = (e) => {

        let yeah = false;
        let value = {};

        e.preventDefault();
        this
            .props
            .form
            .validateFields((err, values) => {
                !err && (yeah = true);
                !err && (value = values);
            });

        yeah && (this.validateEmail(value));
    }

    validateEmail(value) {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        let emailtrim = value
            .label_1
            .replace(/ /g, '');
        let email = emailtrim.split(',');
        let badmail = [];

        for (let mail of email) {
            if (!re.test(mail)) 
                badmail.push(mail);
            }
        
        let Noempty = badmail.filter((n) => n !== ""), bad = Noempty.join(", ");
        Noempty.length !== 0 ? this.setState({TheMailError: bad, MailError: true}): this.setState({MailError: false})

        let success = email.filter((n) => n !== "");
        success.length > 10 ? this.setState({maxemail: true}) : this.setState({maxemail: false});

        if (Noempty.length === 0 && success.length <= 10) {
            let ID = this.props.registerReducers;

            for (let mail of success) {
                InsertMail_surveyed({Mail: mail, ID: ID})
                    .then(res => {
                        console.log(res)
                        this.props.getEmails(success);
                        this.props.resetRegister({id:'nones'})
                        this.setState({redirect: true});
                    }).catch(err => console.log(err))
                }
        };

    }

    render() {

        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        const label_1_Error = isFieldTouched('label_1') && getFieldError('label_1');

        if (this.state.redirect) {
            return <Redirect push="push" to="/gracias/registrado"/>;
        }

        return (
            <Card title="Corporate Index" bordered={false} style={cardstyle}>
                <div>
                    <p>Para una buena evaluacion y transparencia es necesario agregar los correos de
                        los funcionarios que participarán en este proceso. (Ingresar correos separados
                        por una coma "," )
                    </p>
                </div>

                <Form
                    layout='horizontal'
                    onSubmit={this
                        .handleSubmit
                        .bind(this)}>
                    <Item
                        validateStatus={label_1_Error
                            ? 'error'
                            : ''}
                        help={label_1_Error || ''}>
                        {
                            getFieldDecorator('label_1', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Porfavor ingrese Correos Electronicos separados por una coma'
                                    }
                                ]
                            })(<TextArea rows={4}/>)
                        }
                    </Item>
                    <span
                        style={{
                            color: '#f5222d'
                        }}>
                        {
                            this.state.MailError && (
                                'Los siguientes correos son Invalidos: ' + this.state.TheMailError
                            )
                        }
                        <br/> {this.state.maxemail && 'Puede ingresar como máximo, solo 10 correos electronicos'}
                    </span>
                    <Item>
                        <div style={contentButtom}>
                            <div style={separatorLeft}>
                                <Button htmlType="submit" disabled={hasErrors(getFieldsError())}>Finalizar Registro</Button>
                            </div>
                        </div>
                    </Item>
                </Form>
            </Card>

        );
    }
}

const WrappedNormalLoginForm = Form.create()(GETQuestion);

const mapStateToProps = state => {
    return {registerReducers: state.registerReducers.Register.id}
}

const mapDispatchToPropsAction = dispatch => ({
    getEmails: value => dispatch(getEmails(value)),
    resetRegister: value => dispatch(getRegister(value))
});

export default connect(mapStateToProps, mapDispatchToPropsAction)(
    WrappedNormalLoginForm
);
