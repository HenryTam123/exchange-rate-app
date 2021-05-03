import React, { useState, useEffect } from 'react'

const LatestEx = ({ data }) => {
    const [currentSymbol, setCurrentSymbol] = useState('')
    const [date, setDate] = useState('')

    useEffect(() => {
        formatDate(data.timestamp)
    }, [])

    const formatDate = (timestamp) => {
        const date = new Date(timestamp * 1000)
        setDate(`${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}:${date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()}`)
    }
    return (
        <div className="body">
            <p>*Please select a <b>currency</b> to view the latest exchange rates</p>
            <div className="input-field">
                <p>From {data.base} To </p>
                <form>

                    <select onChange={(e) => setCurrentSymbol(e.target.value)} value={currentSymbol}>
                        <option value="">select currency here</option>
                        {Object.entries(data.rates).map(([symbol, rate], index) => (
                            <option key={index} value={symbol}>{symbol}</option>
                        ))}
                    </select>
                </form>
            </div>
            {currentSymbol != '' ?
                <>
                    <p className="result">1 {data.base} = {data.rates[currentSymbol]} {currentSymbol}</p>
                    <p className="result">1 {currentSymbol} = {(1 / data.rates[currentSymbol]).toPrecision(5)} {data.base}</p>
                    <p className="updated-time">Updated on {date}</p>
                </>
                : ' '}

        </div>
    )
}

export default LatestEx
