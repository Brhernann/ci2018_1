import React from 'react';
import 'antd/dist/antd.css';
import {Card, Input, Button, Icon, Form} from 'antd';
import {connect} from 'react-redux';
import { contentButtom } from './css';
import {cardstyle, separatorLeft, separatorRight} from '../../../globalcss';
import {openQuestion} from '../../../../actions/Questionary';
import {Booleano} from '../../../../actions/collapseControl';

const {TextArea} = Input;
const Item = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class GETQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log(props)
    }

    componentDidMount() {
        this.props.form.validateFields();
    }

    handleSubmit = (e) => {

        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
              this
              .props
              .onOpenQuestionChanged(values);

          }
        });
    }

    backtoFactor(){
        this
        .props
        .onBooleanChanged(false);
    }

    render() {

        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const label_1_Error = isFieldTouched('label_1') && getFieldError('label_1');

        return (
            <Card
                title="¿Como considera usted la empresa Sáltala en aspecto empatico?"
                bordered={false}
                style={cardstyle}>

                <Form layout='horizontal' onSubmit={this.handleSubmit}>
                <Item validateStatus={label_1_Error ? 'error' : ''} help={label_1_Error || ''}>
                    {getFieldDecorator('label_1', { rules: [{ required: true, message: 'Porfavor ingrese una respuesta' }],})(
                <TextArea rows={4}/>)}
                </Item>

                <Item>
                <div style={contentButtom}>
                    <div style={separatorRight}>
                        <Button type="primary" onClick={this.backtoFactor.bind(this)}>
                            <Icon type="left"/>
                        </Button>
                    </div>
                    <div style={separatorLeft}>
                        <Button  htmlType="submit" disabled={hasErrors(getFieldsError())}>Finalizar Encuesta</Button>  
                    </div>
                </div>
                </Item>
                </Form>
            </Card>

        );
    }
}

const WrappedNormalLoginForm = Form.create()(GETQuestion);

const mapDispatchToPropsAction = dispatch => ({
    onOpenQuestionChanged: value => dispatch(openQuestion(value)),
    onBooleanChanged: value => dispatch(Booleano(value)) 
});

export default connect(null, mapDispatchToPropsAction)(WrappedNormalLoginForm);
