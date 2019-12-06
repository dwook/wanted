import React, { Component } from 'react';
import Card from '../Card/Card';
import throttle from 'lodash/throttle';
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = throttle(this.handleScroll.bind(this), 1000);
  }

  handleScroll() {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 200
    ) {
      this.props.onJobListLoadMore(this.props.nextLink);
    }
  }

  componentDidMount() {
    this.props.onJobListLoad();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { jobList } = this.props;
    return (
      <div className="list">
        {jobList.map(job => (
          <Card key={job.id} {...job} />
        ))}
      </div>
    );
  }
}
