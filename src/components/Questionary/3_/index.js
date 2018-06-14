import React from 'react';
import 'antd/dist/antd.css';
import {Card, Input, Button, Icon, Form} from 'antd';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {contentButtom} from './css';
import {cardstyle, separatorLeft, separatorRight} from '../../globalcss';
import {AllTheAnswer, resetCompany} from '../../../actions/Questionary';
import {resetCollapse} from '../../../actions/collapseControl';
import {resetRegister} from '../../../actions/Register';
import {Booleano} from '../../../actions/collapseControl';

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
            redirect: false
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

    handleSubmit = (e) => {

        e.preventDefault();
        this
            .props
            .form
            .validateFields((err, values) => {
                if (!err) {
                    //LIMPIAR PERSISTENCIA VOLVER TODO A ESTADO INICIAL!
                    let all = this.props.companyReducers.AllTheAnswer;
                    all.FreeQuestion = Object.values(values)[0];
                    this
                        .props
                        .onOpenQuestionChanged(all);

                    this.props.onResetCompanyChanged();
                    this.props.onResetCollapseChanged();
                    this.props.onResetRegisterChanged();
                    this.setState({redirect: true});

                }
            });
    }

    backtoFactor() {
        // this
        //     .props
        //     .onBooleanChanged(true);
        console.log(this.props.state)
    }

    render() {

        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        const label_1_Error = isFieldTouched('label_1') && getFieldError('label_1');
        if (this.state.redirect) {
            return <Redirect push={true} to="/Gracias/respondido"/>
        }

        return (
            <Card
                title="Corporate Index"
                bordered={false}
                style={cardstyle}>
                <div>
                    <p>La Empatía Corporativa se considera el drivers de negocio asociado al cumplimiento de los Objetivos de Desarrollo Sostenible decretados por la ONU en el año 2015.</p>
                    <p>¿Cómo considera usted que su empresa está gestionando los ODS a nivel interno?</p>
                </div>

                <Form layout='horizontal' onSubmit={this.handleSubmit}>
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
                                        message: 'Porfavor ingrese una respuesta'
                                    }
                                ]
                            })(<TextArea rows={4}/>)
                        }
                    </Item>

                    <Item>
                        <div style={contentButtom}>
                            <div style={separatorRight}>
                                <Button
                                    type="primary"
                                    onClick={this
                                        .backtoFactor
                                        .bind(this)}>
                                    <Icon type="left"/>
                                </Button>
                            </div>
                            <div style={separatorLeft}>
                                <Button htmlType="submit" disabled={hasErrors(getFieldsError())}>Finalizar Cuestionario</Button>
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
    return {CollapseReducers: state.CollapseReducers, companyReducers: state.companyReducers, state}
}

const mapDispatchToPropsAction = dispatch => ({
    onOpenQuestionChanged: value => dispatch(AllTheAnswer(value)),
    onBooleanChanged: value => dispatch(Booleano(value)),
    onResetCompanyChanged: value => dispatch(resetCompany(value)),
    onResetCollapseChanged: value => dispatch(resetCollapse(value)),
    onResetRegisterChanged: value => dispatch(resetRegister(value))

});

export default connect(mapStateToProps, mapDispatchToPropsAction)(
    WrappedNormalLoginForm
);
