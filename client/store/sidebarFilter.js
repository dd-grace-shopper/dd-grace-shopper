const SELECT_FILTER = 'SELECT_FILTER';
const DESELECT_FILTER = 'DESELECT_FILTER';
const RESET_SIDEBAR = 'RESET_SIDEBAR';

export const selectFilter = filter => ({ type: SELECT_FILTER, filter });
export const deselectFilter = filter => ({ type: DESELECT_FILTER, filter });
export const resetSidebar = filter => ({ type: RESET_SIDEBAR });

export default function filterReducer(state = [], action) {
  switch (action.type) {
    case SELECT_FILTER:
      if(state.indexOf(action.filter) === -1) {
        return [...state, action.filter]
      }
      else return state
    case DESELECT_FILTER:
      return state.filter(product => {
        return product !== action.filter
      })
    case RESET_SIDEBAR:
      return []
    default:
      return state
  }
}
