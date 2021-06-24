import React from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css";

const CompanyCard = (props) => {
  const { handle, name, description, logoUrl } = props.input;
  return (
    <div className="CompanyCard">
      <Link to={`/companies/${handle}`}>
        <div>
          <div className="d-flex justify-content-between">
            <h3>{name}</h3>
            <div>
              {logoUrl && (
                <img src={logoUrl} alt={name} className=" CompanyCard-image" />
              )}
            </div>
          </div>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};
export default CompanyCard;
