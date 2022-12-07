import React from 'react';
import { Card, Layout, Typographie } from '@wirecore/wirestyle';

const FullscreenDemo = () => {
  return (
    <Card
      style={{
        position: 'relative',
        width: '100%',
        height: '500px',
        overflow: 'hidden',
        transform: 'translateZ(0)',
        marginTop: '16px',
        marginBottom: '16px',
        backgroundColor: 'transparent',
      }}
    >
      <Layout isFullscreen>
        <Typographie size='sm' spacing='wider'>
          App Content goes here
        </Typographie>
      </Layout>
    </Card>
  );
};

export default FullscreenDemo;
