import React, { useState } from 'react'

export default function CurrencyValueRow(props) {
	
  const [input, setInput] = useState({
	  currency: "",
	  amount: ""
  }); 
	
  function handleChange(e) {
	  const value = e.target.value;
	  setInput({
		  ...input,
		  [e.target.name]: value
	  });
  };
	
  return (
  	<div>
	  <select name="currency" value={input.currency} onChange={handleChange}>
	  	{Object.keys(props.data).map(currency => (
			<option key={currency} value={currency}>{currency}</option>
	    ))}
	  </select>
	  <input name="amount" type="number" onChange={handleChange} value={input.amount} />
	  <p><b>Currency:</b> {input.currency}</p>
	  <p><b>Value:</b> {input.amount}</p>
    </div>
  )
}