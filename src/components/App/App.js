import React, { Component } from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
import throttle from 'lodash/throttle';
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = throttle(this.handleScroll.bind(this), 1000);
  }

  componentDidMount() {
    this.props.onLoad().then(() => {
      const filter = this.props.filters;
      const jobSort = filter.job_sort.find(item => item.selected === true);
      const country = filter.countries.find(item => item.selected === true);
      const year = filter.years.find(item => item.selected === true);
      const location = country.locations.find(item => item.selected === true);
      this.props.setJobSort(jobSort);
      this.props.setCountry(country);
      this.props.setYears(year);
      this.props.setLocation(location);
    });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 200
    ) {
      this.props.onJobListLoadMore(this.props.nextLink);
    }
  }

  render() {
    const { jobList, jobSort, country, locations, years } = this.props;
    return (
      <div className="wrapper">
        <div className="header">
          <div className="section-option">
            <Button>{jobSort.display}</Button>
            <Button>
              <span>국가</span>
              <strong>{country.display}</strong>
            </Button>
            <Button>
              <span>지역</span>
              <strong>{locations.display}</strong>
            </Button>
            <Button>
              <span>경력</span>
              <strong>{years.display}</strong>
            </Button>
          </div>
          <div className="section-filter">
            <Button>
              <strong>필터</strong>
            </Button>
          </div>
        </div>

        <div className="list-card">
          {jobList.map(job => (
            <Card key={job.id} {...job} />
          ))}
        </div>
      </div>
    );
  }
}
