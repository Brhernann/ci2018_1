import React, {Component} from 'react'
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {Card, Progress,  Button, Icon, Alert, notification} from 'antd';
import { END_MSSAGE } from '../../config/constants';
import {cardstyle} from '../globalcss';
import rand from 'random-key';

class Goodbay extends Component {

    render() {

        const string = this.props.match.params.string;
        console.log(string); 
        console.log(this.props.registerReducers.Token)
        const URL = 'http://indexcorporation.s3-website-us-west-2.amazonaws.com/bienvenido/'+rand.generateBase30(5);

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

                        {string === 'registrado' && <p>Haz generado el siguiente <b>Link</b> unico para ... </p>}

                        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column'}}>
                        {string === 'registrado' && <Alert message={URL} type="info" showIcon />}
                        <p>&nbsp;</p>
                        {string === 'registrado' &&
                            <CopyToClipboard text={URL} onCopy={() =>
                                notification.success({
                                message: 'Copiado',
                                description: '',
                              })}>
                                 <Button type="primary" icon="copy" size="small"/>
                            </CopyToClipboard>}
                        </div>

                    </div>
                </div>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return  state 
  }

export default connect(mapStateToProps, null)(Goodbay);
