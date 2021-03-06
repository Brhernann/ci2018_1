import React from "react";
import "antd/dist/antd.css";
import { Select, Button, Card, Input, Form, Icon, message } from "antd";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { cardstyle } from "../../../globalcss";
import { AllTheAnswer } from ".././../../../actions/Questionary";
import fetchSector from "../../../../actions/FetchSector";
import { getRegisterAutoEvaluation,getRegisterAutoEvaluationID} from "../../../../actions/Register";
import Insert_Auto_Evaluation from "../../../../API/Insert_Auto_Evaluation";
import { L_REGISTER } from "../../../../constants";
import { FirstChild, FormContent } from "../css";

const Option = Select.Option;
const Item = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class GETMail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      btnactive: true,
      mymail: "",
      enterpriseName: "",
      position: "",
      mySector: "",
      isFetching: true,
      sectors: [],
      subsector: [],
      idFake: "0000",
      AutoEvaluationInsertID:""
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

  handleChange(value) {
    this.setState({ btnactive: false, mymail: value.key });
  }
  handleChange2(value) {
    this.setState({ btnactive: false, mySector: value.key });
  }
  handleSubmit = async e => {
    await this.props.form.validateFields((err, values) => {
      if (!err) {
        Insert_Auto_Evaluation(values)
          .then(res => {
            this.props.Auto_Company({
              name: values.label_14,
              id: "0000"
            });
            this.props.Auto_CompanyID({id:res.data.id});
          })
          .catch(
            err => console.log("ERR: ", err),
          );
      }
    });
  };

  handleClick() {
    let all = this.props.companyReducers.AllTheAnswer;
    all.User = this.state.mymail;
    this.props.setEmail(all);
    this.setState({ redirect: true });
    this.handleSubmit();
  }

  onChange = e => {
    console.log(e);
  };

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;
    const { idFake } = this.state;

    const label_5_Error = isFieldTouched("label_5") && getFieldError("label_5");
    const label_11_Error =
      isFieldTouched("label_11") && getFieldError("label_11");
    const label_14_Error = isFieldTouched("label_14") && getFieldError("label_14");

    if (this.props.companyReducers.AllCompany.length === 0) {
      return <Redirect push to="/No" />;
    }

    if (this.state.redirect) {
      return <Redirect push to="/cuestionario" />;
    }
    return (
      <Card title="Corporate Index" bordered={false} style={cardstyle}>
        <div>
          <p> seleccione su correo electronico.</p>
        </div>
        <div>
          <Select
            showSearch
            style={{ width: "60%" }}
            labelInValue
            placeholder="Correo Electronico"
            optionFilterProp="children"
            onChange={this.handleChange.bind(this)}
            filterOption={(input, option) =>
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
          >
            {this.props.companyReducers.AllMails.map((q, i) => (
              <Option key={i} value={q.ID}>
                {q.Mail}
              </Option>
            ))}
          </Select>
        </div>
        <br />
        <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
          <FormContent>
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
                  <Select
                    placeholder="Ejemplo"
                    onChange={this.handleChange2.bind(this)}
                  >
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
                label={L_REGISTER.LABEL_14}
                validateStatus={label_14_Error ? "error" : ""}
                help={label_14_Error || ""}
              >
                {getFieldDecorator("label_14", {
                  rules: [
                    {
                      required: true,
                      message: "Porfavor ingrese " + L_REGISTER.LABEL_14
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
                  style={{ marginTop: 10 }}
                  onClick={this.handleClick.bind(this)}
                  disabled={this.state.btnactive}
                >
                  Continuar
                </Button>
              </Item>
            </FirstChild>
          </FormContent>
        </Form>
      </Card>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(GETMail);

const mapStateToProps = state => {
  return {
    companyReducers: state.companyReducers,
    GetSector: state.FetchSector
  };
};

const mapDispatchToPropsAction = dispatch => ({
  Auto_Company: value => dispatch(getRegisterAutoEvaluation(value)),
  Auto_CompanyID: value => dispatch(getRegisterAutoEvaluationID(value)),
  setEmail: value => dispatch(AllTheAnswer(value)),
  FetchSector: value => dispatch(fetchSector(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToPropsAction
)(WrappedNormalLoginForm);
