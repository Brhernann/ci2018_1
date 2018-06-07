import React from 'react';
import 'antd/dist/antd.css';
import {Card, Collapse} from 'antd';
import {cardstyle} from '../../globalcss';
import {content, contentItem} from './css'
import {connect} from 'react-redux';
import { Company } from '../../../actions/Questionary';
import { Booleano, CollapseActive, QuestionaryActive } from '../../../actions/collapseControl'
import GETFactor from './GETFactor';
import GETQuestion from './GETQuestion';

const Panel = Collapse.Panel;
class Selection extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            companys: [],
            activeKey: ['0']
        }
        this.callback = this
        .callback
        .bind(this);

    }
    
    callback(key) {

        if (key.length > 1) {
            key.shift()
            this.props.onCollapseChanged(key)
        } else if (key.length === 0) {
            this.props.onCollapseChanged(key)
        } else {
            this.props.onCollapseChanged(key)
        }
    }

    render() {

        let Booleano = this.props.CollapseReducers.Booleano;
        let CollapseActive = this.props.CollapseReducers.CollapseActive;
        let QuestionaryActive = this.props.CollapseReducers.QuestionaryActive;

        return (
            <Card title={'Bienvenido '} style={cardstyle}>
                <div style={content}>
                    <div style={contentItem}>
                        <Collapse  activeKey={CollapseActive} onChange={this.callback}>
                            {this
                                .props
                                .companyReducers
                                .map((q, i) => <Panel header={q.name} key={i}>
                                   {Booleano && QuestionaryActive === i ? <GETQuestion /> : <GETFactor/>} 
                                </Panel>)}
                        </Collapse>
                    </div>
                </div>
            </Card>

        );
    }
}

const mapStateToProps = state => {
    return {
        companyReducers: state.companyReducers.company_selected,
        CollapseReducers: state.CollapseReducers
    }
}

const mapDispatchToPropsAction = dispatch => ({
    onCompanyChanged: value => dispatch(Company(value)),
    onBooleanChanged: value => dispatch(Booleano(value)),
    onCollapseChanged: value => dispatch(CollapseActive(value)),
    onQuestionChanged: value => dispatch(QuestionaryActive(value))

});

export default connect(mapStateToProps, mapDispatchToPropsAction)(Selection);
