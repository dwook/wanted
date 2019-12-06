import { connect } from 'react-redux';
import App from '../components/App/App';
import { getJobList, getMoreJobList, getFilters } from '../api';
import {
  LOAD_JOB_LIST,
  LOAD_FILTERS,
  SET_JOB_SORT,
  SET_COUNTRY,
  SET_YEARS,
  SET_LOCATION
} from '../constants/actionTypes';

const mapStateToProps = state => {
  return {
    jobList: state.jobList,
    nextLink: state.nextLink,
    filters: state.filters,
    jobSort: state.jobSort,
    country: state.country,
    years: state.years,
    locations: state.locations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    async onLoad() {
      await getJobList().then(res => {
        dispatch({
          type: LOAD_JOB_LIST,
          data: res.data
        });
      });
      await getFilters().then(res => {
        dispatch({
          type: LOAD_FILTERS,
          data: res.data
        });
      });
    },
    async onJobListLoadMore(nextLink) {
      await getMoreJobList(nextLink).then(res => {
        dispatch({
          type: LOAD_JOB_LIST,
          data: res.data
        });
      });
    },
    setJobSort(jobSort) {
      dispatch({
        type: SET_JOB_SORT,
        data: jobSort
      });
    },
    setCountry(country) {
      dispatch({
        type: SET_COUNTRY,
        data: country
      });
    },
    setYears(years) {
      dispatch({
        type: SET_YEARS,
        data: years
      });
    },
    setLocation(location) {
      dispatch({
        type: SET_LOCATION,
        data: location
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
