import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Converter from './Converter'
import './App.css';

function App() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const APP_ID = `07a49e8e9c7e4d95984ce0c20fed2eea`

  useEffect(() => {
    const getExchangeRate = async () => {

      const res = await axios.get(`https://openexchangerates.org/api/latest.json?app_id=${APP_ID}`)
      setData(res.data)
      console.log(data)
      setIsLoading(false)
    }
    getExchangeRate()

  }, [isLoading])


  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="App">
      <h2>Exchange rate App</h2>
      <Converter data={data} />
    </div>
  );
}

export default App;
