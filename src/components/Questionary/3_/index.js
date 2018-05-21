import React from 'react';
import 'antd/dist/antd.css';
import {Card, Input, Button, Icon} from 'antd';
import { Link } from 'react-router-dom'
import { contentButtom } from './css';
import {cardstyle, separatorLeft, separatorRight} from '../../globalcss'

const {TextArea} = Input;

class Selection extends React.Component {

    render() {

        return (
            <Card
                title="¿Como considera usted la empresa saltala en aspecto empatico?"
                bordered={false}
                style={cardstyle}>
                <TextArea rows={4}/>
                <div style={contentButtom}>
                    <div style={separatorRight}>
                    <Link to='seleccion'>
                        <Button type="primary">
                            <Icon type="left"/>
                        </Button>
                    </Link>
                    </div>
                    <div style={separatorLeft}>
                    <Link to='gracias/respondido'>
                        <Button>Finalizar Encuesta</Button>
                    </Link>    
                    </div>
                </div>
            </Card>

        );
    }
}

export default Selection;
