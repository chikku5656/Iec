import React from 'react'
import Profile from './Component/Profile'
import Nav from './Component/Nav'
import Slider from './Component/Slider'
import Icons from './Component/Icons'
import Phone_i from './Component/Phone_i'
import Resume from './Component/Resume'
import Portfilo from './Component/Portfilo'
import { BrowserRouter , Routes , Route } from 'react-router-dom'


const App = () => {
  return (
    <>
<BrowserRouter >

      <Nav />
      <div className='sm:flex sm:items-center'>
        <Slider />
        
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/work" element={<Portfilo />} />
          </Routes>
         
       
        </div>
 


      <Phone_i />

      </BrowserRouter>
    </>
  )
}

export default App
