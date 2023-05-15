import React from 'react'
import { BsCurrencyRupee } from "react-icons/bs";
import Clock from '../images/Clock.png';
import { useEffect, useState } from 'react';
import Razorpay from "../images/Razorpay.png";

function Subscribeform() {
    const [count1, setCount1] = useState(false);
    const [count2, setCount2] = useState(false);
    const [count3, setCount3] = useState(false);
    const [cost, setCost] = useState();
    let onChangeValue=(event)=>{
         console.log(event.target.value);
         setCost(event.target.value)
         console.log(setCost);
      }
    const changeOne = ()=>{
        setCount1(true);
        setCount2(false);
        setCount3(false);
    }
    const changeTwo = ()=>{
        setCount1(false);
        setCount2(true);
        setCount3(false);
    }
    
    const changeThree = ()=>{
        setCount1(false);
        setCount2(false);
        setCount3(true);
    }

    return (
        <main className='subscribe_form_head'>
            <h3 className='form_head'>Select your subcription plan</h3>
            <div className="subs_form_plan" onChange={onChangeValue}>
                <div className="form_plan_info" id='form_plan_info_disable'>
                <p className="form_notification_disable">Recommended</p>
                    <div className="plan_info_1">
                        <input type="radio" name="plan" id="" disabled='disabled' />
                        <span>12 Months Subscription </span>
                    </div>
                    <div className="plan_info_2">
                        <p className="plan_total_price">Total <span><BsCurrencyRupee />99</span></p>
                        <p className="plan_permonth_price"><BsCurrencyRupee />8 <span>/mo</span></p>
                    </div>
                </div>
                <div className= {`form_plan_info${count1 ? "_active" : ""}`}>
                <p className={`form_notification${count1 ? "_active" : ""}`}>Recommended</p>
                    <div className="plan_info_1">
                        <input type="radio" name="plan" id="" value={179} onClick={changeOne} />
                        <span>12 Months Subscription </span>
                    </div>
                    <div className="plan_info_2">
                        <p className="plan_total_price">Total <span><BsCurrencyRupee />179</span></p>
                        <p className="plan_permonth_price"><BsCurrencyRupee />15 <span>/mo</span></p>
                    </div>
                </div>
                <div className= {`form_plan_info${count2 ? "_active" : ""}`}>
                <p className={`form_notification${count2 ? "_active" : ""}`}>Recommended</p>    <div className="plan_info_1">
                        <input type="radio" name="plan" id="" value={149} onClick={changeTwo} />
                        <span>6 Months Subscription </span>
                    </div>
                    <div className="plan_info_2">
                        <p className="plan_total_price">Total <span><BsCurrencyRupee />149</span></p>
                        <p className="plan_permonth_price"><BsCurrencyRupee />25 <span>/mo</span></p>
                    </div>
                </div>
                <div className= {`form_plan_info${count3 ? "_active" : ""}`}>
                <p className={`form_notification${count3 ? "_active" : ""}`}>Recommended</p>    <div className="plan_info_1">
                        <input type="radio" name="plan" id="" value={99}  onClick={changeThree} />
                        <span>3 Months Subscription </span>
                    </div>
                    <div className="plan_info_2">
                        <p className="plan_total_price">Total <span><BsCurrencyRupee />99</span></p>
                        <p className="plan_permonth_price"><BsCurrencyRupee />33 <span>/mo</span></p>
                    </div>
                </div>
            </div>
            <div className="subs_plan_total">
                <div className="subs_fee">
                    <p className="subs_fee_info">Subscription Fee</p>
                    <p className="subs_fee_price"><BsCurrencyRupee />18,500</p>
                </div>
                <div className="subs_plan_offer">
                    <div className="subs_plan_offer_1">
                        <div className='subs_plan_offer_1_detail'>
                            <p className="plan_offer_info">Limited time offer</p><p className="subs_plan_offer_price">-<BsCurrencyRupee />18,401</p>
                        </div>
                        <p className="plan_offer_lastdate"><img src={Clock} alt="" /> Offer valid till 25th March 2023 </p>
                    </div>
                </div>
                <div className="subs_total_cost">
                    <p className="subs_fee_info">Total <span>(Incl. of 18% GST)</span></p>
                    <p className="subs_fee_price"><BsCurrencyRupee />{cost}</p>
                </div>
            </div>
            <div className='buttons'><button className='cancel_btn'>Cancel</button><button className='proceed_btn'>proceed to pay</button></div>
            <div className="payment"><img src={Razorpay} alt="Razorpay" /></div>
        </main>
    )
}

export default Subscribeform