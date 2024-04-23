import React from 'react';
import Links from './Links';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
        <div className='logo'>
          <Image src="/Clove_icon.webp" width={64} height={64} />
            <h1 className='title-nav'>Employee List</h1>
        </div>
        <Links />
        
    </nav>
    
  )
}

export default Navbar