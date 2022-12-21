import React from 'react';
import "./booking.css"
import phonepay from "./assets/images/PhonePe.png"
import googlepay from "./assets/images/Google_Pay.png"
import paytm from "./assets/images/Paytm.png"
export default function Booking() {
  return (
    <section id="availability">
      <section className='wrapper'>
        <div className='right'>
          <div className='slip'>
            <h6> Venue Details</h6>
            <ul>
              <li><span>Date : dd/mm/yy</span></li>
              <li><span>Day : Monday</span></li>
              <li><span>Venue : Alsaj Conevention Center</span></li>
              <li><span>Rent Amount : 1 lakh</span></li>
            </ul>
          </div>
        </div>
        <div className='left'>
          <h5>Pay Through</h5>
          <ul>
            <li><img src={phonepay}/></li>
            <li><img src={googlepay}/></li>
            <li><img src={paytm}/></li>
          </ul>
          </div>
      </section>
    </section>
  )
}