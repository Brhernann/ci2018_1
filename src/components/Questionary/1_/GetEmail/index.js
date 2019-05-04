import React from "react";
import "antd/dist/antd.css";
import { Select, Button, Card, Input } from "antd";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { cardstyle } from "../../../globalcss";
import { AllTheAnswer } from ".././../../../actions/Questionary";

const Option = Select.Option;

class GETMail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      btnactive: true,
      mymail: ""
    };
  }

  handleChange(value) {
    this.setState({ btnactive: false, mymail: value.key });
  }

  handleClick() {
    let all = this.props.companyReducers.AllTheAnswer;
    all.User = this.state.mymail;
    this.props.setEmail(all);
    this.setState({ redirect: true });
  }

  onChange = e => {
    console.log(e);
  };

  render() {
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
        <div>
          <p> Introdusca el nombre de la empresa al cual pertence.</p>
        </div>
        <div>
          <Input
            style={{ width: "60%" }}
            placeholder="Empresa"
            allowClear
            onChange={this.onChange}
          />
        </div>
        <br />
        <div>
          <p> Introdusca el cargo que ocupa.</p>
        </div>
        <div>
          <Input
            style={{ width: "60%" }}
            placeholder="Cargo dentro de la empresa"
            allowClear
            onChange={this.onChange}
          />
        </div>
        <br />
        <div>
          <p>seleccione el sector de actividad al cual pertenece su empresa.</p>
        </div>
        <div>
          <Select
            showSearch
            style={{ width: "60%" }}
            labelInValue
            placeholder="Sector de actividad "
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

        <div>
          <Button
            type="primary"
            style={{ marginTop: 10 }}
            onClick={this.handleClick.bind(this)}
            disabled={this.state.btnactive}
          >
            Continuar
          </Button>
        </div>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return { companyReducers: state.companyReducers };
};

const mapDispatchToPropsAction = dispatch => ({
  setEmail: value => dispatch(AllTheAnswer(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToPropsAction
)(GETMail);
