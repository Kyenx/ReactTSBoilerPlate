import * as React from "react";
import AppContext from "../../app/AppContext";
// import { AConnect } from "../../app/App";
import { BConnect } from "../../app/App2";

const shallowComp = (prevProps, newProps) => {
  if (prevProps.b === newProps.b) {
    return true
  }
  return false
}

const AComp: React.FC<{a, b}> = (props) => {
  console.log('New Props Parent')
  return (
    <div>
      <BComp a={props.a}/>
      {/* <CComp b={props.b}/> */}
      <DComp />
    </div>
  )
}

export default AppContext(AComp);

const BComp: React.FC<{a}> = props => {
  console.log('render A')
  return (
  <div>A: {props.a} - int</div>
  // <div>A: {props.a.length} - array</div>
  )
}
// const EComp = AppContext(BComp);


const CComp: React.FC<{b}> = (props) => {
  console.log('render B')
  return (
  <div>B: {props.b} - int</div>
  )
}

// const DComp = AppContext(CComp);

const DComp = BConnect(AppContext(CComp));