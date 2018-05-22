import React from 'react';
import {Button, Icon, Tooltip, Alert, Card} from 'antd';
import {cardstyle} from './globalcss';
import {Link} from 'react-router-dom';
import {Flex} from 'react-flex-material';

export const buttom_Back_next = (back, next) => {

    return (
        <div style={{
                paddingTop: 50
            }}>
            <Button.Group size='large'>
                <Link to={back}>
                    <Tooltip placement="bottomRight" title={'Volver'}>
                        <Button
                            type="primary"
                            style={{
                                marginRight: 5
                            }}>
                            <Icon type="left"/>
                        </Button>
                    </Tooltip>

                </Link>
                <Link to={next}>
                    <Tooltip placement="bottomLeft" title={'Siguiente'}>
                        <Button
                            type="primary"
                            style={{
                                marginLeft: 5
                            }}>
                            <Icon type="right"/>
                        </Button>
                    </Tooltip>
                </Link>

            </Button.Group>
        </div>
    )
}

export const token_valid = () => {

    return (
        <Card title="Bienvenido usuario" bordered={false} style={cardstyle}>
            <div>
                <div>
                    <Alert
                        message="Link valido"
                        description="Bienvenido, gracias por participar con nosotros, continua respondiendo el siguiente cuestionario."
                        type="success"
                        showIcon="showIcon"/>
                </div>
                <br/>
                <div>
                <Link to='/cuestionario'>
                    <Button type="primary" style={{ marginTop: 30 }}>
                    Comenzar
                   </Button>
                    </Link>
                </div>
            </div>
        </Card>
    )

}

export const token_invalid = (descript) => {
    return (
        <Card title="Bienvenido usuario" bordered={false} style={cardstyle}>
            <div>
                <div>
                    <Alert
                        message="Link invalido"
                        description={descript}
                        type="error"
                        showIcon="showIcon"/>
                </div>
                <br/>
                <div>
                    <p>Gracias por <strong style={{ color: '#1088e9'}}> dedicar </strong> un poco de tu tiempo.</p>
                </div>
            </div>
        </Card>
    )
}
