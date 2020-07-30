import React from 'react';
import logo from './logo.svg';
import './App.css';

import {mergeStyles} from 'office-ui-fabric-react'

import { IChartProps} from './SankeyChart.types'
import {SankeyChart} from './SankeyChart'
const data: IChartProps = {
  chartTitle: 'Sankey Chart',
  SankeyChartData: {
    nodes: [
      {
        nodeId: 0,
        name: 'node0',
        color: '#0078D4',
      },
      {
        nodeId: 1,
        name: 'node1',
        color: '#EF6950',
      },
      {
        nodeId: 2,
        name: 'node2',
        color: '#00188F',
      },
      {
        nodeId: 3,
        name: 'node3',
        color: '#022F22',
      },
      {
        nodeId: 4,
        name: 'node4',
        color: '#00A2AD',
      },
      {
        nodeId: 5,
        name: 'node5',
        color: '#E3008C',
      },
    ],
    links: [
      {
        source: 0,
        target: 2,
        value: 2,
      },
      {
        source: 1,
        target: 2,
        value: 2,
      },
      {
        source: 1,
        target: 3,
        value: 2,
      },
      {
        source: 0,
        target: 4,
        value: 2,
      },
      {
        source: 2,
        target: 3,
        value: 2,
      },
      {
        source: 2,
        target: 4,
        value: 2,
      },
      {
        source: 3,
        target: 4,
        value: 4,
      },
      {
        source: 3,
        target: 5,
        value: 4,
      },
    ],
  },
};

class  App extends React.Component {
  render(){
    return (
      <div style={{width:"700px",height:'300px'}} >
      <SankeyChart
            data={data}
            height={700}
            width={300}
          />
      </div>
    );
  }
}

export default App;
