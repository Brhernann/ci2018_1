import React from 'react';
import 'antd/dist/antd.css';
import {Card, Transfer, Button } from 'antd';

class Welcome extends React.Component {

    state = {
        mockData: [],
        targetKeys: [],
        loading: false,
        iconLoading: false,
    }

    componentDidMount() {
        this.getMock();
    }

    enterLoading = () => {
      this.setState({ loading: true });
    }
  
    enterIconLoading = () => {
      this.setState({ iconLoading: true });
    }

    getMock = () => {
        const targetKeys = [];
        const mockData = [];
        for (let i = 0; i < 20; i++) {
            const data = {
                key: i.toString(),
                title: `content${i + 1}`,
                description: `description of content${i + 1}`,
                chosen: Math.random() * 2 > 1
            };
            if (data.chosen) {
                targetKeys.push(data.key);
            }
            mockData.push(data);
        }
        this.setState({mockData, targetKeys});
    }

    filterOption = (inputValue, option) => {
        return option
            .description
            .indexOf(inputValue) > -1;
    }

    handleChange = (targetKeys) => {
        this.setState({targetKeys});
    }

    render() {

        return (
            <div
                style={{
                    background: '#ECECEC',
                    padding: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                <Card
                    title="Bienvenido"
                    bordered={false}
                    style={{
                        width: '70%'
                    }}>
                   <Button type="primary" style={{ marginTop: 30 }}>
                   Siguiente
                   </Button>
                </Card>
            </div>

        );
    }
}

export default Welcome;
