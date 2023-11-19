import React from 'react'
import './SectionLabel.css'

interface SectionLabelProps {
  text: string;
  background: string;
}

const SectionLabel = ({ text, background }: SectionLabelProps ) => {
  return (
    <div className='labels' style={{ background }} >
      <h2 className='text'>{ text }</h2>
    </div>
  )
}

export default SectionLabel