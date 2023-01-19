import React from 'react'
import { Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined,  BulbOutlined, FundOutlined, } from '@ant-design/icons'
import icon from './images/Crypto-2.png'

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>Crypto</Link>
                    <Avatar src={icon} size='large' className='crypto-logo' />
                </Typography.Title>

                <Menu theme='dark'>
                    <Menu.Item key='1' icon={<HomeOutlined />}>
                        <Link to='/'>Home</Link>
                    </Menu.Item>
                    <Menu.Item key='2' icon={<FundOutlined />}>
                        <Link to='/cryptocurrencies'>Cryptocurrency</Link>
                    </Menu.Item>

                    <Menu.Item key='4' icon={<BulbOutlined />}>
                        <Link to='/news'>News</Link>
                    </Menu.Item>


                </Menu>

            </div>
        </div>
    )
}

export default Navbar
