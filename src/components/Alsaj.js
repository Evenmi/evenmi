import React from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import alsaj from "./assets/images/al-saj.jpg"
export default function Alsaj() {
    return (
        <>
        
          <section id="alsaj" style={{padding: "100px 0"}}>
            <section className="wrapper" style={{width: "90%"}}>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <h3 style={{ fontSize: "30px", fontWeight: "bold"}}> 
                        Alsaj Conevention Center
                    </h3>
                    <div style={{display: "flex", alignItems: "center", width: "40%"}}>
                        <span style={{ width: "40%"}}>
                            <img src={alsaj} style={{ width: "100%" , display: "block" , borderRadius: "5%"}}/>
                        </span>
                        <a className="button" style={{ fontSize: "16px", marginLeft: "10px"}}>View More Pics</a>
                    </div>
                </div> 
                <h6 style={{ color: "#47b97d", fontSize: "18px",fontWeight: "50px"}}>Rent Amount : 1 Lakh</h6>
                 <ol style={{ listStyle: "circle", marginTop: "25px", marginLeft: "2%"}}>
                        <span style={{  fontStyle: "bolder", fontSize: "20px"}}>Facilities</span>
                        <li style={{marginLeft: "3%"}}></li>
                        <li style={{marginLeft: "3%"}}></li>
                        <li style={{marginLeft: "3%"}}></li>
                        <li style={{marginLeft: "3%"}}></li>
                        <li style={{marginLeft: "3%"}}></li>
                        <li style={{marginLeft: "3%"}}></li>
                    </ol>
                    <Popup trigger={<button style={{ textAlign: "center", display:"block", padding: "15px",fontSize: "16px", backgroundColor: "#47b97d", width: "20%", margin: "0 auto", color: "#fff", borderRadius: "5%"}}> Check the Avilability</button>} position="top center" >
                        <div>
                            <span style={{textAlign: "center", display: "block", backgroundColor: "#47b97d", padding: "10px 0", color: "#fff"}}>January</span>
                    <ul style={{display: "flex", flexWrap: "wrap"}}>
                    <li  style={{ margin: "5px", width:"8%", fontSize: "12px"}}>S</li>
              <li  style={{ margin: "5px", width:"%", fontSize: "12px"}}>M</li>
              <li  style={{ margin: "5px", width:"8%", fontSize: "12px"}}>T</li>
              <li  style={{ margin: "5px", width:"8%", fontSize: "12px"}}>W</li>
              <li  style={{ margin: "5px", width:"8%", fontSize: "12px"}}>T</li>
              <li  style={{ margin: "5px", width:"8%", fontSize: "12px"}}>F</li>
              <li  style={{ margin: "5px", width:"8%", fontSize: "12px"}}>S</li>
              <li  style={{ margin: "5px", width:"8%"}}><Link to="/auditorium/alsaj/booking">1</Link></li>
              <li  style={{ margin: "5px", width:"8%"}}><Link to="/auditorium/alsaj/booking">2</Link></li>
              <li  style={{ margin: "5px", width:"8%"}}><Link to="/auditorium/alsaj/booking">3</Link></li>
              <li  style={{ margin: "5px", width:"8%"}}>4</li>
              <li  style={{ margin: "5px", width:"8%"}}>5</li>
              <li  style={{ margin: "5px", width:"8%"}}>6</li>
              <li  style={{ margin: "5px", width:"8%"}}><Link to="/auditorium/alsaj/booking">7</Link></li>
              <li  style={{ margin: "5px", width:"8%"}}>8</li>
              <li  style={{ margin: "5px", width:"8%"}}>9</li>
              <li  style={{ margin: "5px", width:"8%"}}><Link to="/auditorium/alsaj/booking">10</Link></li>
              <li  style={{ margin: "5px", width:"8%"}}><Link to="/auditorium/alsaj/booking">11</Link></li>
              <li  style={{ margin: "5px", width:"8%"}}>12</li>
              <li  style={{ margin: "5px", width:"8%"}}><Link to="/auditorium/alsaj/booking">13</Link></li>
              <li  style={{ margin: "5px", width:"8%"}}>14</li>
              <li style={{ margin: "5px", width:"8%"}}>15</li>
              <li style={{ margin: "5px", width:"8%"}}>16</li>
              <li style={{ margin: "5px", width:"8%"}}>17</li>
              <li style={{ margin: "5px", width:"8%"}}><Link to="/auditorium/alsaj/booking">18</Link></li>
              <li style={{ margin: "5px", width:"8%"}}><Link to="/auditorium/alsaj/booking">19</Link></li>
              <li style={{ margin: "5px", width:"8%"}}>20</li>
              <li style={{ margin: "5px", width:"8%"}}>21</li>
              <li style={{ margin: "5px", width:"8%"}}><Link to="/auditorium/alsaj/booking">22</Link></li>
              <li style={{ margin: "5px", width:"8%"}}>23</li>
              <li style={{ margin: "5px", width:"8%"}}><Link to="/auditorium/alsaj/booking">24</Link></li>
              <li style={{ margin: "5px", width:"8%"}}><Link to="/auditorium/alsaj/booking">25</Link></li>
              <li style={{ margin: "5px", width:"8%"}}><Link to="/auditorium/alsaj/booking">26</Link></li>
              <li style={{ margin: "5px", width:"8%"}}>27</li>
              <li style={{ margin: "5px", width:"8%"}}>28</li>
              <li style={{ margin: "5px", width:"8%"}}>29</li>
              <li style={{ margin: "5px", width:"8%"}}>30</li>
            </ul>
                        </div>
                    </Popup>
                    <span></span> 
                    </section>
                    </section>
                    
        </>
    )
    
 }
