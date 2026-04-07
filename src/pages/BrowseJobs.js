import React, { useState, useEffect } from 'react';
import JobCard from '../components/JobCard';
import './BrowseJobs.css';

const ALL_JOBS = [
  { id: 1, title: 'Frontend Developer', company: 'TechNova', location: 'Remote', type: 'Full-Time', salary: '$80k–$100k', tags: ['React', 'CSS', 'JavaScript'] },
  { id: 2, title: 'Backend Engineer', company: 'CloudBase', location: 'New York, NY', type: 'Full-Time', salary: '$95k–$120k', tags: ['Node.js', 'MongoDB', 'AWS'] },
  { id: 3, title: 'UI/UX Designer', company: 'Designly', location: 'Remote', type: 'Contract', salary: '$60k–$80k', tags: ['Figma', 'Prototyping', 'CSS'] },
  { id: 4, title: 'Data Analyst', company: 'Insightful', location: 'Austin, TX', type: 'Full-Time', salary: '$70k–$90k', tags: ['Python', 'SQL', 'Tableau'] },
  { id: 5, title: 'DevOps Engineer', company: 'Infra Corp', location: 'Seattle, WA', type: 'Full-Time', salary: '$100k–$130k', tags: ['Docker', 'Kubernetes', 'CI/CD'] },
  { id: 6, title: 'React Native Developer', company: 'AppSprint', location: 'Remote', type: 'Part-Time', salary: '$50k–$70k', tags: ['React Native', 'TypeScript', 'Expo'] },
  { id: 7, title: 'Machine Learning Engineer', company: 'AI Labs', location: 'San Francisco, CA', type: 'Full-Time', salary: '$130k–$160k', tags: ['Python', 'TensorFlow', 'ML'] },
  { id: 8, title: 'Product Manager', company: 'GrowthHub', location: 'Remote', type: 'Full-Time', salary: '$90k–$115k', tags: ['Agile', 'Roadmap', 'Jira'] },
];

function BrowseJobs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [filteredJobs, setFilteredJobs] = useState(ALL_JOBS);

  const jobTypes = ['All', 'Full-Time', 'Part-Time', 'Contract'];

  useEffect(() => {
    let results = ALL_JOBS;

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (job) =>
          job.title.toLowerCase().includes(q) ||
          job.company.toLowerCase().includes(q) ||
          job.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    if (selectedType !== 'All') {
      results = results.filter((job) => job.type === selectedType);
    }

    setFilteredJobs(results);
  }, [searchQuery, selectedType]);

  return (
    <main className="browse-page">
      <div className="browse-header">
        <h1 className="browse-title">Browse Jobs</h1>
        <p className="browse-sub">Find the perfect role that matches your skills.</p>
      </div>

      <div className="controls">
        <input
          type="text"
          className="search-input"
          placeholder="🔍  Search by title, company or skill..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="filter-btns">
          {jobTypes.map((type) => (
            <button
              key={type}
              className={`filter-btn ${selectedType === type ? 'active' : ''}`}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <p className="result-count">
        Showing <strong>{filteredJobs.length}</strong> job{filteredJobs.length !== 1 ? 's' : ''}
      </p>

      {filteredJobs.length > 0 ? (
        <div className="jobs-grid">
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              title={job.title}
              company={job.company}
              location={job.location}
              type={job.type}
              salary={job.salary}
              tags={job.tags}
            />
          ))}
        </div>
      ) : (
        <p className="no-results">No jobs found. Try a different search.</p>
      )}
    </main>
  );
}

export default BrowseJobs;
