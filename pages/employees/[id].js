import React from 'react'

// to tell next how many pages to generate
export const getStaticPaths = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    const paths = data.map(employee =>{
        return{
            params: { id: employee.id.toString() }
        }
    })

    return{
        paths, //or paths: paths
        fallback: false
    }
}

//getstatic function will run paths times so if there is 10 id the static will run 10 times
//in next to get access to the parameters we need useing context 
export const getStaticProps = async(context) =>{
    const id = context.params.id;
    //tackle a single id using  `${id}` (backtick) and from context
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json();

    return{
        //fetch a single item or object
        props: { employee: data }
    }
}

const Details = ({employee}) => {
  return (
    <div>
        <h1>{employee.name}</h1>
        <p>{employee.email}</p>
        <p>{employee.website}</p>
        <p>{employee.address.city}</p>
    </div>
  )
}

export default Details