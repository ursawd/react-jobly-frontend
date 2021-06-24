import React from "react";
import "./CompanyCard.css";

const CompanyCard = (props) => {
  const { name, description, logoUrl } = props.input;
  return (
    <div className="CompanyCard">
      <div>
        <h3>{name}</h3>
        {logoUrl && (
          <img
            src={logoUrl}
            alt={name}
            className="float-right ml-5 CompanyCard-image"
          />
        )}
      </div>
      <p>{description}</p>
    </div>
  );
};
export default CompanyCard;
