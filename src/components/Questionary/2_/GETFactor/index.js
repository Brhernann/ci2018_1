import React, {Component} from 'react';
import {
    Card,
    Radio,
    Tooltip,
    Icon,
    Form,
    Button
} from 'antd';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import {cardstyle} from '../../../globalcss';
import FactorJSON from '../../../../json/factors.json';
import {content, contentItem} from './css';
import {Factor} from '../../../../actions/Questionary'; 
import {Booleano} from '../../../../actions/booleanControl';

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

    componentDidMount() {
        this.splitInHalf();
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        });
    }

    async splitInHalf() {
        let firstArr = [];
        let secondArr = [];
        const arr10 = FactorJSON
            .data
            .map(q => q.SubFactor.filter(item => item.index < 10));

        arr10.map(q => firstArr.push(...q));

        const arr17 = FactorJSON
            .data
            .map(q => q.SubFactor.filter(item => item.index > 9));

        arr17.map(q => secondArr.push(...q));

        await this.setStateAsync({firstArr, secondArr});

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

                    this
                        .props
                        .onFactorChanged(values);
                    this
                        .props
                        .onBooleanChanged(true);
                }
            });
    }

    render() {

        const {firstArr, secondArr} = this.state;
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;

        // 1 Definodr label x cada wea creada

        return (
            <Card title={FactorJSON.title} bordered={false} style={cardstyle}>
                <Form layout='horizontal' onSubmit={this.handleSubmit}>
                    <div
                        style={{
                        display: 'flex',
                        justifyContent: 'space-around'
                    }}>

                        <div style={content}>
                            {/* 2A Recorrer la wea creada y generar div con title tooltip y radiogroup */}
                            {firstArr.map((q, i) => <div key={i} style={contentItem}>
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
                                        validateStatus={(isFieldTouched('label_' + i) && getFieldError('label_' + i))
                                        ? 'error' 
                                        : ''}
                                        help={(isFieldTouched('label_' + i) && getFieldError('label_' + i)) || ''}>

                                        {getFieldDecorator('label_' + i, {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: ' Porfavor seleccione una opción '
                                                }
                                            ]
                                        })(
                                            <RadioGroup initialValue={1} name="radiogroup">
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
                            </div>)
}
                        </div>

                        <div style={content}>
                            {/* 2B Recorrer la wea creada y generar div con title tooltip y radiogroup */}
                            {secondArr.map((q, i) => <div key={i} style={contentItem}>
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
                                        validateStatus={(isFieldTouched('label_' + 1 + i) && getFieldError('label_' + 1 + i))
                                        ? 'error'
                                        : ''}
                                        help={(isFieldTouched('label_' + 1 + i) && getFieldError('label_' + 1 + i)) || ''}>
                                        {getFieldDecorator('label_' + 1 + i, {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: ' Porfavor seleccione una opción '
                                                }
                                            ]
                                        })(
                                            <RadioGroup initialValue={1} name="radiogroup">
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
                            </div>)
}
                        </div>

                    </div>
                    <div style={{
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

const mapDispatchToPropsAction = dispatch => ({
    onFactorChanged: value => dispatch(Factor(value)),
    onBooleanChanged: value => dispatch(Booleano(value)) 
});

export default connect(null, mapDispatchToPropsAction)(WrappedNormalLoginForm);