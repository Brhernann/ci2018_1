import React from 'react';
import {Button, Icon, Tooltip} from 'antd';
import {Link} from 'react-router-dom';

export const buttom_Back_next = (back, next) => {

    return (
        <div style={{paddingTop: 50 }}>
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
