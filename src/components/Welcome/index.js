import React from 'react';
import 'antd/dist/antd.css';
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import { cardstyle } from '../globalcss';
import { VISION, MISION, WELCOME_MESSAGE, EMPATIA } from '../../constants';
import { Div1, Div2, Div3, DivContent, DivContent2, Divh3, Divh4, Divh42 } from './style'
import './styles.css';
import ReactHtmlParser from 'react-html-parser';
import Artboard from './pics/Artboard.png';
import ArtboardPhone from './pics/ArtboardPhone.png';
import Artboard2 from './pics/Artboard2.png';
import Artboard2Phone from './pics/Artboard2Phone.png';
import Artboard3 from './pics/Artboard3.png';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const content = [
	{
		title: VISION.TITLE,
		description: ReactHtmlParser(VISION.RESUMEN),
        image: Artboard,
        style: {left: '23%'}
	},
	{
		title: MISION.TITLE,
		description: ReactHtmlParser(MISION.RESUMEN),
        image: Artboard2,
        style: {left: '80%'}
	},
	{
		title: EMPATIA.TITLE,
		description: ReactHtmlParser(EMPATIA.RESUMEN),
        image: Artboard3,
        style: {left: '50%'}
	}
];

class Welcome extends React.Component {

    render() {

        return (
            <Card
                title={WELCOME_MESSAGE.FROM_REGISTER}
                bordered={false}
                style={cardstyle}>

                        <Slider className="slider-wrapper">
                        {content.map((item, index) => (
                        <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center` }}>
                        <div className="inner" style={item.style}>
                        <h1>{item.title}</h1>
						<div>{item.description}</div>
                        </div>
                        </div>))}
                        </Slider>

                {/* <Carousel>
                    <Div1> 
                        <DivContent>
                            <Divh3> {VISION.TITLE} </Divh3>
                            <Divh4> {ReactHtmlParser(VISION.RESUMEN)} </Divh4>
                        </DivContent>

                    </Div1>

                    <Div2 >
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

                </Carousel> */}


                <Link to='/registro'>
                    <Button type="primary" style={{ marginTop: 30 }}>
                        Comenzar
                   </Button>
                </Link>
            </Card>
        );
    }
}

export default Welcome;
