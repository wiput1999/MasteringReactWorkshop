import React from 'react';

import './Search.css';

// Custom Component
import Photo from './Card';

import { connect } from 'react-redux';
import { searchType, searchRun } from './redux';

// AntD
import { Layout, Row, Col, Input } from 'antd';
const { Header, Content } = Layout;
const { Search } = Input;

const SearchPage = (props) => {
  const { text, searchRun, result } = props;
  let mockdata = result.map((value, index) => (
    <Col span={6} key={value}>
      <Photo
        key={value}
        photo={{
          photo: value.urls.small,
          user: value.user.name,
          location: value.user.name
        }}
      />
    </Col>
  ));
  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Content>
          <Row>
            <Col span={12} offset={6} className="search-col">
              <Search
                value={text}
                placeholder="Search Image"
                onChange={(e) => props.searchType(e.target.value)}
                onSearch={() => searchRun(text)}
                size="large"
                enterButton="Search"
              />
            </Col>
          </Row>
          <Row gutter={8} style={{ padding: `0px 8px` }}>
            {mockdata}
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default connect((state) => state, { searchType, searchRun })(SearchPage);
