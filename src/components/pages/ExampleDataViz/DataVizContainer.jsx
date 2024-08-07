// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import RenderDataViz from './RenderDataViz.jsx';

import { Select, Button, Card, Divider } from 'antd';
const { Option } = Select;
import states from './statedata.jsx';

const DataVizContainer = () => {
  const initialState = 'AL';
  const [stateCode, setStateCode] = useState(initialState);

  const handleSelectState = (value) => {
    setStateCode(value);
  };

  const lineChartUrl = `https://ds-bw-test.herokuapp.com/viz/linechart/${stateCode}`;
  const barChartUrl = `https://ds-bw-test.herokuapp.com/viz/barchart/${stateCode}`;

  return (
    <div style={{ padding: '20px' }}>
      <Card title="Data Visualization" bordered={false} style={{ width: 600 }}>
        <Divider orientation="left">Select State</Divider>
        <Select
          defaultValue={initialState}
          style={{ width: 300, marginBottom: '20px' }}
          onChange={handleSelectState}
          placeholder="Select Your State"
        >
          {states.map(state => (
            <Option key={state.value} value={state.value} id={state.value}>
              {state.label}
            </Option>
          ))}
        </Select>

        <Divider orientation="left">Actions</Divider>
        <Button type="primary" style={{ marginRight: '10px' }}>
          Submit
        </Button>
        <Button type="default">Reset</Button>
        <Divider orientation="left">Visualizations</Divider>
        <RenderDataViz lineChartUrl={lineChartUrl} barChartUrl={barChartUrl} />
      </Card>
    </div>
  );
};

export default DataVizContainer;
