import React from 'react';
import 'antd/dist/antd.css';
import { Card, Button, Carousel } from 'antd';
import { Link } from 'react-router-dom';
import { cardstyle } from '../globalcss';
import { VISION, MISION } from '../../config/constants';
import { WELCOME_MESSAGE } from '../../config/constants';
import { EMPATIA } from '../../config/constants';
import ReactHtmlParser from 'react-html-parser';
import style from './style.css';

class Welcome extends React.Component {
    render() {

        return (
            <Card
                title={WELCOME_MESSAGE.FROM_REGISTER}
                bordered={false}
                style={cardstyle}>
                <Carousel autoplay>
                    <div>
                        <h3 className='title'>{VISION.TITLE}</h3>
                        <h4 className='slide'>{ReactHtmlParser(VISION.RESUMEN)}</h4>
                    </div>
                    <div>
                        <h3 className='title'>{MISION.TITLE}</h3>
                        <h4 className='slide'>{ReactHtmlParser(MISION.RESUMEN)}</h4>
                    </div>
                    <div>
                        <h3 className='title'>{EMPATIA.TITLE}</h3>
                        <h4 className='slide'>{ReactHtmlParser(EMPATIA.RESUMEN)} </h4>
                    </div>
                </Carousel>
                <p></p>
                <Link to='/registro'>
                    <Button type="primary" style={{ marginTop: 30 }}>
                        Comenzar
                   </Button>
                </Link>
            </Card >
        );
    }
}

export default Welcome;
