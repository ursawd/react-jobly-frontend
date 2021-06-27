import React, { useContext } from "react";
import "./JobCard.css";
import UserContext from "./UserContext";
const JobCard = (props) => {
  const { id, title, salary, equity, companyName } = props.input;
  const salaryComma = Number(salary).toLocaleString();
  const currentUser = useContext(UserContext);
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
        <button className="btn btn-danger">
          {currentUser.applications.includes(id) ? "Applied" : "Apply"}
        </button>
      </div>
    </div>
  );
};
export default JobCard;
