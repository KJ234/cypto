import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { useState } from 'react'
import Loader from './Loader'

const { Text, Title } = Typography
const { Option } = Select


const News = ({ simplified }) => {

  const [newsCategory, setNewsCategory] = useState('cryptocurrency')

  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 37 })
  const { data } = useGetCryptosQuery(100)

  if (!cryptoNews?.value) return <Loader />


  return (
    <Row gutter={[24, 24]}>

      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className='select-news'
            placeholder='select a crypto'
            optionFilterProp='children'
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }>
            <Option value='cryptocurrency'>Cryptocurrency</Option>
              {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}


          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news) => (
        <Col xs={24} sm={12} lg={8} /*key={i}*/ >
          <Card hoverable className='news-card'>
            <a href={news.url}>
              <div className="news-image-container">
                <Title className='news-title' level={4}>{news.name}</Title>
                <img
                  src={news?.image?.thumbnail?.contentUrl}
                  alt={news.name}
                  style={{ maxWidth: "200px", maxHeight: "100px" }}
                />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl
                    }
                    alt={news.provider[0]?.name}
                  />
                  <Text className="provider-name">
                    {news.provider[0]?.name}
                  </Text>
                </div>
                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>

              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News