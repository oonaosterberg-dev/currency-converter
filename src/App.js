import React, { useEffect, useState } from 'react'; 
import './App.css';
import CurrencyValueRow from './CurrencyValueRow'; 

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.apilayer.com/exchangerates_data'; 

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: { 'apikey': API_KEY }
};


function App() {
	
  const [currencies, setCurrencies] = useState([]); 
  const [exchange, setExchange] = useState([]); 
	
 useEffect(() => {
	  fetch(BASE_URL + '/latest', requestOptions)
	  	.then(response => response.json())
  		.then(result => setCurrencies(result.rates))
  		.catch(error => console.log('error', error))
  }, []) 
	
  return (
	  <>
		  <h1>Convert currencies</h1>
		  <CurrencyValueRow data={currencies} />
	  	  <div>=</div>
	      <CurrencyValueRow data={currencies} />
	  </>
  );
}

export default App;
