const initState = {
  appState: {
    a: 0, // 0, // [],
    b: 0
  }
}

export const changeA = (val) => ({type: 'CHANGE_A', val})

export default function reducer(state=initState, action) {
  switch(action.type) {
    case 'CHANGE_A':
      const newState = {
        ...state,
        appState: {
          ...state.appState,
          a: action.val
        }
      }
      return newState;
    default:
      return state;
  }
}