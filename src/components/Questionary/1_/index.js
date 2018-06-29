import React from 'react';
import 'antd/dist/antd.css';
import {
    Form,
    Cascader,
    Card,
    Button,
    Icon
} from 'antd';
import propTypes from 'prop-types';
import IGJSON from '../../../json/industryGroup.json';
import {Redirect} from 'react-router';
import {cardstyle} from '../../globalcss';
import {connect} from 'react-redux';
import {FirstContent, FirstChild, p, FormContent} from './css';
import {QUESTIONARY_1} from '../../../constants';
import ReactHtmlParser from 'react-html-parser';
import {Company} from '../../../actions/Questionary';

const Item = Form.Item;

function hasErrors(fieldsError) {
    return Object
        .keys(fieldsError)
        .some(field => fieldsError[field]);
}

class Questionary extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);

        this.state = {
            redirect: false,
            options: []
        }

    }

    componentDidMount() {
        this
            .props
            .form
            .validateFields();

        let cc = IGJSON.map(q => {
            let cc_a = q.Cluster.map(a => {
                let cc_b = a.Business.map(h => {
                    return {
                        value:h.name,
                        label:h.name,          
                    }
                })
                return cc_b;
            })
            return cc_a;
        })

        let please  = cc[0]

        let bb = IGJSON.map(q => q.Cluster.map((p,i) => {
          return {
            value:p.name,
            label:p.name,
            children: please[i]
          }
        }))
    
       console.log(bb)

        let aa = IGJSON.map((q,i) => {
          return {
            value:q.Sector,
            label:q.Sector,
            children:bb[i]
          }
        })

        this.setState({options: aa})

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this
            .props
            .form
            .validateFields((err, values) => {
                if (!err) {

                    let arr = Object.values(JSON.parse(JSON.stringify(values)))
                    let companysWithUndefined = arr.map(q => {
                        return {
                            name: q[0] + '/' + q[1] + '/' + q[2]
                        }
                    });

                    let companys = companysWithUndefined.filter(
                        x => x.name !== 'undefined/undefined/undefined'
                    );
                    this
                        .props
                        .Company(companys);
                    this.setState({redirect: true});
                }
            });
    }

    render() {

        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        const label_1_Error = isFieldTouched('label_1') && getFieldError('label_1');
        const label_2_Error = isFieldTouched('label_2') && getFieldError('label_2');
        const label_3_Error = isFieldTouched('label_3') && getFieldError('label_3');

        if (this.state.redirect) {
            return <Redirect push to="/Seleccion"/>
        }
        return (

            <Card title={QUESTIONARY_1.title} bordered={false} style={cardstyle}>
                <FirstContent>
                    <FirstChild>
                        <p style={p}>
                            <Icon
                                type="info-circle-o"
                                style={{
                                    fontSize: 16,
                                    color: '#339900'
                                }}/> {QUESTIONARY_1.subtitle}
                        </p>
                        <p style={p}>
                            {ReactHtmlParser(QUESTIONARY_1.resumen)}
                        </p>
                    </FirstChild>
                </FirstContent>

                <FirstContent>
                    <FirstChild>
                        <p style={p}>
                            {ReactHtmlParser(QUESTIONARY_1.question)}
                        </p>
                    </FirstChild>
                </FirstContent>

                {/* FORM */}

                <Form layout='horizontal' onSubmit={this.handleSubmit}>
                <FormContent>
                <FirstChild>
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
                                            type: 'array',
                                            required: true,
                                            message: 'Seleccione almenos una empresa por sector'
                                        }
                                    ]
                                })(

                                    <Cascader
                                    options={this.state.options}
                                    placeholder="Seleccione una empresa por sector"/>
                                
                                )
                            }
                        </Item>
                        </FirstChild>
                        <FirstChild>
                        <Item
                            label=''
                            validateStatus={label_2_Error
                                ? 'error'
                                : ''}
                            help={label_2_Error || ''}>
                            {
                                getFieldDecorator('label_2', {
                                    rules: [
                                        {
                                            type: 'array',
                                            required: false
                                        }
                                    ]
                                })(
                                    <Cascader
                                        options={this.state.options}
                                        placeholder="Seleccione una empresa por sector"/>
                                )
                            }
                        </Item>
                        </FirstChild>
                        <FirstChild>
                        <Item
                            label=''
                            validateStatus={label_3_Error
                                ? 'error'
                                : ''}
                            help={label_3_Error || ''}>
                            {
                                getFieldDecorator('label_3', {
                                    rules: [
                                        {
                                            type: 'array',
                                            required: false
                                        }
                                    ]
                                })(
                                    <Cascader
                                        options={this.state.options}
                                        placeholder="Seleccione una empresa por sector"/>
                                )
                            }
                        </Item>
                        </FirstChild>
                        <FirstChild>
                        <Item
                            style={{
                                paddingTop: 50
                            }}>

                                <div>
                                        <Button
                                            type="primary"
                                            style={{
                                                marginRight: 5
                                            }}
                                            htmlType="submit"
                                            disabled={hasErrors(getFieldsError())}>
                                           Continuar
                                        </Button>
                                </div>

                        </Item>
                        </FirstChild>
                        </FormContent>
                    </Form>

            </Card>

        );
    }
}

Questionary.propTypes = {
    Company: propTypes.func.isRequired
}

const thisQuestionary = Form.create()(Questionary);

const mapDispatchToPropsAction = dispatch => ({
    Company: value => dispatch(Company(value))
});

export default connect(null, mapDispatchToPropsAction)(thisQuestionary);
