import React from 'react'
import './styles.css'
import Button from '../common/Button/button'
import Grad from '../../assets/gradient 1.png'
import Phone from '../../assets/iPhone2.JPG'

function LandingPage() {
  return (
    <div className='landing-wrapper'>
        <div className='landing-left'>
          <h1 className='heading-1'>Track Crypto</h1>
          <h1 className='heading-2'>Real Time.</h1>
          <p className='para'>Track Crypto in real time through public api. Visit dashboard to do so!</p>
          <div className='btn-flex'>
          <Button text='Dashboard' outlined={false}/>
          <Button text='Share' outlined={true}/>
        </div>
        </div>
        
        <div className='landing-right'>
          <img src={Grad} className='gradient'/>
          <img src={Phone} className='iPhone'/>
        </div>
    </div>
  )
}
export default LandingPage