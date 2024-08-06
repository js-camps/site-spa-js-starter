// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import PropTypes from 'prop-types';
import { getDSData } from '../../../api/Data.jsx';
import { Link } from 'react-router-dom';

const initialState = {
  data: [],
  layout: {},
  frames: [],
  config: {
    displaylogo: false,
    displayModeBar: false,
  },
};

const PlotComponent = ({ url }) => {
  const [plotData, setPlotData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    getDSData(url)
      .then(res => {
        if (isMounted) {
          setPlotData(res);
          setIsLoading(false);
        }
      })
      .catch(err => {
        if (isMounted) {
          setError(err);
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Plot
      className="DataViz"
      data={plotData.data}
      layout={plotData.layout}
      frames={plotData.frames}
      config={plotData.config}
    />
  );
};

PlotComponent.propTypes = {
  url: PropTypes.string.isRequired,
};

const DataViz = ({ urls }) => (
  <>
    <p>
      <Link to="/">Home</Link>
    </p>
    {urls.map((url, index) => (
      <PlotComponent key={index} url={url} />
    ))}
  </>
);

DataViz.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DataViz;
