import React from "react";
import "antd/dist/antd.css";
import { Card, Collapse, Icon, Button } from "antd";
import { cardstyle } from "../../globalcss";
import { content, contentItem } from "./css";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Company } from "../../../actions/Questionary";
import {
  Booleano,
  CollapseActive,
  QuestionaryActive
} from "../../../actions/collapseControl";
import GETFactor from "./GETFactor";
import Thanks from "../../thanks";

const Panel = Collapse.Panel;
class Selection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companys: [],
      activeKey: ["0"],
      redirect: false
    };
    this.callback = this.callback.bind(this);
  }

  componentDidMount() {
    console.log("PROOOOOOOPS:", this.props);
  }

  enterLoading = () => {
    this.setState({ redirect: true });
  };

  callback(key) {
    if (key.length > 1) {
      key.shift();
      this.props.onCollapseChanged(key);
    } else if (key.length === 0) {
      this.props.onCollapseChanged(key);
    } else {
      this.props.onCollapseChanged(key);
    }
  }

  render() {
    let Booleano = this.props.CollapseReducers.Booleano;
    let CollapseActive = this.props.CollapseReducers.CollapseActive;
    let Companys = this.props.AllTheAnswer.Companys;
    let answered = Companys.map(q => q.Index);

    if (Object.keys(this.props.company_selected).length === 0) {
      return <Redirect push to="/No" />;
    }

    if (this.state.redirect) {
      return <Redirect push to="/Pregunta" />;
    }

    return (
      <Card title={"Lo invitamos a evaluar esta empresa "} style={cardstyle}>
        <div className={content}>
          <div className={contentItem}>
            <Collapse activeKey={CollapseActive} onChange={this.callback}>
              {this.props.company_selected.map((q, i) => (
                <Panel
                  header={
                    Booleano && answered.includes(i) ? (
                      <Icon
                        style={{
                          color: "#5fdd9d"
                        }}
                        type="check"
                      />
                    ) : (
                      q.name
                    )
                  }
                  icon="retweet"
                  key={i}
                >
                  {Booleano && answered.includes(i) ? (
                    <Thanks />
                  ) : (
                    <GETFactor />
                  )}
                </Panel>
              ))}
            </Collapse>
          </div>
          <div className={contentItem}>
            <Button
              type="primary"
              style={{
                marginTop: "5%"
              }}
              disabled={Companys.length !== this.props.company_selected.length}
              onClick={this.enterLoading}
            >
              Continuar
            </Button>
          </div>
        </div>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    company_selected: state.companyReducers.company_selected,
    AllTheAnswer: state.companyReducers.AllTheAnswer,
    CollapseReducers: state.CollapseReducers,
    getRegisterAutoEvaluation: state.registerReducers.getRegisterAutoEvaluation
  };
};

const mapDispatchToPropsAction = dispatch => ({
  onCompanyChanged: value => dispatch(Company(value)),
  onBooleanChanged: value => dispatch(Booleano(value)),
  onCollapseChanged: value => dispatch(CollapseActive(value)),
  onQuestionChanged: value => dispatch(QuestionaryActive(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToPropsAction
)(Selection);
