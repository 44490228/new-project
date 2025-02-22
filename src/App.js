import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import { Dropdown } from 'react-bootstrap';
import Registration from './Pages/Registration/Registration';
import Fees_plan from './Pages/Fees_plan/Fees_plan';
import About_us from './Pages/About_us/About_us';
import Contact_us from './Pages/Contact_us/Contact_us';
import Formnew from './Component/Formnew/Formnew';
import Courses from './Pages/Courses/Courses';
import Formnewsecond from './Component/Formnew-second/Formnew-second';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dropdown" element={<Dropdown />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Fees-plan" element={<Fees_plan />} />
        <Route path="/About-us" element={<About_us />} />
        <Route path="/Contact-us" element={<Contact_us />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/newform" element={<Formnew />} />
        <Route path="/formsecond" element={<Formnewsecond/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
