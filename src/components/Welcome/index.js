import React from 'react';
import 'antd/dist/antd.css';
import { Card, Button, Carousel } from 'antd';
import { Link } from 'react-router-dom';
import { cardstyle } from '../globalcss';
import { VISION, MISION, WELCOME_MESSAGE, EMPATIA } from '../../config/constants';
import { Div1, Div2, Div3, DivContent,DivContent2, Divh3, Divh4, Divh42 } from './style'
import './styles.css';
import ReactHtmlParser from 'react-html-parser';

class Welcome extends React.Component {
    render() {

        return (
            <Card
                title={WELCOME_MESSAGE.FROM_REGISTER}
                bordered={false}
                style={cardstyle}>
                <Carousel >

                    <Div1>

                    <DivContent>
                    <Divh3> {VISION.TITLE} </Divh3>
                    <Divh4> {ReactHtmlParser(VISION.RESUMEN)} </Divh4>
                    </DivContent>

                    </Div1>

                    <Div2>
                    <DivContent2>
                    <Divh3> {MISION.TITLE} </Divh3>
                    <Divh42> {ReactHtmlParser(MISION.RESUMEN)} </Divh42>
                    </DivContent2>
                    </Div2>

                    <Div3>
                    <DivContent>
                    <Divh3> {EMPATIA.TITLE} </Divh3>
                    <Divh4> {ReactHtmlParser(EMPATIA.RESUMEN)} </Divh4>
                    </DivContent>
                    </Div3>

                </Carousel>
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
