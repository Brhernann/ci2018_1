import React, { Component } from "react";
import { Form, Input, Button, Select, Card, Icon } from "antd";
import { Redirect } from "react-router";
import { connect } from "react-redux";

import { FirstChild, FormContent } from "./css";
import { cardstyle } from "../globalcss";
import { L_REGISTER } from "../../constants";

import { getRegisterPerson, getToken } from "../../actions/Register";
import fetchSector from "../../actions/FetchSector";
import InsertNaturalP from "../../API/InsertNatural_person";
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
        InsertNaturalP(values)
          .then(() => {
            this.props.Company({ person: values, status: "isPerson" });
            this.setState({ redirect: true });
          })
          .catch(err => console.log(err));
      }
    });
  };

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;

    const label_1_Error = isFieldTouched("label_1") && getFieldError("label_1");
    const label_5_Error = isFieldTouched("label_5") && getFieldError("label_5");
    const label_11_Error =
      isFieldTouched("label_11") && getFieldError("label_11");

    if (this.state.redirect) {
      return <Redirect push to={"bienvenido/nuevo_usuario"} />;
    }

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
                label={L_REGISTER.LABEL_1}
                validateStatus={label_1_Error ? "error" : ""}
                help={label_1_Error || ""}
              >
                {getFieldDecorator("label_1", {
                  rules: [
                    {
                      required: true,
                      message: "Porfavor ingrese " + L_REGISTER.LABEL_1
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
  Token: value => dispatch(getToken(value)),
  FetchSector: value => dispatch(fetchSector(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToPropsAction
)(WrappedNormalLoginForm);
