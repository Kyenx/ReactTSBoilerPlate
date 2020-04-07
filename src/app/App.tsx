import * as React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
import AppContext, { Provider } from "./AppContext";
import { changeA } from "../app/app_redux/reducer";
import AComp from "../atomic/molecules/AComp";
import { createSelector } from 'reselect'

class App extends React.Component<{a, dispatch}, {}> {
  addA = () => {
    // const newNumArr = [...this.props.a, 1];
    const newNum = this.props.a + 1;
    this.props.dispatch(changeA(newNum))
  }

  render() {
    console.log('New Props Context')

    return (
    <Provider value={{
      a: this.props.a,
      // b: this.props.b
    }}>
      <h1>Redux Test</h1>
      <button onClick={this.addA}>Change A Button</button>
      <AComp />
    </Provider>
    );
  }
}

const mapStateToPropsAll = (state) => {
  return { a: state.appState.a  }
}

export default connect(mapStateToPropsAll)(App);

// const aSelect = (state) => state.appState.a
// const bSelect = (state) => state.appState.b
// const getA = createSelector(
//   [aSelect],
//   (a) => a
// )
// const getB = createSelector(
//   [bSelect],
//   (a) => a
// )

// class App extends React.Component<{a, b, dispatch}, {}> {
//   addA = () => {
//     const newNum = this.props.a + 1;
//     this.props.dispatch(changeA(newNum))
//   }

//   render() {
//     console.log('New Props Context')

//     return (
//       <div>
//       <h1>Redux Test</h1>
//       <button onClick={this.addA}>Change A Button</button>
//       <AComp />
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return { a: state.appState.a }
// }

// export const AConnect = WrapComp => {
//   class Appv extends React.Component<{a, dispatch}, {}> {  
//     render() {
//       return (
//         <Provider
//           value={{
//             a: this.props.a,
//             dispatch: this.props.dispatch
//           }}
//         >
//         <WrapComp />
//         </Provider>
//       );
//     }
//   }
//   return connect(mapStateToProps)(Appv);
// }


// export default AConnect(AppContext(App));



