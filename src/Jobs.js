import React, { useState, useEffect } from "react";
import "./Jobs.css";
import JoblyApi from "./api";
import JobCard from "./JobCard";

const Jobs = () => {
  const [jobs, setJobs] = useState(null);

  useEffect(function getJobsOneTime() {
    search();
  }, []);

  async function search(name) {
    let jobs = await JoblyApi.getJobs(name);
    setJobs(jobs);
  }

  if (!jobs) return <h1>Loading</h1>;

  return (
    <div>
      {jobs.map((job) => (
        <JobCard input={job} />
      ))}
    </div>
  );
};
export default Jobs;
