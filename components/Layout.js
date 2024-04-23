import React from 'react'
import Navbar from './navbar/Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className='content'>
        <Navbar />
        <hr />
        { children }
        <Footer />
    </div>
  )
}

export default Layout