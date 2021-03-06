import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import './sixth.css'
import Start_page from '../start/start';
import Mytopprogressbar from '../mytoppb/mytoppb';

class Sixth_page extends Component {
  constructor(props){
    super(props);

    this.state = {
      gender: this.props.gender === 0 ? "male" : "female",
      age: this.props.age,
      value_bmi: this.props.value_bmi,
      flag_sixth:1
    }
  }

  render() {
    return(     
       (this.state.flag_sixth==1)?(
    <div className = "App">
      <div className = "App-sixth-header">


        <div className = "first-content-container m-b-50">

          <div className = "row m-t-100">
            <p className = "font-content-title">Schrijf je in en verlies gewicht</p>
            <p className = "font-content-text">Sluit je aan bij meer dan 125.000 mannen en vrouwen. We sturen je een
                                                maand lang tips en trics om je BMI onder controle te krijgen en toe
                                                werken naar je gewenste gewicht.</p>
          </div>

          <form action = "https://hooks.zapier.com/hooks/catch/518022/rvo9lj/">
          
            <div className = "row m-t-100">            
              <div className = "column col-sm-6">
                <p className = "font-content-mini">Voornaam</p>
                <input type="text" className = "custom-input-text m-b-30" name="first_name" placeholder="Sofie" />
              </div>
              <div className = "column col-sm-6">
                <p className = "font-content-mini">Achternaam</p>
                <input type="text" className = "custom-input-text m-b-30" name="last_name" placeholder="Janssens"/>
              </div>
            </div>

            <div className = "row">
              <div className = "column col-sm-12">
                <p className = "font-content-mini">E-mail</p>
                <input type="text" className = "custom-input-text m-b-30" name="email" placeholder="sofie@getfit.com"/>
              </div>
            </div> 

            <div className = "row">
              <div className = "column col-sm-6">
                <p className = "font-content-mini">Gewenst gewicht</p>
                <input type="text" className = "custom-input-text m-b-30" name="gweight" placeholder="KG" />
              </div>
              <div className = "column col-sm-6">
                <p className = "font-content-mini">Provincie</p>
                <input type="text" className = "custom-input-text m-b-30" name="location" placeholder="Antwerpen"/>
              </div>
            </div>
    
            <div className = "row">
              <div className = "column col-sm-12">
                <p className = "font-content-mini">Motivatie</p>
                <textarea rows="3" className = "custom-text-area m-b-30" name="motivate" placeholder="Jouw persoonlijke motivatie om gewicht te verliezen"/>
              </div>
            </div>

            <input type="hidden" name="gender" value={this.state.gender}/>
            <input type="hidden" name="age" value={this.state.age}/>
            <input type="hidden" name="value_bmi" value={this.state.value_bmi}/>

            <div className = "row m-t-60 m-b-50">
                <input type="submit" className = "button-custom-active" value = "Laten we beginnen" onClick = { ()=>{this.setState({flag_sixth:0})}} /> 
            </div>
            
          </form>



        </div>
      </div>
    </div>
      ):( <div> <Start_page /> </div> )
    );

  }
}
export default Sixth_page;
