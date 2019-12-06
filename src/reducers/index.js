import { combineReducers } from 'redux';
import {
  LOAD_JOB_LIST,
  LOAD_FILTERS,
  SET_JOB_SORT,
  SET_COUNTRY,
  SET_YEARS,
  SET_LOCATION
} from '../constants/actionTypes';

const initialState = {
  jobList: [],
  nextLink: '',
  filters: {},
  jobSort: {},
  country: {},
  years: {},
  locations: {}
};

export function jobListReducers(state = initialState.jobList, action) {
  switch (action.type) {
    case LOAD_JOB_LIST:
      return [...state, ...action.data.data];
    default:
      return state;
  }
}

export function nextLinkReducers(state = initialState.nextLink, action) {
  switch (action.type) {
    case LOAD_JOB_LIST:
      return action.data.links.next;
    default:
      return state;
  }
}

export function filtersReducers(state = initialState.filters, action) {
  switch (action.type) {
    case LOAD_FILTERS:
      return action.data;
    default:
      return state;
  }
}

export function jobSortReducers(state = initialState.jobSort, action) {
  switch (action.type) {
    case SET_JOB_SORT:
      return action.data;
    default:
      return state;
  }
}

export function countryReducers(state = initialState.country, action) {
  switch (action.type) {
    case SET_COUNTRY:
      return action.data;
    default:
      return state;
  }
}

export function yearsReduers(state = initialState.years, action) {
  switch (action.type) {
    case SET_YEARS:
      return action.data;
    default:
      return state;
  }
}

export function locationsReducers(state = initialState.locations, action) {
  switch (action.type) {
    case SET_LOCATION:
      return action.data;
    default:
      return state;
  }
}

export default combineReducers({
  jobList: jobListReducers,
  nextLink: nextLinkReducers,
  filters: filtersReducers,
  jobSort: jobSortReducers,
  country: countryReducers,
  years: yearsReduers,
  locations: locationsReducers
});
