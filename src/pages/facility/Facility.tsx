import React from "react";
import SectionLabel from "../../components/sectionLabel/SectionLabel";
import CapacityBar from "../../components/capacityBar/CapacityBar";
import "./Facility.css";
import Card from "../../components/card/Card";

const Facility = () => {
  return (
    <div className="page">
      <div className="occupancySection">
        <SectionLabel text="Current Occupancy" background="orange" />
        <CapacityBar text="Facility" background="lightgreen" capacity={50} />
      </div>
      <div className="alertsSection">
        <SectionLabel text="Alerts" background="blue" />
        <div className="alertCards">
          <Card
            headerColor="MediumSeaGreen "
            bodyColor="MediumSpringGreen"
            headerText="Elopement Attempts"
            bodyText="3"
          />
          <Card
            headerColor="Teal "
            bodyColor="Turquoise"
            headerText="New Residents"
            bodyText="3"
          />
          <Card
            headerColor="GoldenRod"
            bodyColor="Gold"
            headerText="Upcoming Vacancies"
            bodyText="3"
          />
        </div>
      </div>
      <div className="cleaningSection">
        <SectionLabel text="Cleaning Schedule" background="lightgreen" />
      </div>
      <div className="maintenanceSection">
        <SectionLabel text="Maintenance Tickets" background="magenta" />
      </div>
    </div>
  );
};

export default Facility;
