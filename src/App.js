
import React, { useState, useEffect } from 'react'
import axios from 'axios'



import Header from './components/header'
import Search from './components/Search'
import Charactergrid from './components/characters/charactergrid'


import './App.css'

                

const App = () => {
  const[items, setItems]= useState([])
  const[isLoading, setIsLoading]= useState(true)
  const[query, setQuery]= useState('')
  useEffect(() => {
    const fetchItems =async ()=>{
      const result  =  await axios(`https://thronesapi.com/api/v2/Characters?fullName=${query}`)

       console.log(result.data)
       setItems(result.data)
        setIsLoading(false)
    }
    fetchItems();

  }, [query])




   return (
    
    <div className="container">
      <Header />
      <Search  getQuery={(q) => setQuery(q)} />
      <Charactergrid isLoading={isLoading} items={items}  />
    


    
   
  </div>
  );
}

export default App;
