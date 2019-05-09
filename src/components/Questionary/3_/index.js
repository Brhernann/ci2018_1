import React from "react";
import "antd/dist/antd.css";
import { Card, Input, Button, Icon, Form } from "antd";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { contentButtom } from "./css";
import { QUESTIONARY_3 } from "../../../constants";
import { cardstyle, separatorLeft, separatorRight } from "../../globalcss";
import { AllTheAnswer, resetCompany } from "../../../actions/Questionary";
import { resetCollapse } from "../../../actions/collapseControl";
import { resetRegister } from "../../../actions/Register";
import InsertAnswers_to_question from "../../../API/InsertAnswers_to_question";
import InsertEnterprise_Selected from "../../../API/InsertEnterprise_Selected";
import InsertVariablesSelected from "../../../API/InsertVariablesSelected";
import InsertRelationShip_Person from "../../../API/InsertRelationship_Person";
import InsertRelationship from "../../../API/InsertRelationship";

const { TextArea } = Input;
const Item = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class GETQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      redirectno: false,
      person: this.props.personReducers
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.form.validateFields();

    if (this.props.companyReducers.AllTheAnswer.Companys.length === 0) {
      this.setState({ redirectno: true });
    }
  }

  handleSubmit = e => {
    let yeah = false;
    let value = {};

    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      !err && (yeah = true);
      !err && (value = values);
    });

    yeah && this.noname(value);
  };

  async noname(value) {
    const { person } = this.state;

    let arr_relation = [
      {
        InsertEnterprise_Selected: [],
        InsertVariablesSelected: []
      }
    ];

    let all = await this.props.companyReducers.AllTheAnswer;
    all.FreeQuestion = Object.values(value)[0];

    await this.props.onOpenQuestionChanged(all);

    // _________________________OK
    await InsertAnswers_to_question(all.FreeQuestion)
      .then(res =>
        arr_relation.push({ InsertAnswers_to_question: res.data.id })
      )
      .catch(err => console.log(err));

    for (let element of all.Companys) {
      //  _________________________OK
      await InsertEnterprise_Selected({ name: element.Name, id: element.ID })
        .then(res =>
          arr_relation[0].InsertEnterprise_Selected.push({ id: res.data.id })
        )
        .catch(err => console.log(err));

      //  _________________________OK
      await InsertVariablesSelected(element.Data)
        .then(res =>
          arr_relation[0].InsertVariablesSelected.push({ id: res.data.id })
        )
        .catch(err => console.log(err));
    }

    for (let [
      index,
      element
    ] of arr_relation[0].InsertEnterprise_Selected.entries()) {
      if (person.status === "isPerson") {
        InsertRelationShip_Person({
          Enterprise_Selected_ID: element.id,
          Variables_Selected_ID:
            arr_relation[0].InsertVariablesSelected[index].id,
          Answer_To_Question_ID: arr_relation[1].InsertAnswers_to_question
        })
          .then(res =>
            arr_relation[0].InsertVariablesSelected.push({ id: res.data.id })
          )
          .catch(err => console.log(err));
      } else {
        await InsertRelationship({
          Mail_Surveyed_ID: this.props.companyReducers.AllTheAnswer.User,
          Enterprise_Selected_ID: element.id,
          Variables_Selected_ID:
            arr_relation[0].InsertVariablesSelected[index].id,
          Answer_To_Question_ID: arr_relation[1].InsertAnswers_to_question
        })
          .then(res =>
            arr_relation[0].InsertVariablesSelected.push({ id: res.data.id })
          )
          .catch(err => console.log(err));
      }
    }

    this.props.onResetCompanyChanged();
    this.props.onResetCollapseChanged();
    this.props.onResetRegisterChanged();
    this.setState({ redirect: true });
  }

  backtoFactor() {
    console.log(this.props.state);
  }

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;
    const label_1_Error = isFieldTouched("label_1") && getFieldError("label_1");

    if (this.state.redirect) {
      return <Redirect push to="/Gracias/respondido" />;
    }
    if (this.state.redirectno) {
      return <Redirect push to="/No" />;
    }

    return (
      <Card title="Corporate Index" bordered={false} style={cardstyle}>
        <div>
          <p>{QUESTIONARY_3.resumen}</p>
          <p>{QUESTIONARY_3.question}</p>
        </div>

        <Form layout="horizontal" onSubmit={this.handleSubmit}>
          <Item
            validateStatus={label_1_Error ? "error" : ""}
            help={label_1_Error || ""}
          >
            {getFieldDecorator("label_1", {
              rules: [
                {
                  required: true,
                  message: "Porfavor ingrese una respuesta"
                }
              ]
            })(<TextArea rows={4} />)}
          </Item>

          <p>{QUESTIONARY_3.resumen2}</p>
          <Item
            validateStatus={label_1_Error ? "error" : ""}
            help={label_1_Error || ""}
          >
            {getFieldDecorator("label_1", {
              rules: [
                {
                  required: true,
                  message: "Porfavor ingrese una respuesta"
                }
              ]
            })(<TextArea rows={4} />)}
          </Item>

          <Item>
            <div style={contentButtom}>
              <div style={separatorRight}>
                <Button type="primary" onClick={this.backtoFactor.bind(this)}>
                  <Icon type="left" />
                </Button>
              </div>
              <div style={separatorLeft}>
                <Button
                  htmlType="submit"
                  disabled={hasErrors(getFieldsError())}
                >
                  Finalizar Cuestionario
                </Button>
              </div>
            </div>
          </Item>
        </Form>
      </Card>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(GETQuestion);

const mapStateToProps = state => {
  return {
    CollapseReducers: state.CollapseReducers,
    companyReducers: state.companyReducers,
    state,
    personReducers: state.registerReducers.Register_Person
  };
};

const mapDispatchToPropsAction = dispatch => ({
  onOpenQuestionChanged: value => dispatch(AllTheAnswer(value)),
  onResetCompanyChanged: value => dispatch(resetCompany(value)),
  onResetCollapseChanged: value => dispatch(resetCollapse(value)),
  onResetRegisterChanged: value => dispatch(resetRegister(value))
});

export default connect( 
  mapStateToProps,
  mapDispatchToPropsAction
)(WrappedNormalLoginForm);
