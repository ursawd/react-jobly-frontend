import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import "./Company.css";
import { v4 as uuid } from "uuid";

const Company = () => {
  const [company, setCompany] = useState(null);
  const { handle } = useParams();

  useEffect(
    function getCompanyOneTime() {
      search(handle);
    },
    [handle]
  );

  async function search(name) {
    let company = await JoblyApi.getCompany(name);
    setCompany(company);
  }

  if (!company) return <h1 className="text-center text-danger">Loading</h1>;

  return (
    <div className="Company">
      <h3>{company.name}</h3>
      <p>{company.description}</p>
      <div>
        {company.jobs.map((job) => {
          return (
            <div
              key={uuid()}
              className="border-top d-flex justify-content-between"
            >
              <div>
                <h5>{job.title}</h5>
                <p>Salary: ${Number(job.salary).toLocaleString()}</p>
                <p>Equity: {job.equity}</p>
              </div>
              <div>
                <button className="btn btn-danger">APPLY</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Company;
