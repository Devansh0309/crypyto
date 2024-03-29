import axios from 'axios'
import React,{useEffect, useState} from 'react'
import Header from '../components/common/Header'

function Dashboard() {
  const [coins,setCoins]=useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData=()=>{
    //Call the API and get the data
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(response=>{
      console.log(response)
      if(response.data){
        setCoins(response.data)
      }
    }).catch(error=>{
      console.log(error)
    })
  }
  return (
    <div>
      <Header/>
      
    </div>
  )
}
export default Dashboard