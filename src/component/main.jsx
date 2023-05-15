import React from 'react'
import Info from './info'
import Subscription from './subscription'

function Main() {
    return (
        <div className='main_content'>
            <div className='row main_row'>
                <div className='col col-8'><Info /></div>
                <div className='col col-4'><Subscription /></div>
            </div>
        </div>
    )
}

export default Main
