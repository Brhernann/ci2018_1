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
        image: {background: `url('${Artboard}') no-repeat center center`},
        imageMobile: {background: `url('${Artboard2Phone}') no-repeat center center`},
        style: {left: '23%'},
        mobile: {left: '50%'}
	},
	{
		title: MISION.TITLE,
		description: ReactHtmlParser(MISION.RESUMEN),
        image: {background: `url('${Artboard2}') no-repeat center center`},
        imageMobile: {background: `url('${Artboard2Phone}') no-repeat center center`},
        style: {left: '80%'},
        mobile: {left: '50%'}
	},
	{
		title: EMPATIA.TITLE,
		description: ReactHtmlParser(EMPATIA.RESUMEN),
        image:  {background: `url('${Artboard3}') no-repeat center center`},
        imageMobile: {background: `url('${Artboard2Phone}') no-repeat center center`},
        style: {left: '50%'},
        mobile: {left: '50%'}
	}
];

class Welcome extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            mobile: false,
        }

    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }
    
    resize() {
        this.setState({mobile: window.innerWidth <= 760});
    }

    render() {

        const { mobile } = this.state;

        return (
            <Card
                title={WELCOME_MESSAGE.FROM_REGISTER}
                bordered={false}
                style={cardstyle}>

                        <Slider className="slider-wrapper" autoplay={3000}>
                        {content.map((item, index) => (
                        <div
                        key={index}
                        className="slider-content"
                        style={ mobile ? item.imageMobile : item.image }>
                        <div className="inner" style={mobile ? item.mobile : item.style}>
                        <h1>{item.title}</h1>
						<div>{item.description}</div>
                        </div>
                        </div>))}
                        </Slider>

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
