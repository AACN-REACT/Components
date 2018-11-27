import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';




class AacnForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.renderForm = this.renderForm.bind(this)
    }
    //check to see if props.config passed in , extract variables from props.config
    //const {type,styling,fields }  = this.props.config;
    // Using an if statement to check and default config variables, avoided ternary just in case doesnt compile nicely to es5 for ie11
    //check type

    // validateConfig(config){
    // let errorMsg = [];
    // if(!config.type) {const type="address"} 
    // else if (type !== "address" && type !== "custom" && type !== "payment") errorMsg.push( ` 'type' option needs to be either 'address' , 'payment' or 'custom', you passed value, value ${type} please check spelling`)
    // //check styling 
    // if(!styling) styling= "bootstrap"
    // else if(styling !== "bootstrap" && styling && "material" || typeof styling !== 'object') throw `'styling' option needs to be either 'bootstrap' , 'material' or a styles object, you passed value ${styling}, please check spelling`;
    // // check fields
    // if(!fields) fields= addressFields
    // else if (!Array.isArray(fields)) throw `'fields' option is not  `;
    // }
    renderForm(){
        let id=0;
        let tot= [];
        let entries= this.props.config.fields
        console.log(entries.length)
    tot = entries.map((el,i)=>(<label value={el.label} key={id}>{el.label} <Input type={el.type} size={el.size} floatingLabel={true} placeholder={el.placeholder}/></label>) )
        console.log("My totl", tot)
        if(this.props.config.buttons){
         for(let i=0;i<this.props.config.buttons.length;i++){
             console.log("buttons detected")
             tot.push(<Button size="small" variant="contained" color="pink" >{this.props.config.buttons[i].name}</Button>)
         }
        }
        return tot
    }
    render() { 
        return (
            <>
            <FormControl>
        {this.renderForm()}
            </FormControl>
            </>
        );
    }
}
 
export default AacnForm;