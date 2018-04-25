import React from 'react';
import 'antd/dist/antd.css';
import {Card, Transfer, Button } from 'antd';
import { buttom_Back_next } from '../';

class Questionary extends React.Component {

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
                    title="Seleccione 5 empresas que según usted representan mayor empatía"
                    bordered={false}
                    style={{
                        width: '70%'
                    }}>
                    <Transfer
                        dataSource={this.state.mockData}
                        showSearch
                        filterOption={this.filterOption}
                        targetKeys={this.state.targetKeys}
                        onChange={this.handleChange}
                        render={item => item.title}/>
                         {buttom_Back_next()}
                </Card>
            </div>

        );
    }
}

export default Questionary;
