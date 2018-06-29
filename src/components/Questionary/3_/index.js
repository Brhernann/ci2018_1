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
import InsertAnswers_to_question from '../../../API/InsertAnswers_to_question';
import InsertEnterprise_Selected from '../../../API/InsertEnterprise_Selected';
import InsertVariablesSelected from '../../../API/InsertVariablesSelected';
import InsertRelationship from '../../../API/InsertRelationship';

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

        let yeah = false;
        let value = {};

        e.preventDefault();
        this.props.form.validateFields((err, values) => {
                !err && (yeah = true);
                !err && (value = values);
            });

        yeah && (this.noname(value));
    }

    async noname(value) {

        let arr_relation = [{
            InsertEnterprise_Selected: [],
            InsertVariablesSelected: []
        }];

        let all = await this.props.companyReducers.AllTheAnswer;
        all.FreeQuestion = Object.values(value)[0];

        await this.props.onOpenQuestionChanged(all);

        // _________________________OK
        await InsertAnswers_to_question(all.FreeQuestion) 
        .then(res => arr_relation.push({InsertAnswers_to_question:res.data.id}))
        .catch(err => console.log(err));

        for (let element of all.Companys) {
        //  _________________________OK
        await InsertEnterprise_Selected(element.Name)
        .then(res => arr_relation[0].InsertEnterprise_Selected.push({id:res.data.id}))
        .catch(err => console.log(err));

        //  _________________________OK
        await InsertVariablesSelected(element.Data)
        .then(res => arr_relation[0].InsertVariablesSelected.push({id:res.data.id}))
        .catch(err => console.log(err));
        }

        for(let [index, element] of arr_relation[0].InsertEnterprise_Selected.entries())  {
            console.log(element.id);
            console.log(arr_relation[0].InsertVariablesSelected[index].id);
            console.log(arr_relation[1].InsertAnswers_to_question)
            //relationship here!
        };
        
        // this.props.onResetCompanyChanged();
        // this.props.onResetCollapseChanged();
        // this.props.onResetRegisterChanged();
        // thos.setState({redirect: true});
    }

    backtoFactor() {
        console.log(this.props.state)
    }

    render() {

        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        const label_1_Error = isFieldTouched('label_1') && getFieldError('label_1');
        if (this.state.redirect) {
            return <Redirect push to="/Gracias/respondido"/>
        }

        return (
            <Card title="Corporate Index" bordered={false} style={cardstyle}>
                <div>
                    <p>La Empatía Corporativa se considera el drivers de negocio asociado al
                        cumplimiento de los Objetivos de Desarrollo Sostenible decretados por la ONU en
                        el año 2015.</p>
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
    onResetCompanyChanged: value => dispatch(resetCompany(value)),
    onResetCollapseChanged: value => dispatch(resetCollapse(value)),
    onResetRegisterChanged: value => dispatch(resetRegister(value))

});

export default connect(mapStateToProps, mapDispatchToPropsAction)(
    WrappedNormalLoginForm
);
