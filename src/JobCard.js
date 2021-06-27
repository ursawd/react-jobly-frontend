import React, { useContext, useState } from "react";
import "./JobCard.css";
import UserContext from "./UserContext";
import JoblyApi from "./api";
const JobCard = (props) => {
  const { id, title, salary, equity, companyName } = props.input;
  const salaryComma = Number(salary).toLocaleString();
  const currentUser = useContext(UserContext);
  const [updatedJobs, setUpdatedJob] = useState(currentUser.applications);

  //------------------------------------------------------
  const applyFor = async () => {
    const data = {
      username: currentUser.username,
      jobId: id,
    };
    const status = await JoblyApi.applyForJob(data);
    setUpdatedJob((updatedJobs) => [...updatedJobs, status.applied]);
  };
  return (
    <div className="JobCard">
      <div>
        <h5>{title}</h5>
      </div>
      <p className="mb-0">{companyName}</p>
      <br></br>
      <div className="d-flex justify-content-between">
        <div>
          <p className="mb-0">Salary: ${salaryComma}</p>
          <p className="mb-0">Equity: {equity}</p>
        </div>
        <button onClick={applyFor} className="btn btn-danger">
          {updatedJobs.includes(id) ? "Applied" : "Apply"}
        </button>
      </div>
    </div>
  );
};
export default JobCard;
