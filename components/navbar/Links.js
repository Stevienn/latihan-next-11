import React from 'react'
import Link from 'next/link';

const Links = () => {
    const links = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Employee List",
            path: "/employees",
        },
        {
            name: "About",
            path: "/about",
        }
    ]
  return (
    <div>
        {links.map((link=>(
            <Link href={link.path} key={link.name} className='nav-tag'>{link.name}</Link>
        )))}
    </div>
  )
}

export default Links