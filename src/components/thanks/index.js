import React, {Component} from 'react'
import 'antd/dist/antd.css';
import {connect} from 'react-redux';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {
    Card,
    Progress,
    Button,
    Alert,
    notification,
    Form,
    Modal
} from 'antd';

import {END_MSSAGE, URLWEB} from '../../constants';
import {Redirect} from 'react-router';
import {cardstyle} from '../globalcss';

const confirm = Modal.confirm;

class Goodbay extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    showConfirm() {
        confirm({
          title: '¡Gracias!',
          content: '¿Deseas recibir los resultados finales de este estudio, antes de su publicación?',
          okText: 'si',
          cancelText: 'No',
          onOk() {
            return new Promise((resolve, reject) => {
              setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
            }).catch(() => console.log('Oops errors!'));
          },
          onCancel() {},
        });
      }
      
    handleSubmit = (e) => {
        e.preventDefault();
        this
            .props
            .form
            .validateFields((err, values) => {
                if (!err) {
                    console.log(values)
                    notification.success({message: 'Correo Guardado', description: ''})
                }
            });
    }

    render() {
        
        let string = 'none';
        if (this.props.match !== undefined) {
            string = this.props.match.params.string
        }

        let rand = this.props.registerReducers.Token.rand

        if(rand === '' && string === 'registrado'){
            return <Redirect push to="/No"/>
        }

        if(string === 'respondido'){
            this.showConfirm()
        }

        const MYURL = URLWEB+rand;

        return (
            <Card
                title={string === 'registrado'
                    ? END_MSSAGE.FROM_REGISTER
                    : string === 'respondido'
                        ? END_MSSAGE.FROM_QUESTIONARY
                        : string === 'none'
                            ? END_MSSAGE.FROM_ENDFACTOR
                            : '¿WHO ARE YOU?'}
                bordered={false}
                style={cardstyle}>

                <div>
                    <div><Progress type="circle" percent={100}/></div>
                    <br/>
                    <div>
                        {
                            string === 'registrado' && <p>Copie y pegue el siguiente link en un correo de invitación el cual usted debe enviar a los correos que ya inscribió para que contesten la encuesta desde este link.</p>
                        }

                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column'
                            }}>
                            {string === 'registrado' && <Alert message={MYURL} type="info" showIcon="showIcon"/>}
                            <p>&nbsp;</p>

                            {
                                string === 'registrado' && <CopyToClipboard
                                        text={MYURL}
                                        onCopy={() => notification.success({message: 'Copiado', description: ''})}>
                                        <Button type="primary" icon="copy" size="small"/>
                                    </CopyToClipboard>
                            }

                            {
                                 string === 'respondido' && <p>Muchas gracias por participar. </p>
                            }

                            {/* {
                                string === 'respondido' &&
                                <Checkbox onChange={this.onChange.bind(this)}>Deseo recibir información.</Checkbox>
                            } */}

                        </div>

                    </div>
                </div>
            </Card>
        )
    }
}

const WrappedNormalLoginForm = Form.create()(Goodbay);

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, null)(WrappedNormalLoginForm);
