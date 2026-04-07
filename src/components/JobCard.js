import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './JobCard.css';

class JobCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false,
    };
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    this.setState((prevState) => ({ saved: !prevState.saved }));
  }

  render() {
    const { title, company, location, type, salary, tags } = this.props;
    const { saved } = this.state;

    return (
      <div className="job-card">
        <div className="job-card-header">
          <div className="company-badge" style={{ background: 'var(--accent-soft)' }}>
            {company.charAt(0)}
          </div>
          <button
            className={`save-btn ${saved ? 'saved' : ''}`}
            onClick={this.handleSave}
            title={saved ? 'Unsave' : 'Save Job'}
          >
            {saved ? '★' : '☆'}
          </button>
        </div>

        <h3 className="job-title">{title}</h3>
        <p className="job-company">{company}</p>

        <div className="job-meta">
          <span className="meta-item">📍 {location}</span>
          <span className="meta-item">⏱ {type}</span>
          <span className="meta-item">💰 {salary}</span>
        </div>

        <div className="job-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>

        <button className="apply-btn">Apply Now</button>
      </div>
    );
  }
}

JobCard.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

JobCard.defaultProps = {
  tags: [],
};

export default JobCard;
