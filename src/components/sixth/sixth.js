import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import './common.css';
import './sixth.css';



class Sixth_page extends Component {

  render() {
    return(     
    <div className = "App">
      <div className = "App-header">
        <div className = "sixth-content-container">
          <div className = "row">
            <p className = "font-content-title">Schrijf je in en verlies gewicht</p>
            <p className = "font-content-text">Sluit je aan bij meer dan 125.000 mannen en vrouwen. We sturen je een
                                                maand lang tips en trics om je BMI onder controle te krijgen en toe
                                                werken naar je gewenste gewicht.</p>
          </div>
          <div className = "row m-t-100">
            <div className = "column col-sm-6">
              <p className = "font-content-mini">Voornaam</p>
              <input type="text" className = "custom-input-text" name="fname" placeholder="Sofie" />
            </div>
            <div className = "column col-sm-6">
              <p className = "font-content-mini">Achternaam</p>
              <input type="text" className = "custom-input-text" name="fname" placeholder="Janssens"/>
            </div>
          </div>
          <div className = "row m-t-20">
            <div className = "column col-sm-6">
              <p className = "font-content-mini">Achternaam</p>
              <input type="text" className = "custom-input-text" name="fname" placeholder="Janssens"/>
            </div>
          </div>

        </div>
      </div>
    </div>
    );

  }
}
export default Sixth_page;