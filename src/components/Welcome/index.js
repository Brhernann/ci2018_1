import React from 'react';
import 'antd/dist/antd.css';
import { Card, Button, Carousel } from 'antd';
import { Link } from 'react-router-dom';
import { cardstyle } from '../globalcss';
import { VISION, MISION, WELCOME_MESSAGE, EMPATIA } from '../../config/constants';
import './style.css';
import ReactHtmlParser from 'react-html-parser';


class Welcome extends React.Component {
    render() {

        return (
            <Card
                title={WELCOME_MESSAGE.FROM_REGISTER}
                bordered={false}
                style={cardstyle}>
                <Carousel >
                    <div className='div1'>
                        <h3 className='title'>{VISION.TITLE}
                        </h3>
                        <h4 className='slide'>{ReactHtmlParser(VISION.RESUMEN)}
                        </h4>
                        <br />
                    </div>
                    <div className='div2'>
                        <h3 className='title'>{MISION.TITLE}</h3>
                        <h4 className='slide'>{ReactHtmlParser(MISION.RESUMEN)}
                        </h4>
                    </div>
                    <div className='div3'>
                        <h3 className='title'>{EMPATIA.TITLE}</h3>
                        <h4 className='slide'>{ReactHtmlParser(EMPATIA.RESUMEN)}
                        </h4>
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
