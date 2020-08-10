import React from 'react';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, ButtonGroup } from 'react-bootstrap';
import {Jumbotron } from 'react-bootstrap';
import './app.css'; 

function Footer(props) {
    return(
    <div className="footer">
        <Jumbotron className="foot1"> 
        <div className="container ">
        
                <h2 id="hf1">Get Your Subscription</h2>{}
                <p className="pf1">The basic API is free to use and rate limited.<b> Upgrade to a subscription</b> today to get 
                    extra data and no rate limit!</p>
                <p>Premium data includes a second data source: total cases, new cases, total deaths, new deaths, total cases per million, new cases per million, total deaths per million, new deaths per million, population, population density, median age, aged 65 and older, aged 70 and older, GDP per capita, covid death rate, diabetes prevalence, 
                hand washing facilities, hospital beds per thousand and life expectancy.</p>
                <p className="pf1">Travel advice, other statistics for countries and premium-only routes are also be available.</p>
                <p className="pf1"><b> The tiers are as follows:</b></p>
                <ul>
                    <li>$10 per month. No rate limit, extended date on /summary route</li>
                    <li>$30 per month. Everything above with separate routes for country-level covid-related data</li>
                    <li>$100 per month. Everything above, extended data on a country level for other data including travel restrictions.
                        This also comes with a support package.</li>
                </ul>
                <h2>Choose your subscription below:</h2>
                <Row>
                    <Col><Button>Basic $10 per month</Button></Col>
                    <Col><Button>Extended $30 per month</Button></Col>
                    <Col><Button>Premium $1000 per month</Button></Col>
                </Row>
                <p >Once you have subscribed we will reach out to you directly with next steps.</p>
                <p >Premium data sourced from various websites, Our World In Data and OxCGRT Policy Tracker (Thomas Hale, Sam Webster, Anna Petherick, Toby Phillips, and Beatriz Kira. (2020). 
                    Oxford COVID-19 Government Response Tracker. Blavatnik School of Government.).</p>
       
        </div>
        </Jumbotron>
        <Jumbotron className="foote1">
            <h3>Join Us On Slack</h3>
            <Button>Join slack</Button>
            <h3>Documentation On Postman</h3>
            <Button>View Documentation</Button>
        </Jumbotron>
        <Jumbotron className="foot2"> 
        <div className="container text-center contf1" >
            <div className="forms ">
                <h3 id="hf1">Get In Touch</h3>
                <p>We are always open to working with new partners. Our main focus is on three areas: data sources, media coverage, funding. If you can help with these (or anything else) please fill in the form below!</p>
                <form className="form1">
                    <input type="text" name="name" placeholder="Name" required></input>
                    <input type="text" name="email" placeholder="Email" required></input>
                    <textarea name="message"placeholder="Message"required></textarea>
                    <Button>Submit</Button>
                </form>
            </div>
        </div>
        </Jumbotron>
       
       
        <div className="col-12 col-sm-4 align-self-center icons">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
                <p className="copy"> Copyright@2020--All rights reserved</p>
        
            </div>
            
      
    )
}

export default Footer;