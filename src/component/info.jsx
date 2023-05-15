import React from 'react'
import Degree from '../images/Degree.png'
import Read from '../images/Read.png'
import Live from '../images/Live.png'
import Clock2 from '../images/Clock2.png'
import Ads from '../images/Ads.png'
import { BsCurrencyRupee } from "react-icons/bs";

function Info() {
  return (
    <div className='main_info'>
        <h1 className='info_title'>
        Access curated courses worth <br></br><BsCurrencyRupee /> <span className='cross'>18,500</span> at just <span><BsCurrencyRupee /> 99</span> per year!</h1>
        <div className="info_detail">
            <img  src={Read} alt='' className="info_icon" />
            <p className="info_name"><span>100+</span> Job relevant courses </p>
        </div>
        <div className="info_detail">
        <img  src={Clock2} alt='' className="info_icon" />
        <p className="info_name"><span>20,000+</span> Hours of content</p>
        </div>
        <div className="info_detail">
        <img  src={Live} alt='' className="info_icon" />
            <p className="info_name"><span>Exclusive</span> webinar access</p>
        </div>
        <div className="info_detail">
        <img  src={Degree} alt='' className="info_icon" />
            <p className="info_name">Scholarship worth <span><BsCurrencyRupee />94,500</span></p>
        </div>
        <div className="info_detail">
        <img  src={Ads} alt='' className="info_icon" />
        <p className="info_name"><span>Ad Free</span> learning experience</p>
        </div>
    </div>
  )
}

export default  Info