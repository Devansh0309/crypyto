import React,{useState} from 'react';
import Drawer from '@mui/material/Drawer';
import DensityMediumRoundedIcon from '@mui/icons-material/DensityMediumRounded';
import './styles.css'

export default function RightDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <div className='drawer'>
        <React.Fragment>
          <DensityMediumRoundedIcon className='link' onClick={()=>setOpen(true)}/>
          <Drawer
            anchor='right'
            open={open}
            onClose={()=>setOpen(false)}>
              <div className='mobile-drawer'>
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
                 <p className='link'>Dashboard</p>
                </a>
              </div>
          </Drawer>
        </React.Fragment>
    </div>
  );
}