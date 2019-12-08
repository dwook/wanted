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
      isModalOpen: false,
      country: {
        locations: []
      },
      initialCountry: {},
      job_sort: '',
      years: '',
      locations: []
    };
  }

  componentDidMount() {
    this.props.onLoad().then(() => {
      const filter = this.props.filters;
      const jobSort = filter.job_sort.find(item => item.selected === true);
      const country = filter.countries.find(item => item.selected === true);
      const initialCountry = filter.countries.find(item => item.key === 'kr');
      const years = filter.years.find(item => item.selected === true);
      const locations = country.locations.filter(
        item => item.selected === true
      );
      this.props.setJobSort(jobSort);
      this.props.setCountry(country);
      this.props.setYears(years);
      this.props.setLocation(locations);
      this.setState({
        country: country,
        initialCountry: initialCountry,
        job_sort: jobSort,
        years: years,
        locations: locations
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
      locations: [country.locations[0]]
    });
  };

  onLocationClick = location => {
    if (location.key === 'all') {
      this.setState({
        locations: [location]
      });
    } else {
      let newLocation = [...this.state.locations];
      newLocation = newLocation.filter(item => item.key !== 'all');

      if (!checkKey(location.key, newLocation)) {
        newLocation.push(location);
      } else {
        newLocation = newLocation.filter(item => item.key !== location.key);
      }

      this.setState({
        locations: newLocation
      });
    }
  };

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  onResetClick = () => {
    this.setState({
      country: this.state.initialCountry,
      job_sort: this.props.filters.job_sort[0],
      years: this.props.filters.years[0],
      locations: [this.state.initialCountry.locations[0]]
    });
  };

  handleSelect = (event, type) => {
    const options = {};
    const [select] = this.props.filters[type].filter(
      item => item.key === event.target.value
    );
    options[type] = select;
    this.setState(options);
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
    const {
      jobList,
      filters,
      jobSort,
      country,
      locations,
      years,
      applyFilter
    } = this.props;
    return (
      <div className="wrapper">
        <div className="section-filter">
          <div className="options">
            <Button onClick={this.toggleModal}>
              <strong>{jobSort.display}</strong>
            </Button>
            <Button onClick={this.toggleModal}>
              <span>국가</span>
              <strong>{country.display}</strong>
            </Button>
            {locations[0] && (
              <Button onClick={this.toggleModal}>
                <span>지역</span>
                <strong>{locations[0].display}</strong>
              </Button>
            )}
            <Button onClick={this.toggleModal}>
              <span>경력</span>
              <strong>{years.display}</strong>
            </Button>
          </div>
          <div className="filter">
            <Button onClick={this.toggleModal}>
              <strong>필터</strong>
            </Button>
          </div>
        </div>

        <div className="list-card">
          {jobList.map(job => (
            <Card key={job.id} {...job} />
          ))}
        </div>
        {this.state.isModalOpen && (
          <Modal handleModal={this.toggleModal}>
            {Object.keys(filters).length && (
              <div className="modal-filter">
                <div className="header">
                  <button className="button-reset" onClick={this.onResetClick}>
                    초기화
                  </button>
                  필터
                </div>
                <div className="body">
                  <Select
                    data={filters.job_sort}
                    selected={this.state.job_sort}
                    onChange={this.handleSelect}
                    type="job_sort"
                    title="정렬"
                  />
                  <Tags
                    data={filters.countries}
                    selected={[this.state.country]}
                    onItemClick={this.onCountryClick}
                    title="국가"
                  />
                  {this.state.country.locations.length > 1 && (
                    <Tags
                      data={this.state.country.locations}
                      selected={this.state.locations}
                      onItemClick={this.onLocationClick}
                      title="지역"
                    />
                  )}
                  <Select
                    data={filters.years}
                    selected={this.state.years}
                    onChange={this.handleSelect}
                    type="years"
                    title="경력"
                  />
                </div>
                <div className="footer">
                  <button
                    onClick={() => {
                      applyFilter({
                        country: this.state.country,
                        job_sort: this.state.job_sort,
                        years: this.state.years,
                        locations: this.state.locations
                      });
                      this.setState({
                        isModalOpen: false
                      });
                    }}
                  >
                    적용
                  </button>
                </div>
              </div>
            )}
          </Modal>
        )}
      </div>
    );
  }
}
