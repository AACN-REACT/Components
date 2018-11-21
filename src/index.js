// native Promise not working in ie11
import * as Promise from 'bluebird'
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import AacnForm from './components/aacn_form/organisms/aacn_form.jsx'

function mountForm(){


let myNodeList = document.querySelectorAll('div[id^="form"]')
//using a 'for..in' loop rather than forEach as ie11 does not seem to treat Nodelists as Arrays and cannot use Array.from()
// Must not use 'for..of' since it breaks ie11
  for(let i =0;i<myNodeList.length;i++){
   
    ReactDOM.render(<AacnForm num={parseInt(myNodeList[i].dataset.config)}  />, myNodeList[i])
  }

  myNodeList.forEach(el=>ReactDOM.render(<AacnForm />,el))
console.log(window.globalVar)
//myNodeList.filter((el,i)=>{/^form/.test(el.id)}).forEach(el=>el.innerHTML="form")


}


mountForm()