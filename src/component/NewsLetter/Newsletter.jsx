import React from 'react'
import './Newsletter.css'
export const Newsletter = () => {
  return (
    <div className='Newsletter'>
        <h1>Get Exclusive Ofeer on your Email</h1>
        <p>Subribe to our newletter and stay update</p>
        <div>
            <input type="email" placeholder='your Email id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}
