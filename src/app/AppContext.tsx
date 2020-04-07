import * as React from "react";

const AppContext = React.createContext({});
const { Provider, Consumer } = AppContext;

export { Provider, Consumer }

export default WrapperComp => {
  return props => {
  return <Consumer>{value => <WrapperComp {...props} {...value} /> }</Consumer>
  }
}