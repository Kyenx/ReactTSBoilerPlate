import * as React from 'react';
import PieChart from "../atomic/molecules/PieChart/PieChart";
import styled from 'styled-components'

const fakePieData = [{label: 'Group A', value: 750}, {label: 'Group B', value: 84}, {label: 'Group C', value: 84}, {label: 'Group D', value: 82}];


class App extends React.Component<{}, {}> {
  render() {
    return (
    <div>
      <h1>Yo yo yo!</h1>
      <PieChart data={fakePieData} chartLabel='00K'/>
    </div>
    );
  }
}

export default App;