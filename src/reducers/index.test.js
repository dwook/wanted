import { jobListReducers } from './index';
import * as actionTypes from '../constants/actionTypes';

const response = {
  data: [
    {
      company: {
        id: 765,
        name: '마플(MARPPLE)',
        industry_name: 'IT, 컨텐츠'
      },
      position: '앱 개발(아이폰/안드로이드)',
      id: 18438
    },
    {
      company: {
        id: 3716,
        name: '에이아이트릭스(AITRICS)',
        industry_name: 'IT, 컨텐츠'
      },
      position: '웹 프론트엔드 개발자',
      id: 13925
    }
  ]
};

describe('Reducer Test', () => {
  describe('jobListReducers', () => {
    it('should return initial state.', () => {
      expect(jobListReducers(undefined, {})).toEqual([]);
    });

    it('should handle LOAD_JOB_LIST', () => {
      expect(
        jobListReducers(undefined, {
          type: actionTypes.LOAD_JOB_LIST,
          data: response
        })
      ).toEqual([...response.data]);
    });

    it('should handle RESET_JOB_LIST', () => {
      expect(
        jobListReducers(undefined, {
          type: actionTypes.RESET_JOB_LIST,
          data: []
        })
      ).toEqual([]);
    });
  });
});
