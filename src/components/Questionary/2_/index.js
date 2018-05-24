import React from 'react';
import 'antd/dist/antd.css';
import {Card, Radio, Tooltip,Icon} from 'antd';
import {cardstyle} from '../../globalcss';
// import { createStore } from 'redux';
import Factor from '../../../config/constants/factors.json';
import {content, contentItem} from './css';
import {buttom_Back_next} from '../../';

const RadioGroup = Radio.Group;

// const store = createStore(() => {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const action = value => ({ type: 'factory', value});

class Selection extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            secondArr : [],
            firstArr : []
        }
    }

    componentDidMount() {
        this.splitInHalf();
        console.log(this.props);
    }

    splitInHalf() {
        let firstArr = [];
        let secondArr = [];
        const arr10 = Factor.data.map(q => q.SubFactor.filter(item => item.index < 10));
        arr10.map(q => firstArr.push(...q));
        
        const arr17 = Factor.data.map(q => q.SubFactor.filter(item => item.index > 9));
        arr17.map(q => secondArr.push(...q));

        this.setState({firstArr, secondArr});
    }

    render() {

        const { firstArr, secondArr } = this.state;

        return (
            <Card title={Factor.title} bordered={false} style={cardstyle}>
                
            <div style={{display:'flex', justifyContent:'space-around'}}>
                <div style={content}>
                {firstArr.map((q,i) => 
                    <div key={i} style={contentItem}>
                        <div>
                            <Tooltip title={q.Description}>
                             <h3> - <Icon type="info-circle-o" style={{ fontSize: 16, color: '#339900' }}/> {q.name}</h3>
                            </Tooltip>
                        </div>
                        <div>
                            <RadioGroup name="radiogroup" defaultValue={4}>
                                <Radio value={1}>1</Radio>
                                <Radio value={2}>2</Radio>
                                <Radio value={3}>3</Radio>
                                <Radio value={4}>4</Radio>
                            </RadioGroup>
                        </div>
                    </div>
                )}
                </div>
                <div style={content}>
                {secondArr.map((q,i) => 
                    <div key={i} style={contentItem}>
                        <div>
                            <Tooltip title={q.Description}>
                                <h3> - <Icon type="info-circle-o" style={{ fontSize: 16, color: '#339900' }}/> {q.name}</h3>
                            </Tooltip>
                        </div>
                        <div>
                            <RadioGroup name="radiogroup" defaultValue={4}>
                                <Radio value={1}>1</Radio>
                                <Radio value={2}>2</Radio>
                                <Radio value={3}>3</Radio>
                                <Radio value={4}>4</Radio>
                            </RadioGroup>
                        </div>
                    </div>
                )}
                </div>
            </div>
            {buttom_Back_next('cuestionario', 'pregunta')}
            </Card>

        );
    }
}

export default Selection;
