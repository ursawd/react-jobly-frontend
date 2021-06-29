import React, { useEffect, useState, useContext } from "react";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
import UserContext from "./UserContext";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";
import SearchForm from "./SearchForm";

const Companies = () => {
  const [companies, setCompanies] = useState(null);
  let history = useHistory();

  //if false no user signed in, redirect to home
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

  if (!companies) return <h1 className="text-center text-danger">Loading</h1>;

  return (
    <div style={{ width: "60%", margin: "0 auto" }}>
      <SearchForm searchFor={search} />
      <div>
        {companies.map((company) => (
          <CompanyCard key={uuid()} input={company} />
        ))}
      </div>
    </div>
  );
};
export default Companies;
