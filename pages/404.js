import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter(); //redirect user automatically
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [])
  return (
    <div className='container'>
        <h1>Ooooooops....</h1>
        <h2>That page cannot be found.</h2>
        <p>Go back to the <Link href="/">Homepage</Link></p>
    </div>
  )
}

export default NotFound