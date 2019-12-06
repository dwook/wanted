import { combineReducers } from 'redux';
import { JOB_LIST_LOAD } from '../constants/actionTypes';

const initialState = {
  jobList: [],
  nextLink: ''
};

export function jobListReducers(state = initialState.jobList, action) {
  switch (action.type) {
    case JOB_LIST_LOAD:
      return [...state, ...action.data.data];
    default:
      return state;
  }
}

export function nextLinkReducers(state = initialState.nextLink, action) {
  switch (action.type) {
    case JOB_LIST_LOAD:
      return action.data.links.next;
    default:
      return state;
  }
}

export default combineReducers({
  jobList: jobListReducers,
  nextLink: nextLinkReducers
});
