const SELECT_FILTER = 'SELECT_FILTER';

export const selectFilter = filter => ({ type: SELECT_FILTER, filter });

export default function filterReducer(state = [], action) {
  switch (action.type) {
    case SELECT_FILTER:
      if(state.indexOf(action.filter) === -1) {
        return [...state, action.filter]
      }
      else return state
    default:
      return state
  }
}
