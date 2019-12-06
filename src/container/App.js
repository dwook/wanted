import { connect } from 'react-redux';
import App from '../components/App/App';
import { getJobList, getMoreJobList } from '../api';
import { JOB_LIST_LOAD } from '../constants/actionTypes';

const mapStateToProps = state => {
  return {
    jobList: state.jobList,
    nextLink: state.nextLink
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onJobListLoad() {
      getJobList().then(res => {
        dispatch({
          type: JOB_LIST_LOAD,
          data: res.data
        });
      });
    },
    onJobListLoadMore(nextLink) {
      getMoreJobList(nextLink).then(res => {
        dispatch({
          type: JOB_LIST_LOAD,
          data: res.data
        });
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
