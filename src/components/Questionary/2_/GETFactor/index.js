import React, {Component} from 'react';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import {
    Card,
    Radio,
    Tooltip,
    Icon,
    Form,
    Button,
    Modal
} from 'antd';
import {Booleano, QuestionaryActive, CollapseActive} from '../../../../actions/collapseControl';
import FactorJSON from '../../../../json/factors.json';
import {INCOMPLETE_QUESTIONAY} from '../../../../config/constants'
import {cardstyle} from '../../../globalcss';
import {content, contentItem} from './css';
import {Factor} from '../../../../actions/Questionary';

const RadioGroup = Radio.Group;
const Item = Form.Item;
const confirm = Modal.confirm;

function hasErrors(fieldsError) {
    return Object
        .keys(fieldsError)
        .some(field => fieldsError[field]);
}

class GETFactor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            secondArr: [],
            firstArr: []
        }
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    async componentDidMount() {
        await this.splitInHalf();
    }

    componentDidUpdate() {
        console.log('a')
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        });
    }

    SaveQuestion(values) {
        this
            .props
            .onFactorChanged(values);
        this
            .props
            .onBooleanChanged(true);
        this
            .props
            .onQuestionChanged(parseInt(this.props.CollapseReducers.CollapseActive[0], 10));
    }

    async splitInHalf() { //Divide Los factor para poder ponerlos con flex

        const factor_selected = this.props.companyReducers.factor_selected;
        const CollapseActive = this.props.CollapseReducers.CollapseActive;
        const QuestionaryActive = this.props.CollapseReducers.QuestionaryActive;

        let firstArr = [],
            secondArr = [];

        /////////////////////////

        let arr10 = FactorJSON 
            .data
            .map(q => q.SubFactor.filter(item => item.index < 10));

        arr10.map(q => firstArr.push(...q)); 

        /////////////////////////

        let arr17 = FactorJSON 
            .data
            .map(q => q.SubFactor.filter(item => item.index > 9));

        arr17.map(q => secondArr.push(...q)); // push para borrar arreglos vacios que quedaron post filter inside mapeo

        /////////////////////////

        if (Object.keys(factor_selected).length !== 0 
        && parseInt(CollapseActive[0], 10) === QuestionaryActive) {

            let values = await Object
                .values(factor_selected)
                .map((value, index) => {
                    return {
                        name: 'label_' + (
                            index + 1
                        ),
                        value: value,
                        index: index + 1
                    }
                });
            
            let arr1 = values.filter(item => item.index < 10)
            let arr2 = values.filter(item => item.index > 9)

            arr1.map((q, i) => firstArr[i].value = q.value);
            arr2.map((q, i) => secondArr[i].value = q.value );

        } 
            await this.setStateAsync({firstArr, secondArr});
        
        ///////////////////////

        this
            .props
            .form
            .validateFields()
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this
            .props
            .form
            .validateFields((err, values) => {
                if (!err) {

                    if (this.props.CollapseReducers.QuestionaryActive !== null) {

                        let props = this.props,
                            thiss = this,
                            QuestionaryActive = [
                                this
                                    .props
                                    .CollapseReducers
                                    .QuestionaryActive
                                    .toString()
                            ];

                        confirm({
                            title: INCOMPLETE_QUESTIONAY.title,
                            content: INCOMPLETE_QUESTIONAY.content,
                            okText: INCOMPLETE_QUESTIONAY.okButtom,
                            cancelText: INCOMPLETE_QUESTIONAY.cancelButtom,
                            onOk() {
                                return new Promise((resolve, reject) => {
                                    setTimeout(
                                        Math.random() > 0.5
                                            ? resolve
                                            : reject,
                                        1000
                                    );
                                    thiss.SaveQuestion(values);
                                }).catch(() => console.log('Oops errors!'));
                            },
                            onCancel() {
                                props.onCollapseChanged(QuestionaryActive);
                            }
                        });

                    } else {
                        this.SaveQuestion(values);
                    }
                }
            });
    }

    render() {

        const {firstArr, secondArr} = this.state;
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;

        return (
            <Card title={FactorJSON.title} bordered={false} style={cardstyle}>
                <Form layout='horizontal' onSubmit={this.handleSubmit}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-around'
                        }}>

                        <div style={content}>
                            {
                                firstArr.map(
                                    (q, i) => <div key={i} style={contentItem}>
                                        <div>
                                            <Tooltip title={q.Description}>
                                                <h3>
                                                    <Icon
                                                        type="info-circle-o"
                                                        style={{
                                                            fontSize: 16,
                                                            color: '#339900'
                                                        }}/> {' ' + q.name}
                                                </h3>
                                            </Tooltip>
                                        </div>
                                        <div>
                                            <Item
                                                validateStatus={(
                                                    isFieldTouched('label_' + (
                                                    i + 1
                                                )) && getFieldError('label_' + (
                                                    i + 1
                                                )))
                                                    ? 'error'
                                                    : ''}
                                                help={(isFieldTouched('label_' + (
                                                    i + 1
                                                )) && getFieldError('label_' + (
                                                    i + 1
                                                ))) || ''}>

                                                {
                                                    getFieldDecorator('label_' + (
                                                        i + 1
                                                    ), {
                                                        initialValue: q.value,
                                                        rules: [
                                                            {
                                                                required: true,
                                                                message: ' Porfavor seleccione una opción '
                                                            }
                                                        ]
                                                    })(
                                                        <RadioGroup name="radiogroup">
                                                            <Radio value={1}>1</Radio>
                                                            <Radio value={2}>2</Radio>
                                                            <Radio value={3}>3</Radio>
                                                            <Radio value={4}>4</Radio>
                                                            <Radio value={5}>5</Radio>
                                                            <Radio value={6}>6</Radio>
                                                            <Radio value={7}>7</Radio>
                                                        </RadioGroup>
                                                    )
                                                }
                                            </Item>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                        <div style={content}>
                            {/* 2B Recorrer la wea creada y generar div con title tooltip y radiogroup */}
                            {
                                secondArr.map(
                                    (q, i) => <div key={i} style={contentItem}>
                                        <div>
                                            <Tooltip title={q.Description}>
                                                <h3>
                                                    <Icon
                                                        type="info-circle-o"
                                                        style={{
                                                            fontSize: 16,
                                                            color: '#339900'
                                                        }}/> {' ' + q.name}</h3>
                                            </Tooltip>
                                        </div>
                                        <div>
                                            <Item
                                                validateStatus={(
                                                    isFieldTouched('label_' + 1 + i) && getFieldError('label_' + 1 + i))
                                                    ? 'error'
                                                    : ''}
                                                help={(isFieldTouched('label_' + 1 + i) && getFieldError('label_' + 1 + i)) || ''}>
                                                {
                                                    getFieldDecorator('label_' + 1 + i, {
                                                        initialValue: q.value,
                                                        rules: [
                                                            {
                                                                required: true,
                                                                message: ' Porfavor seleccione una opción '
                                                            }
                                                        ]
                                                    })(
                                                        <RadioGroup name="radiogroup">
                                                            <Radio value={1}>1</Radio>
                                                            <Radio value={2}>2</Radio>
                                                            <Radio value={3}>3</Radio>
                                                            <Radio value={4}>4</Radio>
                                                            <Radio value={5}>5</Radio>
                                                            <Radio value={6}>6</Radio>
                                                            <Radio value={7}>7</Radio>
                                                        </RadioGroup>
                                                    )
                                                }
                                            </Item>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                    </div>
                    <div
                        style={{
                            paddingTop: 50
                        }}>
                        <Item>
                            <Button
                                type="primary"
                                style={{
                                    marginLeft: 5
                                }}
                                htmlType="submit"
                                disabled={hasErrors(getFieldsError())}>
                                Siguiente
                            </Button>
                        </Item>
                    </div>
                </Form>
            </Card>

        );
    }
}

const WrappedNormalLoginForm = Form.create()(GETFactor);

const mapStateToProps = state => {
    return {CollapseReducers: state.CollapseReducers, companyReducers: state.companyReducers}
}

const mapDispatchToPropsAction = dispatch => ({
    onFactorChanged: value => dispatch(Factor(value)),
    onBooleanChanged: value => dispatch(Booleano(value)),
    onQuestionChanged: value => dispatch(QuestionaryActive(value)),
    onCollapseChanged: value => dispatch(CollapseActive(value))
});

export default connect(mapStateToProps, mapDispatchToPropsAction)(
    WrappedNormalLoginForm
);