import { connect } from 'react-redux';
import App from '../components/App/App';
import { getJobList, getMoreJobList, getFilters } from '../api';
import { extractKey } from '../util';
import {
  LOAD_JOB_LIST,
  RESET_JOB_LIST,
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
      try {
        await getJobList({
          country: 'kr',
          job_sort: 'job.latest_order',
          years: -1,
          locations: 'all'
        }).then(res => {
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
      } catch (error) {
        console.log(error);
      }
    },
    async onJobListLoadMore(nextLink) {
      try {
        await getMoreJobList(nextLink).then(res => {
          dispatch({
            type: LOAD_JOB_LIST,
            data: res.data
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
    async applyFilter({ country, job_sort, years, locations }) {
      try {
        dispatch({
          type: RESET_JOB_LIST
        });
        await getJobList({
          country: country.key,
          job_sort: job_sort.key,
          years: years.key,
          locations: extractKey(locations)
        }).then(res => {
          dispatch({
            type: SET_COUNTRY,
            data: country
          });
          dispatch({
            type: SET_JOB_SORT,
            data: job_sort
          });
          dispatch({
            type: SET_YEARS,
            data: years
          });
          dispatch({
            type: SET_LOCATION,
            data: locations
          });
          dispatch({
            type: LOAD_JOB_LIST,
            data: res.data
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
    setCountry(country) {
      dispatch({
        type: SET_COUNTRY,
        data: country
      });
    },
    setJobSort(jobSort) {
      dispatch({
        type: SET_JOB_SORT,
        data: jobSort
      });
    },
    setYears(years) {
      dispatch({
        type: SET_YEARS,
        data: years
      });
    },
    setLocation(locations) {
      dispatch({
        type: SET_LOCATION,
        data: locations
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
