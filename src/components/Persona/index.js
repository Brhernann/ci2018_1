import React, { Component } from "react";
import { Form, Input, Button, Select, Card, Icon, message } from "antd";
import { Redirect } from "react-router";
import { connect } from "react-redux";

import { FirstChild, FormContent } from "./css";
import { cardstyle } from "../globalcss";
import { L_REGISTER } from "../../constants";

import { getRegisterPerson, getToken ,getRegisterAutoEvaluation,getRegisterAutoEvaluationID, 
        getRegisterNaturalPersonID} from "../../actions/Register";
import fetchSector from "../../actions/FetchSector";
import InsertNaturalP from "../../API/InsertNatural_person";
import Insert_Auto_Evaluation from "../../API/Insert_Auto_Evaluation";
import GetMailNaturalP from "../../API/getMailPerson";

import POSITION from "../../json/position.json";
import "./style.css";
const Option = Select.Option;
const Item = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
class Persona extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      tokenGenerated: "",
      isFetching: true,
      sectors: []
    };
  }

  componentWillReceiveProps(NextProps) {
    this.setStateAsync({
      isFetching: NextProps.GetSector.isFetching,
      sectors: NextProps.GetSector.data.data
    });
  }
  componentDidMount() {
    this.props.form.validateFields();
    this.props.FetchSector();
  }
  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  handleSubmit = async e => {
    e.preventDefault();
    await this.props.form.validateFields((err, values) => {
      if (!err) {
        GetMailNaturalP(values.label_13)
          .then(res => {
            if (res.data.success) {
              message.error("Este correo ya participó en una evaluación");
            } else {
              InsertNaturalP(values)
                .then((res => {
                  this.props.Company({ person: values, status: "isPerson" });
                  this.setState({ redirect: true });
                  this.props.Natural_Person_ID({id:res.data.id});
                })) 
                .catch(err => console.log(err));

              Insert_Auto_Evaluation(values).then(res => {
              this.props.Auto_Company({
                name: values.label_4,
                id: "0000"
              });
              this.props.Auto_CompanyID({id:res.data.id});
          })
          .catch(
            err => console.log("ERR: ", err),
          );
            }
          })
          .catch(err => console.log("67890", err));
      }
    });
  };

  handleConfirmEmail(value) {
    console.log(value);
  }

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;

    const label_12_Error = isFieldTouched("label_12") && getFieldError("label_12");
    const label_5_Error = isFieldTouched("label_5") && getFieldError("label_5");
    const label_11_Error = isFieldTouched("label_11") && getFieldError("label_11");

    if (this.state.redirect) {
      return <Redirect push to={"bienvenido/nuevo_usuario"} />;
    }
    const label_13_Error = isFieldTouched("label_13") && getFieldError("label_13");

    const label_4_Error = isFieldTouched("label_4") && getFieldError("label_4");
    return (
      <Card
        title="Bienvenido, te invitamos a registrar tus datos para responder la encuesta."
        bordered={false}
        style={cardstyle}
      >
        <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
          <FormContent>
            <FirstChild>
              <Item
                label={L_REGISTER.LABEL_12}
                validateStatus={label_12_Error ? "error" : ""}
                help={label_12_Error || ""}
              >
                {getFieldDecorator("label_12", {
                  rules: [
                    {
                      required: true,
                      message: "Porfavor ingrese " + L_REGISTER.LABEL_12
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Ejemplo"
                  />
                )}
              </Item>
            </FirstChild>

            <FirstChild>
              <Item
                label={L_REGISTER.LABEL_13}
                validateStatus={label_13_Error ? "error" : ""}
                help={label_13_Error || ""}
              >
                {getFieldDecorator("label_13", {
                  rules: [
                    {
                      type: "email",
                      message: "Porfavor Ingrese un correo valido"
                    },
                    {
                      required: true,
                      message: "Porfavor ingrese " + L_REGISTER.LABEL_13
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Ejemplo"
                  />
                )}
              </Item>
            </FirstChild>

            <FirstChild>
              <Item
                label={L_REGISTER.LABEL_11}
                validateStatus={label_11_Error ? "error" : ""}
                help={label_11_Error || ""}
              >
                {getFieldDecorator("label_11", {
                  rules: [
                    {
                      required: true,
                      message: "Porfavor ingrese " + L_REGISTER.LABEL_11
                    }
                  ]
                })(
                  <Select placeholder="Ejemplo">
                    {POSITION.map((q, i) => (
                      <Option key={i} value={q}>
                        {q}
                      </Option>
                    ))}
                  </Select>
                )}
              </Item>
            </FirstChild>

            <FirstChild>
              <Item
                label={L_REGISTER.LABEL_5}
                validateStatus={label_5_Error ? "error" : ""}
                help={label_5_Error || ""}
              >
                {getFieldDecorator("label_5", {
                  rules: [
                    {
                      required: true,
                      message: "Porfavor ingrese " + L_REGISTER.LABEL_5
                    }
                  ]
                })(
                  <Select placeholder="Ejemplo">
                    {this.state.isFetching
                      ? console.log("cargando")
                      : this.state.sectors.map((q, i) => (
                          <Option key={i} value={q.ID}>
                            {q.Name}
                          </Option>
                        ))}
                  </Select>
                )}
              </Item>
            </FirstChild>

            <FirstChild>
              <Item
                label={L_REGISTER.LABEL_4}
                validateStatus={label_4_Error ? "error" : ""}
                help={label_4_Error || ""}
              >
                {getFieldDecorator("label_4", {
                  rules: [
                    {
                      required: true,
                      message: "Porfavor ingrese " + L_REGISTER.LABEL_4
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Ejemplo"
                  />
                )}
              </Item>
            </FirstChild>

            <FirstChild>
              <Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={hasErrors(getFieldsError())}
                >
                  Finalizar
                </Button>
              </Item>
            </FirstChild>
          </FormContent>
        </Form>
      </Card>
    );
  }
}
const WrappedNormalLoginForm = Form.create()(Persona);

const mapStateToProps = state => {
  return { GetSector: state.FetchSector };
};

const mapDispatchToPropsAction = dispatch => ({
  Company: value => dispatch(getRegisterPerson(value)),
  Auto_Company: value => dispatch(getRegisterAutoEvaluation(value)),
  Auto_CompanyID: value => dispatch(getRegisterAutoEvaluationID(value)),
  Natural_Person_ID: value => dispatch(getRegisterNaturalPersonID(value)),
  Token: value => dispatch(getToken(value)),
  FetchSector: value => dispatch(fetchSector(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToPropsAction
)(WrappedNormalLoginForm);
