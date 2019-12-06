import React, { Component } from 'react';
import Card from '../Card/Card';
import './App.scss';

export default class App extends Component {
  componentDidMount() {
    this.props.onJobListLoad();
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
