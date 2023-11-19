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
        <div className="maintenanceCards">
        <Card
            headerColor="DarkCyan "
            bodyColor="Cyan"
            headerText="Bulb Change"
            wingNumber="North Wing"
            roomNumber="Room 205"
            dateEntered="08/12/2023"

          />
           <Card
            headerColor="DarkOliveGreen "
            bodyColor="DarkKhaki"
            headerText="Door Issue"
            wingNumber="North Wing"
            roomNumber="Room 205"
            dateEntered="08/12/2023"
          />
          <Card
            headerColor="GoldenRod"
            bodyColor="Gold"
            headerText="Fix O2 Machine"
            wingNumber="North Wing"
            roomNumber="Room 205"
            dateEntered="08/12/2023"
          />
          </div>
      </div>
    </div>
  );
};

export default Facility;
