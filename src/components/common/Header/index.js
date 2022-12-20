import React from 'react'
import './styles.css'
import Button from '../Button/button'
import RightDrawer from './Drawer'

function Header() {
  return (
    <div className='header'>
      <h1>Crypto Tracker
        <span style={{color:'var(--blue)'}}>.</span>
      </h1>
      <div className='links-flex'>
        <a href="/">
          <p className='link'>Home</p>
        </a>
        <a href="/compare">
          <p className='link'>Compare</p>
        </a>
        <a href="/watchlist">
          <p className='link'>Watchlist</p>
        </a>
        <a href="/dashboard">
          <Button text='Dashboard' outlined={false}/>
        </a>
      </div>
      <RightDrawer/>
    </div>
  )
}

export default Header