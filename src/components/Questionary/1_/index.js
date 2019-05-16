import React from "react";
import "antd/dist/antd.css";
import { Form, Card, Button, Select, Icon } from "antd";
import propTypes from "prop-types";
import { Redirect } from "react-router";
import { cardstyle } from "../../globalcss";
import { connect } from "react-redux";
import { FirstContent, FirstChild, Paragraph, FormContent } from "./css";
import { QUESTIONARY_1 } from "../../../constants";
import ReactHtmlParser from "react-html-parser";
import { Company } from "../../../actions/Questionary";

const Option = Select.Option;
const Item = Form.Item;

class Questionary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      options: [],
      label_count: ["label_1", "label_2"],
      btnactive: true,
      Enterprise_selected: []
    };
  }

  handleClick() {
    const { Enterprise_selected } = this.state;

    let autoCompanys = this.props.getRegisterAutoEvaluation;

    let companys = Enterprise_selected.map(q => {
      return { name: q.label, id: q.id_enterprise };
    });

    companys.push(autoCompanys);
    //here
    this.props.Company(companys);
    this.setState({ redirect: true });
  }

  handleChange(value) {
    if (value !== undefined) {
      const { Enterprise_selected } = this.state;
      let key = parseInt(value.key.split("_")[1], 10);
      let id_enterprise = parseInt(value.key.split("_")[2], 10);
      let label = value.label;

      for (let [i, element] of Enterprise_selected.entries()) {
        element.key === key && Enterprise_selected.splice(i, 1);
      }

      Enterprise_selected.push({ key, label, id_enterprise });
      Enterprise_selected.length >= this.props.Subsector.length &&
        this.setState({ btnactive: false });
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/Seleccion" />;
    }

    if (this.props.Subsector.length === 0) {
      return <Redirect push to="/No" />;
    }

    return (
      <Card title={QUESTIONARY_1.title} bordered={false} style={cardstyle}>
        <FirstContent>
          <FirstChild>
            <Paragraph>
              <Icon
                type="info-circle-o"
                style={{ fontSize: 16, color: "#339900" }}
              />{" "}
              {QUESTIONARY_1.subtitle}
            </Paragraph>

            <Paragraph style={{ color: "black" }}>
              {ReactHtmlParser(QUESTIONARY_1.resumen)}
            </Paragraph>
          </FirstChild>
        </FirstContent>

        <FirstContent>
          <FirstChild>
            <Paragraph style={{ color: "black" }}>
              {ReactHtmlParser(QUESTIONARY_1.question)}
            </Paragraph>
          </FirstChild>
        </FirstContent>

        {this.props.Subsector.map((q, i) => (
          <FormContent key={i}>
            <FirstChild>
              <Item label={q.Name}>
                <Select
                  placeholder="Seleccione una empresa"
                  style={{ width: "100%" }}
                  labelInValue
                  onChange={this.handleChange.bind(this)}
                >
                  {q.enterprise.map((a, s) => (
                    <Option key={s} value={s + "_" + i + "_" + a.ID}>
                      {a.Alias}
                    </Option>
                  ))}
                </Select>
              </Item>
            </FirstChild>
          </FormContent>
        ))}

        <FirstContent>
          <Item>
            <Button
              type="primary"
              style={{ marginLeft: 5 }}
              onClick={this.handleClick.bind(this)}
              disabled={this.state.btnactive}
            >
              Terminar
            </Button>
          </Item>
        </FirstContent>
      </Card>
    );
  }
}

Questionary.propTypes = {
  Company: propTypes.func.isRequired
};

const thisQuestionary = Form.create()(Questionary);

const mapStateToProps = state => {
  return {
    Subsector: state.companyReducers.AllCompany,
    getRegisterAutoEvaluation: state.registerReducers.getRegisterAutoEvaluation
  };
};

const mapDispatchToPropsAction = dispatch => ({
  Company: value => dispatch(Company(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToPropsAction
)(thisQuestionary);
