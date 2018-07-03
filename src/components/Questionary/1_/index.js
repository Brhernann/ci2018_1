import React from 'react';
import 'antd/dist/antd.css';
import {
    Form,
    Card,
    Button,
    Select,
    Icon
} from 'antd';
import propTypes from 'prop-types';
import {Redirect} from 'react-router';
import {cardstyle} from '../../globalcss';
import {connect} from 'react-redux';
import {FirstContent, FirstChild, p, FormContent} from './css';
import {QUESTIONARY_1} from '../../../constants';
import ReactHtmlParser from 'react-html-parser';
import {Company} from '../../../actions/Questionary';

const Option = Select.Option;
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

            console.log(this.props.Subsector)

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this
            .props
            .form
            .validateFields((err, values) => {
                if (!err) {
                    console.log(values)

                    let arr = Object.values(JSON.parse(JSON.stringify(values)))
                    let companysWithUndefined = arr.map(q => {
                        return {
                            name: q
                        }
                    });

                    this.props.Company(companysWithUndefined);
                    this.setState({redirect: true});
                }
            });
    }

    render() {

        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;

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

                <Form layout='horizontal' onSubmit={this.handleSubmit}>
                            {
                                this.props.Subsector.map((q, i) => 
                                <FormContent key={i}>
                                        <FirstChild>
                                            <Item label={q.Name} validateStatus={( isFieldTouched('label_' + (i + 1)) && getFieldError('label_' + (i + 1))) ? 'error' : ''}
                                                  help={(isFieldTouched('label_' + ( i + 1)) && getFieldError('label_' + (i + 1))) || ''}>

                                                {
                                                    getFieldDecorator('label_' + ( i + 1), {
                                                        rules: [{message: ' Porfavor seleccione una opción '}]
                                                    })(
                                                    <Select
                                                        placeholder="Seleccione una empresa">
                                                        {q.enterprise.map((a,s) =>
                                                               <Option key={s} value={a.Alias}>{a.Alias}</Option>
                                                        )}
                                                      
                                                    </Select>,
                                                    )
                                                }
                                            </Item>
                                        </FirstChild>
                                </FormContent>
                                )
                            }

                    <div className={{paddingTop: 50 }}>
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

Questionary.propTypes = {
    Company: propTypes.func.isRequired
}

const thisQuestionary = Form.create()(Questionary);

const mapStateToProps = state => {
    return {Subsector: state.companyReducers.AllCompany}
}

const mapDispatchToPropsAction = dispatch => ({
    Company: value => dispatch(Company(value))
});

export default connect(mapStateToProps, mapDispatchToPropsAction)(thisQuestionary);
