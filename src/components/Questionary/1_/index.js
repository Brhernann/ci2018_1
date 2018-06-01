import React from 'react';
import 'antd/dist/antd.css';
import {
  Form,
  Cascader,
  Card,
  Button,
  Tooltip,
  Icon
} from 'antd';
import propTypes from 'prop-types';
import { Redirect } from 'react-router';
import { cardstyle } from '../../globalcss';
import { connect } from 'react-redux';
import { firstContent, p, formContent } from './css'; 
import { QUESTIONARY_1 }  from '../../../config/constants';
import ReactHtmlParser from 'react-html-parser';
import { Company } from '../../../actions/Questionary';

const Item = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Questionary extends React.Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            redirect: false,     
            options:[{
                value: 'Industria Manufacturera',
                label: 'Industria Manufacturera',
                children: [{
                  value: 'Celulosa',
                  label: 'Celulosa',
                }],
              }, {
                value: 'jiangsu',
                label: 'Jiangsu',
                children: [{
                  value: 'nanjing',
                  label: 'Nanjing',
                }],
              }]
        }

    }
    
  componentDidMount() {
      this.props.form.validateFields();
  }

  handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {

          let arr = Object.values(JSON.parse(JSON.stringify(values)))
          let companysWithUndefined = arr.map(q =>{ return {name: q[0]+'/'+q[1]}});
          let companys = companysWithUndefined.filter(x => x.name !== 'undefined/undefined');
           this.props.Company(companys);      
           this.setState({redirect: true});
        }
      });
  }

    render() {

      const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
      const label_1_Error = isFieldTouched('label_1') && getFieldError('label_1');
      const label_2_Error = isFieldTouched('label_2') && getFieldError('label_2');
      const label_3_Error = isFieldTouched('label_3') && getFieldError('label_3');
      const label_4_Error = isFieldTouched('label_4') && getFieldError('label_4');
      const label_5_Error = isFieldTouched('label_5') && getFieldError('label_5');
      
      if (this.state.redirect) {
        return <Redirect push to="/Seleccion" />
      }
    return (

      <Card title={QUESTIONARY_1.title} bordered={false} style={cardstyle}>
      <div style={firstContent}>
          <div style={firstContent.firstChild}>
              <h3 style={p}>
                  <Icon type="info-circle-o" style={{ fontSize: 16, color: '#339900' } }/>
                  {QUESTIONARY_1.subtitle}</h3>
              <p style={p}>
                  {ReactHtmlParser(QUESTIONARY_1.resumen)}
              </p> 
          </div>
      </div>
      
      <div style={firstContent}>
          <div style={firstContent.firstChild}>
              <p style={p}>
                  {ReactHtmlParser(QUESTIONARY_1.question)}
              </p>
          </div>
      </div>

        {/* FORM */}

      <div style={formContent}>

        <Form layout='horizontal' onSubmit={this.handleSubmit}>
        <Item label='ajskajs' validateStatus={label_1_Error ? 'error' : ''} help={label_1_Error || ''}>
        {getFieldDecorator('label_1', { rules: [{ type: 'array', required: true, message: 'Seleccione almenos una empresa por sector' }],})(
          <Cascader options={this.state.options} style={{marginBottom:'10px', width:'50%'}} placeholder="Seleccione una empresa por sector"/>
        )}
        </Item>
        <Item label='' validateStatus={label_2_Error ? 'error' : ''} help={label_2_Error || ''}>
        {getFieldDecorator('label_2', { rules: [{ type: 'array', required: false, }],})(
          <Cascader options={this.state.options} style={{marginBottom:'10px', width:'50%'}} placeholder="Seleccione una empresa por sector"/>
        )}
        </Item>
        <Item label='' validateStatus={label_3_Error ? 'error' : ''} help={label_3_Error || ''}>
        {getFieldDecorator('label_3', { rules: [{ type: 'array', required: false, }],})(
          <Cascader options={this.state.options} style={{marginBottom:'10px', width:'50%'}} placeholder="Seleccione una empresa por sector"/>
        )}
        </Item>
        <Item label='' validateStatus={label_4_Error ? 'error' : ''} help={label_4_Error || ''}>
        {getFieldDecorator('label_4', { rules: [{ type: 'array', required: false, }],})(
          <Cascader options={this.state.options} style={{marginBottom:'10px', width:'50%'}} placeholder="Seleccione una empresa por sector"/>
        )}
        </Item>
        <Item label='' validateStatus={label_5_Error ? 'error' : ''} help={label_5_Error || ''}>
        {getFieldDecorator('label_5', { rules: [{ type: 'array', required: false, }],})(
          <Cascader options={this.state.options} style={{marginBottom:'10px', width:'50%'}} placeholder="Seleccione una empresa por sector"/>
        )}
        </Item>    
        <Item style={{paddingTop: 50}}>
            <Button.Group size='large'>
            <div>
            <Tooltip placement="bottomLeft" title={'Volver'}>
                        <Button
                            type="primary"
                            style={{ marginRight: 5}}>
                            <Icon type="left"/>
                        </Button>
                    </Tooltip>
                    <Tooltip placement="bottomRight" title={'Continuar'}>
                        <Button
                            type="primary"
                            style={{ marginRight: 5 }}
                            htmlType="submit" 
                            disabled={hasErrors(getFieldsError())}>
                            <Icon type="right"/>
                        </Button>
                    </Tooltip>
            </div>
            </Button.Group>
        </Item>

        </Form>

        </div>

      </Card>

        );
    }
}

Questionary.propTypes = {
  Company: propTypes.func.isRequired,
}

const thisQuestionary = Form.create()(Questionary);

const mapDispatchToPropsAction = dispatch => ({ 
  Company: value => dispatch(Company(value))
});

export default connect(null, mapDispatchToPropsAction)(thisQuestionary);
