const DISPLAY_SIDEBAR = 'DISPLAY_SIDEBAR';

export function displaySidebar () {
  const action = { type: DISPLAY_SIDEBAR };
  return action;
}

export default function sidebarReducer (state = false, action) {

  switch (action.type) {

    case DISPLAY_SIDEBAR:
      return true

    default:
      return state;
  }

}
