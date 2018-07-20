import React from 'react';
import {Button, Icon, Tooltip, Alert, Card} from 'antd';
import {cardstyle} from './globalcss';
import {Link} from 'react-router-dom';

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
                            style={{ marginRight: 5 }}>
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

export const buttom_with_function = (back, next) => {
    return (
        <div style={{
                paddingTop: 50
            }}>
            <Button.Group size='large'>
                <Tooltip placement="bottomRight" title={'Volver'}>
                    <Button
                        type="primary"
                        style={{ marginRight: 5 }}
                        onClick={back}>
                        <Icon type="left"/>
                    </Button>
                </Tooltip>

                <Tooltip placement="bottomLeft" title={'Siguiente'}>
                    <Button
                        type="primary"
                        style={{ marginLeft: 5 }}
                        onClick={next}>
                        <Icon type="right"/>
                    </Button>
                </Tooltip>

            </Button.Group>
        </div>
    )
}

export const token_valid = () => {

    return (
        <Card title="Bienvenido a Corporate Index" bordered={false} style={cardstyle}>
            <div>
                <div>
                    <Alert
                        message="Link válido"
                        description="Gracias por participar con nosotros, continúa respondiendo el siguiente cuestionario."
                        type="success"
                        showIcon="showIcon"/>
                </div>
                <br/>
                <div>
                </div>
                <div>
                <Link to='/ValidarEmail'>
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
