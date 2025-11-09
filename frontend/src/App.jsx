import { useState } from 'react'

import './App.css'
import Navbar1 from './components/NavbarV1/Navbar1'
import Landingpage from './pages/Landingpage/Landingpage'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <>
     {/* Outer start */}
     <div className='bg-gray-100 w-[100%] h-[100%] box-border'>
      <Navbar1 />
      <Landingpage/>
      <Footer/>
     </div>
     {/* Outer end */}

    </>
  )
}

export default App
