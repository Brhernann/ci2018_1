import React from 'react';
import { Button, Icon } from 'antd';
import { Link } from 'react-router-dom';

export const buttom_Back_next = () => {
    return(
        <Button.Group size='large'>
        <Link to='/'>
            <Button type="primary">
                <Icon type="left"/>Backward
            </Button>
        </Link>
        <Link to='/cuestionario'>
            <Button type="primary">
                Forward<Icon type="right"/>
            </Button>
        </Link>
        </Button.Group> 
    )
}