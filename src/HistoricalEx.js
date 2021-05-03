import React, { useState, useEffect } from 'react'
import axios from 'axios'

const HistoricalEx = ({ data }) => {
    const [currentSymbol, setCurrentSymbol] = useState('')
    const [chosenDate, setChosenDate] = useState('')
    const [historicalData, setHistoricalData] = useState([])
    const APP_ID = `07a49e8e9c7e4d95984ce0c20fed2eea`

    const getExchangeRate = async (e) => {
        e.preventDefault()
        const res = await axios.get(`https://openexchangerates.org/api/historical/${chosenDate}.json?&app_id=${APP_ID}`)
        setHistoricalData(res.data)
        console.log()
    }
    return (
        <div className="body">
            <p>*Select a <b>currency</b> and any date ranging <b>from 1st January 1999 up till today</b></p>

            <div className="input-field">
                <p>From {data.base} To </p>
                <form>
                    <select onChange={(e) => setCurrentSymbol(e.target.value)} value={currentSymbol} required>
                        {Object.entries(data.rates).map(([symbol, rate], index) => (
                            <option key={index} value={symbol}>{symbol}</option>
                        ))}
                    </select> On
                    <input type='date'
                        onChange={(e) => setChosenDate(e.target.value)}
                        value={chosenDate}
                        required>

                    </input>
                    <button onClick={(e) => getExchangeRate(e)}>Search</button>
                </form>
            </div>
            {currentSymbol !== '' && historicalData.length !== 0 ?
                <>
                    <p className="result">1 {historicalData.base} = {historicalData.rates[currentSymbol]} {currentSymbol}</p>
                    <p className="result">1 {currentSymbol} = {(1 / historicalData.rates[currentSymbol]).toPrecision(5)} {historicalData.base}</p>
                </>
                : ' '}

        </div>
    )
}

export default HistoricalEx
