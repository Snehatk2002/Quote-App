import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewQuote = () => {
    const [data,changedata]=useState(
        {
            "quotes":[]
        }
    )
        const fetchData=()=>{
            axios.get("https://dummyjson.com/quotes").then(
                (response)=>{
                    console.log(response.data)
                    changedata(response.data)
                }
            ).catch().finally()
    
        }
        useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">quote</th>
      <th scope="col">author</th>
      <th scope="col">total</th>
      <th scope="col">skip</th>
      <th scope="col">limit</th>
    </tr>
  </thead>
  <tbody>
    {data.quotes.map(
        (value,index)=>{
            return <tr>
            <th scope="row">{value.id}</th>
            <td>{value.quote}</td>
            <td>{value.author}</td>
            <td>{value.total}</td>
            <td>{value.skip}</td>
            <td>{value.limit}</td>
          </tr>
        }
    )}
   
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewQuote