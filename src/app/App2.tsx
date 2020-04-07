import * as React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
import AppContext, { Provider } from "./AppContext";
import { changeA } from "../app/app_redux/reducer";
import AComp from "../atomic/molecules/AComp";
import { createSelector } from 'reselect'

export const BConnect = WrapComp => {
  class Appz extends React.Component<{b}> {  
    render() {
      return (
        <Provider
          value={{
            b: this.props.b,
          }}
        >
        <WrapComp />
        </Provider>
      );
    }
  }
  const mapStateToProps = (state) => {
    return { b: state.appState.b }
  }

  return connect(mapStateToProps)(Appz);
}