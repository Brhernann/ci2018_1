import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './style.css';

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
