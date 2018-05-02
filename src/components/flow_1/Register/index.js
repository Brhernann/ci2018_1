import React, {Component} from 'react';
import {
    Form,
    Input,
    Button,
    Select,
    Card
} from 'antd';
import {Link} from 'react-router-dom';

const Option = Select.Option;
const Item = Form.Item;

class Register extends Component {

    render() {

        return (
            <Card
                title="Su registro es importante para nosotros"
                bordered={false}
                style={{width: '40%',
                textAlign: 'center',
                marginTop: '2%',}}>

                <Form layout='horizontal'>
                    <Item label="Nombre">
                        <Input placeholder="Escriba"/>
                    </Item>
                    <Item label="Empresa">
                        <Select placeholder="">
                            <Option value="china">Google</Option>
                            <Option value="use">Facebook</Option>
                        </Select>
                    </Item>
                    <Item label="RUT">
                        <Input placeholder="input placeholder"/>
                    </Item>
                    <Item label="E-mail">
                        <Input placeholder="input placeholder"/>
                    </Item>
                    <Item>
                        <Link to='/gracias'>
                            <Button type="primary">Generate</Button>
                        </Link>
                    </Item>
                </Form>

            </Card>
        )
    }

}

export default Register;