import React from 'react'
import { Message } from '../components/Message';
import { Button } from '../components/Button';
import { Input } from '../components/Input'
import { useState } from 'react';


export const CaseApp = () => {

    const [inputValue, setInputVal] = useState('');

    const handleEvent =(e)=>{
     setInputVal(e.target.value);
     console.log(e.target.value);
    }

    const upperCase = ()=>{
      setInputVal(inputValue.toUpperCase());
  
    }

    const lowerCase = ()=>{
      setInputVal( inputValue.toLowerCase());
    }

    const properCase = ()=>{
      setInputVal (inputValue[0].toUpperCase());

        const a=' ';
        const i =  inputValue.indexOf(a);
      setInputVal( inputValue[i].toUpperCase());
       
     
    }

  return (
    <div>
        <Message val="CHANGE CASE"></Message>
        <Input onChange={handleEvent} placeholder="TYPE NAME.."></Input>
        <Message val={inputValue}></Message>
        <Button fn={lowerCase} val="lowercase"></Button> &nbsp;
        <Button fn={upperCase} val="UPPERCASE"></Button> &nbsp;
        <Button fn={properCase} val="ProperCase"></Button>
    </div>
  )
}
