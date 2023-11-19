import React from "react"
import "./Card.css"

interface CardProps {
  headerColor: string;
  bodyColor: string;
  headerText: string;
  bodyText: string;
}

const Card = ({ headerColor, bodyColor, headerText, bodyText }: CardProps) => {
  return (
    <div className="cardContainer" style={{ backgroundColor: bodyColor }}>
      <div className="cardHeader" style={{ backgroundColor: headerColor }}>
      <h3 className="cardHeaderText">{headerText}</h3>
      </div>
      <div className="cardBody">
      <h3 className="cardBodyText">{bodyText}</h3>
      </div>
    </div>
  )
}
export default Card
