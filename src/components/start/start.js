import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import image_header from './assets/image/bg.png'
import image_third_first from './assets/image/img-third-first.png'
import image_third_second from './assets/image/img-third-second.png'
import image_third_third from './assets/image/img-third-third.png'

import image_footer_first from './assets/image/footer-first.png'
import image_footer_second from './assets/image/footer-second.png'
import image_footer_third from './assets/image/footer-third.png'
import image_footer_fourth from './assets/image/footer-fourth.png'
import image_footer_fifth from './assets/image/footer-fifth.png'

import './start.css';
import First_page from '../first/first';

class Start_page extends Component {
  constructor(props){
    super(props);
    this.state={
      flag:1
    }
  }
  render() {

    return (
    (this.state.flag==1)?(
    
      <div>
        <div className = "App-first-header-one">
          <span>
            <Navbar className = "navbar-transparent"  collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <a className = "font-top-left" href="#">bmi.vlaanderen</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight className = "right-navbar">
                  <NavItem eventKey={1}> <a className = "font-top-right" href="#">HOME </a></NavItem>
                  <NavItem eventKey={2}> <a className = "font-top-right" href="#">CALCULATORS </a></NavItem>
                  <NavItem eventKey={3}> <a className = "font-top-right" href="#">TEAM</a></NavItem>
                  <NavItem eventKey={4}> <a className = "font-top-right" href="#">OVER ONS</a></NavItem>
                  <NavItem eventKey={5}> <a className = "font-top-right p-r-40" href="#">CONTACTEER ONS</a></NavItem>
                  <NavItem eventKey={6}> <a className = "font-top-right" href="#"></a></NavItem>

                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </span>

          <div>

            <div className = "m-l-100 m-t-100 custom-first-center">
              <p className = "title-second m-l-100">BMI berekenen voor vrouwen, mannen en kinderen.</p>
              <div className = "m-l-100 m-t-30">
                <button className = "button-custom-active" onClick={ ()=>{this.setState({flag:2})}}>Start je berekening</button>
              </div>
            </div>

            <div className = "firstt-content-container m-t-100">
                <div className = "row cutsom-right-flex">

                  <div className = "column col-sm-8 m-t-15">
                    <p className = "title-one">WAT IS BMI EN HOE MOET JE DE RESULATEN LEZEN?</p>
                    <p className = "m-t-30 title-two">De BMI of Body Mass Index is een  eenvoudige manier om te berekenen 
                                                        of je gewicht gezond is in verhouding met je lengte, leeftijd en geslacht.
                                                        Via deze site kan je eenvoudig berekenen of je wel gezond bezig bent.</p>
                  </div>
                  <div className = "column col-sm-4">
                    <img className = "img-first" src={image_third_first}/> 
                  </div>
                </div>
                <div className = "row m-t-100 cutsom-left-flex">

                <div className = "column col-sm-4">
                    <img className = "img-second" src={image_third_second}/> 
                  </div>
                  <div className = "col-sm-8 m-t-30 p-l-50">
                    <p className = "title-one">HOE BEREKENEN WE JE BMI EN OP BASIS VAN WAT?</p>
                    <p className = "m-t-30 title-two">De Quetelet-index of BMI-index geeft het gewicht in verhouding tot de
                                                      lengte van een persoon weer in één cijfer. Voor volwassenen duidt een
                                                      cijfer minder dan 18,5 op ondergewicht en meer dan 25 is er overgewicht
                                                      en vanaf 30 zwaar overgewicht of obesitas. De berekeningsmethode
                                                      verschilt licht voor mannen en vrouwen en kinderen. De BMI doet wel
                                                      geen uitspraken over de hoeveelheid vet in het lichaam.</p>
                  </div>
                </div>
                <div className = "row m-t-100 cutsom-right-flex">

                  <div className = "col-sm-8  m-t-30">
                    <p className = "title-one">HOE ACTIE ONDERNEMEN BIJ EEN TE HOOG BMI?</p>
                    <p className = "m-t-30 title-two">Deze website berekent je BMI gratis en snel als je volgende gegevens
                                                      invult: lengte, gewicht, leeftijd en geslacht. Wanneer je Body Mass Index
                                                      te hoog of te laag blijkt te zijn, is het verstandig een arts te raadplegen.
                                                      Op eigen houtje beginnen diëten is ongezond en zelfs gevaarlijk.</p>
                  </div>                    
                  <div className = "column col-sm-4">
                    <img className = "img-second" src={image_third_third} alt="Smiley face" /> 
                  </div>
                </div>
            </div>



            <div className = "row-custom-bottom m-t-50 m-b-100">
              <div className = "row">
                <div className = "col-md-1"></div>
                <div className = "col-md-2 margin-auto">               <img className="bottom-img-custom" src={image_footer_first}/> </div>
                <div className = "col-md-2 margin-auto">               <img className="bottom-img-custom" src={image_footer_second}/></div>
                <div className = "col-md-2 margin-auto">               <img className="bottom-img-custom" src={image_footer_third}/></div>
                <div className = "col-md-2 margin-auto">       <img className="bottom-img-custom" src={image_footer_fourth}/></div>
                <div className = "col-md-2 margin-auto"><img className="bottom-img-custom" src={image_footer_fifth}/></div>
                <div className = "col-md-1"></div>
              </div>
            </div>
        </div>
        </div>
      </div>

    ):(<div> <First_page/> </div>));
  }
}

export default Start_page;
