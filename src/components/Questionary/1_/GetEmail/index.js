import React from "react";
import "antd/dist/antd.css";
import { Select, Button, Card, Input, Form} from "antd";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { cardstyle } from "../../../globalcss";
import { AllTheAnswer } from ".././../../../actions/Questionary";
import fetchSector from "../../../../actions/FetchSector";
import { getRegisterAutoEvaluation } from "../../../../actions/Register";
import Insert_Auto_Evaluation from "../../../../API/Insert_Auto_Evaluation";


const Option = Select.Option;
const Item = Form.Item;


class GETMail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      btnactive: true,
      mymail: "",
      enterpriseName: "",
      position: "",
      mySector : "",
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
              this.createToken(res.data.id);
              this.props.Company({ id: res.data.id });
            })
            .catch(err => console.log('El error po oe',err),console.log('this.props', this.props.Company)
            );
        }
      });
  }


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
    if (this.props.companyReducers.AllCompany.length === 0) {
      return <Redirect push to="/No" />;
    }

    if (this.state.redirect) {
      return <Redirect push to="/cuestionario" />;
    }
    console.log('props',this.props.form)
    return (
      <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
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
          <p>Seleccione el sector de actividad al cual pertenece su empresa.</p>
        </div>
        <div>
          <Select
            showSearch
            style={{ width: "60%" }}
            labelInValue
            placeholder="Sector de actividad "
            optionFilterProp="children"
            onChange={this.handleChange2.bind(this)}
            filterOption={(input, option) =>
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
          >
            {this.state.isFetching
                      ? console.log("cargando")
                      : this.state.sectors.map((q, i) => (
                          <Option key={i} value={q.ID}>
                            {q.Name}
                          </Option>
                        ))}
          </Select>
        </div>

        <div>
          <Item>
              <Button
                type="primary"
                style={{ marginTop: 10 }}
                htmlType="submit"
                onClick={this.handleClick.bind(this)}
                disabled={this.state.btnactive}
              >
                Continuar
              </Button>
          </Item>
        </div>
      </Card>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(GETMail);


const mapStateToProps = state => {
  return {
    companyReducers: state.companyReducers,
    GetSector: state.FetchSector 
  }
}

const mapDispatchToPropsAction = dispatch => ({
  Company: value => dispatch(getRegisterAutoEvaluation(value)),
  setEmail: value => dispatch(AllTheAnswer(value)),
  FetchSector: value => dispatch(fetchSector(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToPropsAction
)(WrappedNormalLoginForm);
