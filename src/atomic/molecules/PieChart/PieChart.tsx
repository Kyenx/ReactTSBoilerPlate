import * as React from 'react';
import {
  PieChart, Pie, Sector, Cell, Label
} from 'recharts';

/**
 * 
 * # PieChart Component
 * 
 * Neat lil ol' pie thingy
 * 
 * # Props
 * | Name       | Type                              | Required | Description |
 * | ---------- | --------------------------------- | -------- | ----------- |
 * | data       | '[{label: string, value: int}]'   | Yes      |             |
 * | chartLabel | string                            | Yes      |             |
 * | width      | int                               | No       |             | 
 * | height     | int                               | No       |             |
 * 
 */

type PieData = {
  label: string;
  value: number;
}

interface IPieChartProps {
  data: PieData[];
  chartLabel: string;
  width?: number;
  height?: number;
}

const COLORS = ['#FFECB3', '#FFB300', '#EF6C00', '#BF360C', '#B2B2B2'];
const RADIAN = Math.PI / 180;  

const PieChartComponent: React.FunctionComponent<IPieChartProps> = (props) => {
  const { data, chartLabel, width, height } = props;
  const pieHeight = !!height ? height : 102;
  const pieWidth = !!width ? width : 102; 

  return (
    <PieChart width={pieWidth} height={pieHeight}>
        <Pie
          data={data}
          innerRadius={40}
          outerRadius={50} 
          fill="#8884d8"
          paddingAngle={0}
          dataKey='value'
          startAngle={90}
          endAngle={-270}
        >
        	{
          	data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
          }
          <Label value={chartLabel} offset={0} position="center" style={{fontSize: '32px'}}/>
        </Pie>
      </PieChart>
  );
};

export default PieChartComponent;