import React from 'react'
import SectionLabel from '../../components/sectionLabel/SectionLabel';
import CapacityBar from '../../components/capacityBar/CapacityBar';
import './Facility.css'

const Facility = () => {
  return (
    <div className='page'>
     Facility

     <SectionLabel text="Current Occupancy" background="orange" />
     <CapacityBar text='Facility' background='lightgreen' capacity={50}/>
     <SectionLabel text="Alerts" background="blue" />
     <SectionLabel text="Cleaning Schedule" background="lightgreen" />
     <SectionLabel text="Maintenance Tickets" background="magenta" />

    </div>
    
  )
}

export default Facility