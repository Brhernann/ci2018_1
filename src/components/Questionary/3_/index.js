import React from 'react';
import 'antd/dist/antd.css';
import {Card, Input } from 'antd';
import { cardstyle } from '../../globalcss'
import { buttom_Back_next } from '../../';

const { TextArea } = Input;

class Selection extends React.Component {

    render() {

        return (
                <Card
                    title="¿Como considera usted la empresa saltala en aspecto empatico?"
                    bordered={false}
                    style={cardstyle}>
                    <TextArea rows={4} />
                    {buttom_Back_next('seleccion','gracias')}
                </Card>

        );
    }
}

export default Selection;
