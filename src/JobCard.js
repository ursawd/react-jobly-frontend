import React from "react";
import "./JobCard.css";

const JobCard = (props) => {
  const { title, salary, equity, companyName } = props.input;
  const salaryComma = Number(salary).toLocaleString();
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
        <button className="btn btn-danger">APPLY</button>
      </div>
    </div>
  );
};
export default JobCard;
