import React from 'react';
import 'antd/dist/antd.css';
import {Card, Radio} from 'antd';
import {cardstyle} from '../../../globalcss'
import {content, contentItem} from './css';
import {buttom_Back_next} from '../../../';

const RadioGroup = Radio.Group;

class Selection extends React.Component {

    render() {

        return (
            <Card
                title="Seleccione de menor a mayor cual es la que mas representa a la empresa"
                bordered={false}
                style={cardstyle}>

                <div style={content}>
                    <div style={contentItem}>
                        <div>
                            <h3>Sáltala</h3>
                        </div>
                        <div>
                            <RadioGroup name="radiogroup" defaultValue={1}>
                                <Radio value={1}>A</Radio>
                                <Radio value={2}>B</Radio>
                                <Radio value={3}>C</Radio>
                                <Radio value={4}>D</Radio>
                            </RadioGroup>
                        </div>
                    </div>
                    <div style={contentItem}>
                        <div>
                            <h3>Facebook</h3>
                        </div>
                        <div>
                            <RadioGroup name="radiogroup" defaultValue={1}>
                                <Radio value={1}>A</Radio>
                                <Radio value={2}>B</Radio>
                                <Radio value={3}>C</Radio>
                                <Radio value={4}>D</Radio>
                            </RadioGroup>
                        </div>
                    </div>
                    <div style={contentItem}>
                        <div>
                            <h3>Google</h3>
                        </div>
                        <div>
                            <RadioGroup name="radiogroup" defaultValue={1}>
                                <Radio value={1}>A</Radio>
                                <Radio value={2}>B</Radio>
                                <Radio value={3}>C</Radio>
                                <Radio value={4}>D</Radio>
                            </RadioGroup>
                        </div>
                    </div>
                    <div style={contentItem}>
                        <div>
                            <h3>Apple</h3>
                        </div>
                        <div>
                            <RadioGroup name="radiogroup" defaultValue={1}>
                                <Radio value={1}>A</Radio>
                                <Radio value={2}>B</Radio>
                                <Radio value={3}>C</Radio>
                                <Radio value={4}>D</Radio>
                            </RadioGroup>
                        </div>
                    </div>
                    <div style={contentItem}>
                        <div>
                            <h3>Index Corporate</h3>
                        </div>
                        <div>
                            <RadioGroup name="radiogroup" defaultValue={1}>
                                <Radio value={1}>A</Radio>
                                <Radio value={2}>B</Radio>
                                <Radio value={3}>C</Radio>
                                <Radio value={4}>D</Radio>
                            </RadioGroup>
                        </div>
                    </div>
                </div>
                {buttom_Back_next('cuestionario', 'pregunta')}
            </Card>

        );
    }
}

export default Selection;
