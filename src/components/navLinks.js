import { HomeOutlined,  BulbOutlined, FundOutlined, } from '@ant-design/icons'

 const menuItems = [
   {
        key: '1',
        icon: <HomeOutlined />,
        display: 'Home',
        path: '/'
    },    {
        key: '2',
        icon: <FundOutlined />,
        display: 'Cryptocurrency',
        path: '/cryptocurrencies'
    },
    {
        key: '3',
        icon: <BulbOutlined />,
        display: 'News',
        path: '/news'
    },
];

export default menuItems