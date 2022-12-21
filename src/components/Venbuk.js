import React from 'react'
import "./venbuk.css";
import { Link } from 'react-router-dom';
import logo from "./assets/images/logo.png";
import auditorium from "./assets/images/audtorium.jpeg";
import makeup from "./assets/images/makeup.jpeg";
import card from "./assets/images/card.jpeg";
import photography from "./assets/images/photography.jpeg";
import instagram from "./assets/images/instagram.png";
import facebook from "./assets/images/facebook.png";
import twitter from "./assets/images/twitter.png";
import mail from "./assets/images/mail.png";
import linkedin from "./assets/images/linkedin.png";
export default function Venbuk() {
  return (
    <div className="App">
    <header className="App-header">
      <div className="logo">
      <h1><a href="logo">Ven<b>buk</b></a></h1>
      </div>
      <div className="right">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#">Log In</a></li>
          <li><a href="#" className='button'>Sign Up</a></li>
        </ul>
      </div>
    </header>
    <section id='home'>
        <section className='wrapper'>
        <div className='left-container'>
            <div><img src={logo} /></div>
            <div className='logo-bottom'>
            <h4>Ven<b>buk</b></h4>
            <span>The Online Venue Booking Platform</span>
            <small>An Intiative from <a href='#'>Talrop</a></small>
            </div>
        </div>
        <div className='right-container'>
            <p>Fix your function in a click using  venbuk</p>
        </div>
        </section>
    </section>
    <section id='about'>
        <section className='wrapper'> 
        <div className='content'>
        <p>Venbuk is a venue booking online platform to book venue nd it is startup incubated by <a>TALROP</a>. Using the help of Venbuk you can book venues, event Management, catering, photography and other essentials for a function.We provide full service in one platform</p>
        <div className='logo'><img src={logo}/></div>
        </div>
        <a href='https://talrop.com/' className='button'>More About Talrop</a>
        </section>
    </section>
    <section id="service">
      <section className='wrapper'>
      <h3>Book your</h3>
      <ul>
        <li><Link  to="/auditorium"><span><img src={auditorium}/></span><small>Auditorium</small></Link></li>
        <li><Link to="/auditorium"><span><img src={photography}/></span><small>Photography</small></Link></li>
        <li><Link to="/auditorium"><span><img src={makeup}/></span><small>Make Up</small></Link></li>
        <li><Link to="/auditorium"> <span><img src={card}/></span><small>Wedding Cards</small></Link></li>
      </ul>
      </section>
    </section>
    <section id='contact'>
      <section className='wrapper'>
        <div className='left'><h6>Contact team <a>Venbuk</a> for more Details</h6>
        <div>
        <span>Hire Us On</span>
        <ul>
          <li><a href="#"><img src={mail}/></a></li>
          <li><a href="#"><img src={linkedin}/></a></li>
          <li><a href="#"><img src={facebook}/></a></li>
          <li><a href="#"><img src={instagram}/></a></li>
          <li><a href="#"><img src={twitter}/></a></li>
        </ul>
        <span>Contact On</span>
        <small><a href="#">########## </a> or <a href="#">##########</a></small>
        </div>
        </div>
        <form>
          <input placeholder='Email'/>
          <input placeholder='Message'/>
          <input placeholder='Phone Number'/>
          <input type="submit" value="Send"/>
        </form>
      </section>
    </section>
  </div>
  )
}
