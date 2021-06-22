import React, { useEffect, useState } from "react";
import JoblyApi from "./api";
import "./Company.css";

const Company = () => {
  const [company, setCompany] = useState(null);

  useEffect(function getCompanyOneTime() {
    search();
  }, []);

  async function search(name) {
    let company = await JoblyApi.getCompany(name);
    console.log("effect", company);
    setCompany(company);
  }

  if (!company) return <h1>Loading</h1>;

  return (
    <div className="Company">
      <h3>{company.name}</h3>
      <p>{company.description}</p>
      <div>
        {company.jobs.map((job) => {
          return (
            <div className="border-top d-flex justify-content-between">
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
