import * as types from './types';

export function setSelectedTab(tab) {
  return {
    type: types.SET_SELECTED_TAB,
    payload: { tab }
  }
}

