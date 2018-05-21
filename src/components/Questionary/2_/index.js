import React from 'react';
import 'antd/dist/antd.css';
import {Card, Radio, Breadcrumb, Tooltip} from 'antd';
import {cardstyle} from '../../globalcss'
import {content, contentItem} from './css';
import {buttom_Back_next} from '../../';

const RadioGroup = Radio.Group;

class Selection extends React.Component {

    render() {

        return (
            <Card
                title="indique si está muy de acuerdo (4) o nada de acuerdo (1) con los siguientes atributos de la empatía."
                bordered={false}
                style={cardstyle}>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <div style={content}>
                    <div style={contentItem}>
                        <div>
                        <Tooltip title="Conjunto de principios y valores que la empresa adhiere a sus políticas y normas internas y que forman parte de la estructura de la organización, se reflejan en su cultura y logra una mayor sintonía con la sociedad.">
                      
                        <h3>Comportamiento Ético</h3>
                        </Tooltip>
                        </div>
                        <div>
                            <RadioGroup name="radiogroup" defaultValue={1}>
                                <Radio value={1}>1</Radio>
                                <Radio value={2}>2</Radio>
                                <Radio value={3}>3</Radio>
                                <Radio value={4}>4</Radio>
                            </RadioGroup>
                        </div>
                    </div>º
                    <div style={contentItem}>
                        <div>
                            <h3>Desarrollo de la Filantropía</h3>
                        </div>
                        <div>
                            <RadioGroup name="radiogroup" defaultValue={1}>
                                <Radio value={1}>1</Radio>
                                <Radio value={2}>2</Radio>
                                <Radio value={3}>3</Radio>
                                <Radio value={4}>4</Radio>
                            </RadioGroup>
                        </div>
                    </div>
                    <div style={contentItem}>
                        <div>
                            <h3>Empatía corporativa</h3>
                        </div>
                        <div>
                            <RadioGroup name="radiogroup" defaultValue={1}>
                                <Radio value={1}>1</Radio>
                                <Radio value={2}>2</Radio>
                                <Radio value={3}>3</Radio>
                                <Radio value={4}>4</Radio>
                            </RadioGroup>
                        </div>
                    </div>
                    <div style={contentItem}>
                        <div>
                            <h3>Igualdad de género</h3>
                        </div>
                        <div>
                            <RadioGroup name="radiogroup" defaultValue={1}>
                                <Radio value={1}>1</Radio>
                                <Radio value={2}>2</Radio>
                                <Radio value={3}>3</Radio>
                                <Radio value={4}>4</Radio>
                            </RadioGroup>
                        </div>
                    </div>
                    <div style={contentItem}>
                        <div>
                            <h3>Liderazgo e Impacto Social</h3>
                        </div>
                        <div>
                            <RadioGroup name="radiogroup" defaultValue={1}>
                                <Radio value={1}>1</Radio>
                                <Radio value={2}>2</Radio>
                                <Radio value={3}>3</Radio>
                                <Radio value={4}>4</Radio>
                            </RadioGroup>
                        </div>
                    </div>
                </div>
                {/* SECOND */}
                <div style={content}>
                <div style={contentItem}>
                        <div>
                            <h3>Liderazgo en Sostenibilidad y medioambiente</h3>
                        </div>
                        <div>
                            <RadioGroup name="radiogroup" defaultValue={1}>
                                <Radio value={1}>1</Radio>
                                <Radio value={2}>2</Radio>
                                <Radio value={3}>3</Radio>
                                <Radio value={4}>4</Radio>
                            </RadioGroup>
                        </div>
                    </div>
                <div style={contentItem}>
                        <div>
                            <h3>Cultura Empresarial</h3>
                        </div>
                        <div>
                            <RadioGroup name="radiogroup" defaultValue={1}>
                                <Radio value={1}>1</Radio>
                                <Radio value={2}>2</Radio>
                                <Radio value={3}>3</Radio>
                                <Radio value={4}>4</Radio>
                            </RadioGroup>
                        </div>
                    </div>
                    <div style={contentItem}>
                        <div>
                            <h3>Desarro llo de la Marca</h3>
                        </div>
                        <div>
                            <RadioGroup name="radiogroup" defaultValue={1}>
                                <Radio value={1}>1</Radio>
                                <Radio value={2}>2</Radio>
                                <Radio value={3}>3</Radio>
                                <Radio value={4}>4</Radio>
                            </RadioGroup>
                        </div>
                    </div>
                    <div style={contentItem}>
                        <div>
                            <h3>Impacto de sus mensajes Públicos</h3>
                        </div>
                        <div>
                            <RadioGroup name="radiogroup" defaultValue={1}>
                                <Radio value={1}>1</Radio>
                                <Radio value={2}>2</Radio>
                                <Radio value={3}>3</Radio>
                                <Radio value={4}>4</Radio>
                            </RadioGroup>
                        </div>
                    </div>
                    <div style={contentItem}>
                        <div>
                            <h3>Shared Value Impacto Social</h3>
                        </div>
                        <div>
                            <RadioGroup name="radiogroup" defaultValue={1}>
                                <Radio value={1}>1</Radio>
                                <Radio value={2}>2</Radio>
                                <Radio value={3}>3</Radio>
                                <Radio value={4}>4</Radio>
                            </RadioGroup>
                        </div>
                    </div>
                    <div style={contentItem}>
                        <div>
                            <h3>Eficiencia de los Canales Comunicación</h3>
                        </div>
                        <div>
                            <RadioGroup name="radiogroup" defaultValue={1}>
                                <Radio value={1}>1</Radio>
                                <Radio value={2}>2</Radio>
                                <Radio value={3}>3</Radio>
                                <Radio value={4}>4</Radio>
                            </RadioGroup>
                        </div>
                    </div>
                </div>
                </div>
                {buttom_Back_next('cuestionario', 'pregunta')}
            </Card>

        );
    }
}

export default Selection;
