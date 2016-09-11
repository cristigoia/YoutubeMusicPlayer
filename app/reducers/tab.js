import * as types from '../actions/types';

const initialState = {
  selectedTab: 'search'
}

export default function tab(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_SELECTED_TAB:
      return {
        ...state,
        selectedTab: action.payload.tab
      };

    default:
      return state;
  }
}