import React, {Component} from 'react';
import Routes from './routes';
import {Layout, Steps, Icon} from 'antd';
import './app.css';

const {Header, Footer} = Layout;
const Step = Steps.Step;

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalShow: 0,
            surveys: [],
            currentSurvey: 0
        };
        console.log(this.props)
    }
    render() {

        return (
            <div className="App">
                <Header className="App-header">
                    <div>
                        <h1 className="App-title">Bienvenido al cuestionario</h1>
                    </div>
                </Header>

                <div>
                    <div className="App-step">
                        <div className="App-step-inside">
                            <Steps>
                                <Step style={{display:'flex'}} status="process" title="Selección" />
                                <Step style={{display:'flex'}} status="wait" title="Categorización"/>
                                <Step style={{display:'flex'}} status="wait" title="Gracias" icon={<Icon type = "smile-o" />}/>
                            </Steps>
                        </div>
                    </div>
                    <div className="App-intro">
                        <Routes/>
                    </div>
                </div>
                {/* <Footer className="App-footer">Footer</Footer> */}
            </div>
        )

    }

}
