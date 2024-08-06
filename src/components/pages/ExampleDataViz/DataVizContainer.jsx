// eslint-disable-next-line no-unused-vars
import React from 'react';
import DataViz from './RenderDataViz.jsx';

const DataVizContainer = () => {
  const urls = [
    'https://example.com/linechart',
    'https://example.com/linechart?country=Canada',
    'https://example.com/barchart'
  ];

  return <DataViz urls={urls} />;
};

export default DataVizContainer;
