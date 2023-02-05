import React, { useState } from 'react';
// Icon.
import { BiSearch } from "react-icons/bi";
// Redux.
import { useDispatch } from 'react-redux';
import { newWord } from "../Redux/dataSlice";

function Input() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const callAPI = async () => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`);
      const data = await response.json();
      dispatch(newWord({def: data}));
    } catch (err) {
      console.log(err)
    }
  }

  
  return (
    <div className="input-container">
        <input type="text" onChange={e => setInputValue(e.target.value)} />
        <button className='icon-search' onClick={callAPI}><BiSearch /></button>
    </div>
  )
}

export default Input;