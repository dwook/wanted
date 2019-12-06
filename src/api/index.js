import axios from 'axios';

export const getJobList = () => {
  return axios.get('/api/v4/jobs', {
    params: {
      tag_type_id: 669,
      country: 'kr',
      job_sort: 'job.latest_order',
      years: -1,
      locations: 'all'
    }
  });
};

export const getMoreJobList = nextLink => {
  return axios.get(nextLink);
};
