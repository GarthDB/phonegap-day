import React from 'react'
import { Link } from 'react-router'
import Data from '../../data'

let speakers = Data.findSpeakersByConference('eu2017')
let workshops = Data.workshops.eu2017
let sessions = Data.sessions.eu2017

import WorkshopsSection from './workshops-section.jsx'
import SpeakersSection from './speakers-section.jsx'
import SessionsSection from './sessions-section.jsx'

export default class Eu2017 extends React.Component {
  render() {
    let imageStyle = {
      width:"100%",
      height:"auto"
    }
    return (
      <div>
        <header className="eu-main-header">
          <div className="eu-header-bounds--2017">
            <div className="adobe-logo"><a href="http://adobe.com"><img src="/img/adobe-logo.svg" alt="Adobe logo"/></a></div>
          </div>
          <div className="header-title">
            <div className="bounds">
              <h1>PhoneGap Day EU</h1>
              <h2 className="subhead eu-subhead">
                <time dateTime="2017-05-18">May 18 &amp; 19, 2017</time> • <span className="city">Amsterdam</span>
              </h2>
              <div className="description">A one day conference and one day of workshops for PhoneGap, web, and mobile developers.</div>
                <div className="pricing">
                  <h2>Ticket Pricing</h2>
                  <ul>
                    <li><span>Earlybird Conference</span><span className="leader" /><span>€120 + VAT</span></li>
                    <li><span>EB Conference + Workshops</span><span className="leader" /><span>€245 + VAT</span></li>
                  </ul>
                </div>
                <a href="https://webconferences.paydro.com/phonegap-day-eu-2017" className="button--cta">Get Tickets</a>
            </div>
            <section className="subscribe-form--eu">
              <div className="text-bounds">
                <h1>Stay in the Know</h1>
                <div className="description">Sign up for all the latest PhoneGap Day news.</div>
                <form action="http://nitobi.createsend.com/t/y/s/ehtkkh/" method="post" id="subForm">
                  <input id="fieldEmail" className="text-email" name="cm-ehtkkh-ehtkkh" placeholder="Email" type="email" required />
                  <button type="submit" className="button--cta">Subscribe</button>
                </form>
              </div>
            </section>
          </div>
        </header>
        <div id="content" className="main-content eu-content">
          <section className="about">
            <div className="text-bounds">
              <h1>The Lowdown</h1>
              <p><span className="sub">One part conference, one part celebration.</span><br />Join PhoneGap and Cordova experts from around the world to hear what’s new in web and mobile development. Get the inside scoop on emerging frameworks and technologies and learn valuable tips and tricks to help with your next project. This is one of the best opportunities to network and learn from top industry leaders, meet with members of the PhoneGap team, hear the latest PhoneGap news, and find out what’s coming next!</p>
              <p>Already have native apps at your organization? Come to PhoneGap Day to learn how to still use native controls for your app while leveraging webviews for the main content to make editing and updates easier and to enable your marketing team and other non technical users to update your app.</p>
              <p>Need help justifying your trip? Download our “<a href="/justify-your-trip-to-phonegapday-eu.docx">Letter to your Boss</a>” document.</p>
            </div>
          </section>
          <SpeakersSection speakers={speakers} heading={"Speakers"} pageSlug={"eu2017"}/>
          <section className="columns">
            <div className="text-bounds">
              <section className="workshops-section">
                <h1>Workshops</h1>
                <p>Get some 1:1 time with our PhoneGap experts ahead of the conference. Join our workshop day on Thursday, May 18. We'll have 2 workshop tracks on May 18th with great content running all day. More details to be announced soon, but we'll have workshops on things like progressive web apps, offline capabilities, security, and virtual reality. You won't want to miss these! Note: the workshop venue is different than the conference venue. More information coming soon!</p>
                <h3>Important: workshop location is different than the conference venue:</h3>
                <p>Pakhuis De Zwijger<br/>Piet Heinkade 179<br/>1019 HC Amsterdam</p>
                <p><strong>Public transport information</strong>: To reach the workshop venue, go to Central Station and take tram 26. It’s located very close to the second stop; you can see it from the tram.</p>
                <p><a href="https://dezwijger.nl/">https://dezwijger.nl/</a></p>
              </section>
              <img src="/img/de-zwijger.jpg" alt="Pakhuis De Zwijger" style={imageStyle}/>
            </div>
          </section>
          <section>
            <div className="text-bounds">
              <h1>Venue</h1>
              <p><a href="http://www.compagnietheater.nl/compagnietheater.html">Het Compagnietheater</a>, more details coming soon.</p>
            </div>
          </section>
          <section><img src="/img/compagnie-theater.jpg" className="full" alt="Compagnie Theater"/></section>
          <section className="columns">
            <div className="text-bounds">
              <section>
                <h1>Sponsors</h1>
                <p>Interested in sponsoring? Email Jen Gray at <a href="mailto:jgray@adobe.com">jgray@adobe.com</a>.</p>
              </section>
              <section>
                  <h1>Code of Conduct</h1>
                  <p>Attendees are required to adhere to our <a href="/code-of-conduct.html">code of conduct</a>.</p>
              </section>
            </div>
          </section>
        </div>
        <footer />
      </div>
    )
  }
}