import React, { useEffect, useState } from "react";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";

const Companies = () => {
  const [companies, setCompanies] = useState(null);

  useEffect(function getCompOneTime() {
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
