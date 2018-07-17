import React from 'react';
import 'antd/dist/antd.css';
import { Card, Button, Carousel } from 'antd';
import { Link } from 'react-router-dom';
import pic from '../../images/Inicio.png';
import { cardstyle } from '../globalcss';
import { VISION, MISION, WELCOME_MESSAGE, EMPATIA } from '../../constants';
import { Div1, Div2, Div3, DivContent, DivContent2, Divh3, Divh4, Divh42 } from './style';
import './style.css';
import ReactHtmlParser from 'react-html-parser';

class Inicio extends React.Component {
    render() {
        return (

            <div>
                <body className='Inicio '>
                    <Link to='/' className='Botton'>
                        <Button type="primary" style={{ marginTop: 30 }}>
                            Comenzar
                   </Button>
                    </Link>
                </body>

            </div>



        );
    }
}

export default Inicio;
