import axios from 'axios';
import qs from 'qs';

export const getJobList = ({ country, job_sort, years, locations }) => {
  console.log('요청', country, job_sort, years, locations);
  const arrayParamsAxios = axios.create({
    paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
  });

  return arrayParamsAxios.get('/api/v4/jobs', {
    params: {
      tag_type_id: 669,
      country,
      job_sort,
      years,
      locations
    }
  });
};

export const getMoreJobList = nextLink => {
  return axios.get(nextLink);
};

export const getFilters = () => {
  return axios.get('/api/v4/filters');
};
