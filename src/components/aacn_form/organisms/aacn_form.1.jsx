import React, { Component } from 'react';
import {Button, Form,  FormControl , ControlLabel, Jumbotron, FormGroup} from 'react-bootstrap';
import {Button as Butt, Input as FC, } from '@material-ui/core';


// this is to generate a GUID for various uses such as provide form content with a  unique identifier 
// NB the GUID utilises Javascript random function which is not ideal, adequate for our purposes
// This sits outside the function to prevent it from being initialised with each funciton call
function guidGenerator(){
       let sec = ()=>(((1+Math.random())*0x10000)|0).toString(16).substring(1); 
       console.log((sec() + sec() + "-" + sec() + "-4" + sec().substr(0,3) + "-" + sec() + "-" + sec() + sec() + sec()).toLowerCase())
    return  (sec() + sec() + "-" + sec() + "-4" + sec().substr(0,3) + "-" + sec() + "-" + sec() + sec() + sec()).toLowerCase();
}



function AacnForm(props) {

    //creating a state object to be passed down to generated class component and used as inital state

    function getFormStyle(myStyle){
        //this function will ascertain the chosen styling then import and generate the correct components to pass down to the form
        // the signature fo this funciton wil be determined by the schema of the config object. not sure yet what form it is going to take 
        switch ( typeof myStyle){
            case "string":
            // import statement 
            break;
            case "object":
            // import statement 
            break;

        }
    }
    let state = {Uid:guidGenerator(),formStyle:getFormStyle()}



    // generate mark-up for genric default forms
    let genericBootstrapForm = (
        <div className="jumbotron" style={{padding:"10px"}}>
        <form  className="form-inline"  name="AacnForm" key={guidGenerator()}>

        <input type="hidden" name="Uid" value="" /> { /* this should only be filled in on submission  */} 
        <div className="form-group" style={{padding:"10px"}}>
        <label htmlFor="firstname"  >First name 
        </label>
        <input className="form-control" type="text" maxLength="30" name="firstname" required />
        </div>
   
        <ControlLabel htmlFor="secondname" >Second name
  
        <FormControl type="text" maxLength="30" name="secondname" required />
        </ControlLabel>
        <ControlLabel type="text" maxLength="30" name="line1" required />
        <ControlLabel htmlFor="address" >Address
        <FormControl type="text" maxLength="30" name="line1" required />
        <FormControl type="text" maxLength="30" name="line2" required />
        </ControlLabel>
        <button className="btn btn-primary">Submit</button>
        <Button>Cancel</Button>
        </form>
        </div >
         )
         let genericMaterialForm = (
            <div className="jumbotron">
            <Form name="AacnForm" key={guidGenerator()}>
    
            <input type="hidden" name="Uid" value="" /> { /* this should only be filled in on submission  */} 
            <ControlLabel htmlFor="firstname" >First name
            <FormControl type="text" maxLength="30" name="firstname" required />
            </ControlLabel>
            <ControlLabel htmlFor="secondname" >Second name
      
            <FC type="text" maxLength="30" name="secondname" required />
            </ControlLabel>
            <ControlLabel type="text" maxLength="30" name="line1" required />
            <ControlLabel htmlFor="address" >Address
            <FC type="text" maxLength="30" name="line1" required />
            <FC type="text" maxLength="30" name="line2" required />
            </ControlLabel>
            <Butt classes="primary">Submit</Butt>
            <Butt color="primary" >Cancel</Butt >
            </Form>
            </div>
             )
    // validate props, first check if there is a config object
    if(!props.config) {
        console.log("No conifg detecting, rendering default form")
    //return genericBootstrapForm
    return genericBootstrapForm
}


//return genericBootstrapForm
return genericBootstrapForm


 
}

export default AacnForm