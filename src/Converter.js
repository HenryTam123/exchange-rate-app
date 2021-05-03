import React, { useState } from 'react'
import HistoricalEx from './HistoricalEx'
import LatestEx from './LatestEx'

const Converter = ({ data }) => {
  const [category, setCateory] = useState('latest')

  return (
    <div className="converter">
      <div className="head">
        <button
          className={`${category === 'latest' ? 'selected' : ''}`}
          onClick={() => setCateory('latest')}>Latest exchange rates
        </button>
        <button
          className={`${category === 'historical' ? 'selected' : ''}`}
          onClick={() => setCateory('historical')}>Historical exchange rates
        </button>
      </div>
      {category === 'latest' ? <LatestEx data={data} /> : ' '}

      {category === 'historical' ? <HistoricalEx data={data} /> : ''}
    </div>
  )
}

export default Converter
