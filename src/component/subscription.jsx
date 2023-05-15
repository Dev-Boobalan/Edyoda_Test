import React from 'react';
import { BsFill1CircleFill, BsFill2CircleFill } from "react-icons/bs";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Subscribeform from './subscribeform';
import Signup from './signup';
import '../App.css';
function Subscription() {
  return (
    <div className='subs_head'>
      <Router>
        <div className='sub_head_header'>
          <div className="subs_step_1"><Link to="/signup"><span className='icon'><BsFill1CircleFill /></span><br></br><span className='icon_text'>Sign up</span></Link></div>
          <div className="subs_step_2"><Link to=''><span className='icon'><BsFill2CircleFill /></span><br /><span className='icon_text'>Subscribe</span></Link></div>
        </div>
        <div className="form">
          <Routes>
            <Route path='/signup' exact element={<Signup />} />
            <Route path='/' exact element={<Subscribeform />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}
export default Subscription