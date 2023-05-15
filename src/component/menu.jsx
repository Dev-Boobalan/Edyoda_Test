import React from 'react'
import '../App.css'
import LOGO from '../images/LOGO.png';
import { BsChevronDown, BsSearch } from 'react-icons/bs';

function Menu() {
    return (
        <div className="container-fluid">
            <div className='Menu_bar'>
                <div className="Menu_list_1">
                    <ul>
                        <li className='logo'><a href="">Edyoda</a></li>
                        <li><a href="">course <BsChevronDown /></a></li>
                        <li><a href="">program <BsChevronDown /></a></li>
                    </ul>
                </div>
                <div className="menu_list_2">
                    <p className="src"><button type="search"><BsSearch /></button></p>
                    <p className="log_in">Log in</p>
                    <p className="join"><button className=' btn btn-primary' type="submit">Join now</button></p>
                </div>
            </div>
        </div>
    )
}

export default Menu