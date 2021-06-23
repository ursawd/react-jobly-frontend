import React, { useEffect, useState, useContext } from "react";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
import UserContext from "./UserContext";
import { useHistory } from "react-router-dom";

const Companies = () => {
  const [companies, setCompanies] = useState(null);
  let history = useHistory();

  console.log("context", useContext(UserContext));
  if (!useContext(UserContext)) {
    history.push("/home");
  }

  useEffect(function getCompaniesOneTime() {
    search();
  }, []);

  async function search(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  if (!companies) return <h1>Loading</h1>;

  return (
    <div>
      {companies.map((company) => (
        <CompanyCard input={company} />
      ))}
    </div>
  );
};
export default Companies;
