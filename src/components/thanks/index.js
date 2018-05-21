import React, {Component} from 'react'
import 'antd/dist/antd.css';
import {Card, Progress} from 'antd';
import { END_MSSAGE } from '../../config/constants'
import {cardstyle} from '../globalcss'

class Goodbay extends Component {

    render() {

        const string = this.props.match.params.string;
        console.log(string); 

        return (
            <Card
                title={string === 'registrado' ? END_MSSAGE.FROM_REGISTER : string === 'respondido' ? END_MSSAGE.FROM_QUESTIONARY : '¿WHO ARE YOU?' }
                bordered={false}
                style={cardstyle}>
                <div>
                    <div><Progress type="circle" percent={100}/></div>
                    <br/>
                    <div>
                        <p>Gracias por  <strong style={{ color: '#1088e9' }}> dedicar </strong> un poco de tu tiempo.</p>
                    </div>
                </div>
            </Card>
        )
    }
}

export default Goodbay;
