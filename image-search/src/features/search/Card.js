import React from 'react';

import { Card } from 'antd';

const { Meta } = Card;

export default ({ photo }) => {
  return (
    <Card hoverable cover={<img alt="example" src={photo.photo} />}>
      <Meta title={`by ${photo.user}`} description={photo.location} />
    </Card>
  );
};
