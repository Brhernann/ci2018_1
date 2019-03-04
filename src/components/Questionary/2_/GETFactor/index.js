import React, {Component} from 'react';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import {
    Card,
    Radio,
    Tooltip,
    Icon,
    Form,
    Button
} from 'antd';
import {Booleano, QuestionaryActive, CollapseActive} from '../../../../actions/collapseControl';
import FactorJSON from '../../../../json/factors.json';
import {cardstyle} from '../../../globalcss';
import {Content, Fullcontent} from './css';
import {Factor, AllTheAnswer} from '../../../../actions/Questionary';

const RadioGroup = Radio.Group;
const Item = Form.Item;

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

    componentWillReceiveProps(nextProps) {
        const {firstArr, secondArr} = this
            .state
            this
            .Addfactortojson(
                firstArr,
                secondArr,
                nextProps.CollapseReducers.CollapseActive
            )
    }

    async componentDidMount() {
        await this.splitInHalf();
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        });
    }

    SaveQuestion(values) {

        let All = this.props.companyReducers.AllTheAnswer;
        let active = parseInt(this.props.CollapseReducers.CollapseActive[0], 10);
        let name = this
            .props
            .companyReducers
            .company_selected[active]
            .name;
        let id_enterprise = this
            .props.companyReducers
            .company_selected[active]
            .id

        let factors = Object
            .values(values)
            .map((value, index) => {
                return {
                    Factor: 'label_' + (index + 1),
                    Answer: value
                }
            });

        let data = {
            "Name": name,
            "ID": id_enterprise,
            "Index": active,
            "Data": factors
        }

        All
            .Companys
            .push(data)

        this
            .props
            .onBooleanChanged(true);
        this
            .props
            .onQuestionChanged(active);
        this
            .props
            .onAllTheAnswerChanged(All)
        this
            .props
            .onCollapseChanged([])
    }

    async splitInHalf(CollapseActive) { //Divide Los factor para poder ponerlos con flex

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

        ///////////////////////// bien ahora pregunto agrego en el caso y y guardo en el caso

        await this.Addfactortojson(
            firstArr,
            secondArr,
            this.props.CollapseReducers.CollapseActive
        );

        this
            .props
            .form
            .validateFields();
    }

    Addfactortojson(firstArr, secondArr, CollapseActive) { //agrega factores guardados en value al json

        const factor_selected = this.props.companyReducers.factor_selected;
        const QuestionaryActive = this.props.CollapseReducers.QuestionaryActive;

        let values = Object
            .values(factor_selected)
            .map((value, index) => {
                return {
                    name: 'label_' + (index + 1),
                    value: value,
                    index: index + 1
                }
            });

        let arr1 = values.filter(item => item.index < 10)
        let arr2 = values.filter(item => item.index > 9)

        if (Object.keys(factor_selected).length !== 0 && parseInt(CollapseActive[0], 10) === QuestionaryActive) {

            arr1.map((q, i) => firstArr[i].value = q.value);
            arr2.map((q, i) => secondArr[i].value = q.value);
            this.setStateAsync({firstArr, secondArr})
        } else {

            arr1.map((q, i) => firstArr[i].value = '');
            arr2.map((q, i) => secondArr[i].value = '');
            this.setStateAsync({firstArr, secondArr})
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this
            .props
            .form
            .validateFields((err, values) => {
                if (!err) {

                    this.SaveQuestion(values);

                }
            });
    }

    render() {

        const {firstArr, secondArr} = this.state;
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;

        return (
            <Card title={FactorJSON.title} bordered={false} className={cardstyle} bodyStyle={{padding:0}}>
                <Form layout='horizontal' onSubmit={this.handleSubmit}>
                    <Fullcontent>
                        <Content>
                            {
                                firstArr.map(
                                    (q, i) => <div key={i}>
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
                                                        <RadioGroup size='small' name="radiogroup">
                                                            <Radio value={1}>1</Radio>
                                                            <Radio value={2}>2</Radio>
                                                            <Radio value={3}>3</Radio>
                                                            <Radio value={4}>4</Radio>
                                                            <Radio value={5}>5</Radio>
                                                            <Radio value={6}>6</Radio>
                                                            <Radio value={7}>7</Radio>
                                                            <Radio value={8}>No sabe/No contesta</Radio>
                                                        </RadioGroup>
                                                    )
                                                }
                                            </Item>
                                        </div>
                                    </div>
                                )
                            }
                        </Content>

                        <Content>
                            {/* 2B Recorrer la wea creada y generar div con title tooltip y radiogroup */}
                            {
                                secondArr.map(
                                    (q, i) => <div key={i}>
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
                                                            <Radio value={8}>No sabe/No contesta</Radio>
                                                        </RadioGroup>
                                                    )
                                                }
                                            </Item>
                                        </div>
                                    </div>
                                )
                            }
                        </Content>

                    </Fullcontent>
                    <div
                        className={{
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
                                Terminar
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
    onCollapseChanged: value => dispatch(CollapseActive(value)),
    onAllTheAnswerChanged: value => dispatch(AllTheAnswer(value))
});

export default connect(mapStateToProps, mapDispatchToPropsAction)(
    WrappedNormalLoginForm
);