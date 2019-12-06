import { combineReducers } from 'redux';
import { JOB_LIST_LOAD } from '../constants/actionTypes';

const initialState = {
  jobList: []
};

export function jobListReducers(state = initialState.jobList, action) {
  switch (action.type) {
    case JOB_LIST_LOAD:
      return [...state, ...action.jobList];
    default:
      return state;
  }
}

export default combineReducers({
  jobList: jobListReducers
});
