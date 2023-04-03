import React, { useEffect, useState } from "react";
import Chip from '@mui/material/Chip';
import './GenerPanel.css';
let Genere=['All Genere','Education','Sports','Comedy','Lifestyle'];
let Age=['Any Age Group','7+','12+','16+','18+'];
const GenerePanel = () => 
{    
return (
    <div>
                {/* <div class="mt-2" id="filter-section">
                    <div class="d-flex align-items-center" id="filter-list"></div>
                   <div class="d-flex align-items-center" id="category-filter"></div>
                   Education
                </div>                
                 <div class="mt-2" id="filter-section">
                    <div class="d-flex align-items-center" id="filter-list"></div>
                    <div class="d-flex align-items-center" id="age-filter"></div>
                    <p>7+</p>
                </div> */}
            <div class="mt-2" className="filter-section">
                <div className="Gener-section">
                    {Genere.map((cat) => <p className="pill">{cat}</p>)}
                
                </div>
                <div className="Gener-section">
                {/* <<Chip label="7+" variant="outlined"/>> */}
                {Age.map((age) => <p className="pill">{age}</p>)}
                </div>
            </div>
    </div>
);
}

export default GenerePanel;

