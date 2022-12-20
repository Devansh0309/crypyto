import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <div style={{minHeight:'100vh'}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </div>
  )
}

export default App