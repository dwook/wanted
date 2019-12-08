import React, { Component } from 'react';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';
import Select from '../Select/Select';
import Tags from '../Tags/Tags';
import Button from '../Button/Button';
import throttle from 'lodash/throttle';
import { checkKey } from '../../util';
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = throttle(this.handleScroll.bind(this), 1000);
    this.state = {
      country: {
        locations: []
      },
      location: []
    };
  }

  componentDidMount() {
    this.props.onLoad().then(() => {
      const filter = this.props.filters;
      const jobSort = filter.job_sort.find(item => item.selected === true);
      const country = filter.countries.find(item => item.selected === true);
      const year = filter.years.find(item => item.selected === true);
      const location = country.locations.filter(item => item.selected === true);
      this.props.setJobSort(jobSort);
      this.props.setCountry(country);
      this.props.setYears(year);
      this.props.setLocation(location);
      this.setState({
        country: country,
        location: location
      });
    });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  onCountryClick = country => {
    this.setState({
      country: country,
      location: [country.locations[0]]
    });
  };

  onLocationClick = location => {
    if (location.key === 'all') {
      this.setState({
        location: [location]
      });
    } else {
      let newLocation = [...this.state.location];
      newLocation = newLocation.filter(item => item.key !== 'all');

      if (!checkKey(location.key, newLocation)) {
        newLocation.push(location);
      } else {
        newLocation = newLocation.filter(item => item.key !== location.key);
      }

      this.setState({
        location: newLocation
      });
    }
  };

  onResetClick = () => {
    this.setState({
      country: this.props.country,
      location: this.props.locations
    });
  };

  handleScroll() {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 200
    ) {
      this.props.onJobListLoadMore(this.props.nextLink);
    }
  }

  render() {
    const { jobList, filters, jobSort, country, locations, years } = this.props;
    return (
      <div className="wrapper">
        <div className="section-filter">
          <div className="options">
            <Button>
              <strong>{jobSort.display}</strong>
            </Button>
            <Button>
              <span>국가</span>
              <strong>{country.display}</strong>
            </Button>
            <Button>
              <span>지역</span>
              <strong>{locations.length && locations[0].display}</strong>
            </Button>
            <Button>
              <span>경력</span>
              <strong>{years.display}</strong>
            </Button>
          </div>
          <div className="filter">
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
        <Modal>
          {Object.keys(filters).length && (
            <div className="modal-filter">
              <div className="header">
                <button className="button-reset" onClick={this.onResetClick}>
                  초기화
                </button>
                필터
              </div>
              <div className="body">
                <Select data={filters.job_sort} title="정렬" />
                <Tags
                  data={filters.countries}
                  selected={[this.state.country]}
                  onItemClick={this.onCountryClick}
                  title="국가"
                />
                {this.state.country.locations.length > 1 && (
                  <Tags
                    data={this.state.country.locations}
                    selected={this.state.location}
                    onItemClick={this.onLocationClick}
                    title="지역"
                  />
                )}
                <Select data={filters.years} title="경력" />
              </div>
              <div className="footer">
                <button>적용</button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    );
  }
}
