const initialState = { count: 0 }
export default  (state=initialState, action) => {
    if (action.type === `INCREMENT`) {
      return Object.assign({}, state, {
        count: state.count + 1,
      })
    }
    return state
  }