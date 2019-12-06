import { connect } from 'react-redux';
import App from '../components/App/App';
import { getJobList } from '../api';
import { JOB_LIST_LOAD } from '../constants/actionTypes';

const mapStateToProps = state => {
  return {
    jobList: state.jobList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onJobListLoad() {
      getJobList().then(res => {
        console.log(res.data.data);
        dispatch({
          type: JOB_LIST_LOAD,
          jobList: res.data.data
        });
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
