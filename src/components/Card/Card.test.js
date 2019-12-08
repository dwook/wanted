import React from 'react';
import { mount } from 'enzyme';
import Card from './Card';

describe('<Card />', () => {
  let component = null;
  const job = {
    status: 'active',
    is_like: false,
    is_bookmark: false,
    company: {
      id: 765,
      name: '마플(MARPPLE)',
      industry_name: 'IT, 컨텐츠'
    },
    title_img: {
      origin:
        'https://static.wanted.co.kr/images/company/765/6738_2_0.b211b4b3__1080_790.jpg',
      thumb:
        'https://static.wanted.co.kr/images/company/765/6738_2_0.b211b4b3__400_400.jpg'
    },
    compare_country: true,
    due_time: '2019-12-31',
    like_count: 42,
    logo_img: {
      origin:
        'https://static.wanted.co.kr/images/wdes/0_4_94e8e8c5-dfad-455e-bcd9-bf64b31d89cc.jpg',
      thumb:
        'https://static.wanted.co.kr/images/wdes/0_5_94e8e8c5-dfad-455e-bcd9-bf64b31d89cc.jpg'
    },
    address: {
      country: '한국',
      location: '경기'
    },
    position: '앱 개발(아이폰/안드로이드)',
    reward: {
      formatted_total: '1,000,000원',
      formatted_recommender: '500,000원',
      formatted_recommendee: '500,000원'
    },
    id: 18438
  };
  it('renders correctly', () => {
    component = mount(<Card {...job} />);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
