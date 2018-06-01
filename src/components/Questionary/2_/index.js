import React from 'react';
import 'antd/dist/antd.css';
import {Card, Collapse} from 'antd';
import {cardstyle} from '../../globalcss';
import {content, contentItem} from './css'
import {connect} from 'react-redux';
import FactorJSON from '../../../json/factors.json';
import { Company } from '../../../actions/Questionary';
import { Booleano } from '../../../actions/booleanControl'
import GETFactor from './GETFactor';
import GETQuestion from './GETQuestion';

const Panel = Collapse.Panel;
class Selection extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            companys: []
        }

        console.log('GENERAL: ', props)
    }

    callback(key) {
        console.log(key);
    }

    render() {
        return (
            <Card title={FactorJSON.title} bordered={false} style={cardstyle}>
                <div style={content}>
                    <div style={contentItem}>
                        <Collapse defaultActiveKey={['0']} onChange={this.callback}>
                            {this
                                .props
                                .companyReducers
                                .map((q, i) => <Panel header={q.name} key={i}>
                                   {this.props.BooleanReducers ? <GETQuestion />: <GETFactor/> } 
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
        BooleanReducers: state.BooleanReducers.boolean
    }
}

const mapDispatchToPropsAction = dispatch => ({
    onCompanyChanged: value => dispatch(Company(value)),
    onBooleanChanged: value => dispatch(Booleano(value)) 
});

export default connect(mapStateToProps, mapDispatchToPropsAction)(Selection);
