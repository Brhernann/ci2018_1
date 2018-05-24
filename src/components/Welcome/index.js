import React from 'react';
import 'antd/dist/antd.css';
import {Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import { cardstyle } from '../globalcss'

class Welcome extends React.Component {
    render() {

        return (
                <Card
                    title="Encuesta empresarial"
                    bordered={false}
                    style={cardstyle}>
                    <Link to='/registro'>
                    <Button type="primary" style={{ marginTop: 30 }}>
                    Comenzar
                   </Button>
                    </Link>
                </Card>
        );
    }
}

export default Welcome;
