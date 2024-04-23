import Head from 'next/head';
import React from 'react';
import styles from '../../styles/List.module.css'
import Link from 'next/link';

//fetching data
export const getStaticProps = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return{
        props: { employees: data }
    }
}



const EmployeeList = ({ employees }) => {
  return (
    <>
        <Head>
            <title>Employee List | List</title>
            <meta name='keywords' content='employees' />
        </Head>
        <div>
            <h1>Employee List</h1>
            {employees.map(employee => (
                <Link href={'/employees/' + employee.id} key={employee.id}>
                    <section className={styles.box}>
                        <h3>{employee.name}</h3>
                    </section>
                </Link>
            ))}
        </div>
    </>
  )
}

export default EmployeeList