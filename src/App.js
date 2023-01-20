import React from 'react';
import { Routes, Route, Link, } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import Homepage from './components/Homepage'
import News from './components/News';
import Cryptocurrencies from './components/Cryptocurrencies';
import Cryptodetails from './components/Cryptodetails';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <div>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
                <Route exact path="/crypto/:coinId" element={<Cryptodetails />} />
                <Route exact path="/news" element={<News />} />

              </Routes>
            </div>
          </Layout>
          <div className="footer">
            <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2023
              <Link to="/">
                Crypto
              </Link> <br />
              ©
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
