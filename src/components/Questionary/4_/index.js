import React, {Component} from 'react'
import 'antd/dist/antd.css';
import {Card, Progress} from 'antd';
import {cardstyle} from '../../globalcss'

class Goodbay extends Component {

    render() {
        return (
            <Card
                title="Haz finalizado exitosamente la encuesta."
                bordered={false}
                style={cardstyle}>
                <div>
                    <div><Progress type="circle" percent={100}/></div>
                    <br/>
                    <div>
                        <p>Gracias por  <strong style={{ color: '#1088e9' }}> Dedicar </strong> un poco de tu tiempo.</p>
                    </div>
                </div>
            </Card>
        )
    }
}

export default Goodbay;
