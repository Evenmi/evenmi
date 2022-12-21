import './App.css';
import Venbuk from "./components/Venbuk";
import Auditorium from "./components/Auditorium"
import Alsaj from "./components/Alsaj"
import Booking from "./components/Booking"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Venbuk />} />
        <Route path="/auditorium" element={<Auditorium /> } />
        <Route path="/auditorium/alsaj" element={<Alsaj />}/>
        <Route path="/auditorium/alsaj/booking" element={<Booking/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
