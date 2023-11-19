import React from "react";
import "./Card.css";

interface CardProps {
  headerColor: string;
  bodyColor: string;
  headerText: string;
  bodyText?: string;
  wingNumber?: string;
  roomNumber?: string;
  dateEntered?:string;
  details?:string;
}

const Card = ({ headerColor, bodyColor, headerText, bodyText, wingNumber, roomNumber, dateEntered, details }: CardProps) => {
  return (
    <div className="cardContainer" style={{ backgroundColor: bodyColor }}>
      <div className="cardHeader" style={{ backgroundColor: headerColor }}>
        <h3 className="cardHeaderText">{headerText}</h3>
      </div>
      <div className="cardBody">
        <h3 className="cardBodyText">{bodyText}</h3>
        <h3 className="cardBodySubText">{wingNumber}</h3>
        <h3 className="cardBodyDate">{roomNumber}</h3>
        <h4 className="cardBodyDate">{dateEntered}</h4>
        <h4 className="cardBodyDetails">{details}</h4>
      </div>
    </div>
  );
};
export default Card;
