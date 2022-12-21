import React from 'react';
import { Link } from 'react-router-dom';
import alsaj from "./assets/images/al-saj.jpg"
import "./auditorium.css";
export default function Auditorium() {
  return (
    <section id='auditorium'>
      <section className='wrapper'>
        <h3>Book Your Auditorium</h3>
        <label for="cars">Auditoriums of </label>
<select id="auditorium" name="auditorium">
  <option value="thiruvananthapuram">Thiruvananthapuram</option>
  <option value="kollam">Kollam</option>
  <option value="pathanamthitta">Pathanamthitta</option>
  <option value="alapuzha">Alapuzha</option>
</select>
        <ul>
            <li>
                <span><img src={alsaj}/></span>
                <h6>Alsaj Convention Center</h6>
                <Link to="/auditorium/alsaj">Visit</Link>
            </li>
            <li>
                <span><img src={alsaj}/></span>
                <h6>Rashraj Convention Center</h6>
                <a href='#'>Visit</a>
            </li>
            <li>
                <span><img src={alsaj}/></span>
                <h6>Rajasree Convention Center</h6>
                <a href='#'>Visit</a>
            </li> <li>
                <span><img src={alsaj}/></span>
                <h6>Ragam Auditorium</h6>
                <a href='#'>Visit</a>
            </li> <li>
                <span><img src={alsaj}/></span>
                <h6>Safa Convention Center</h6>
                <a href='#'>Visit</a>
            </li>
        </ul>
      </section>
      </section>
  )
}
