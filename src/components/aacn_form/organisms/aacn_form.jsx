import React, { Component } from 'react';
import Button from '@material-ui/core/Button';



class AacnForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.renderForm = this.renderForm.bind(this)
    }
    renderForm(){
        let id=0;
        let tot= [];
        let entries= this.props.config.fields
        console.log(entries.length)
    tot = entries.map((el,i)=>(<label value={el.label} key={id}>{el.label} <input type={el.type} size={el.size} placeholder={el.placeholder}/></label>) )
        console.log("My totl", tot)
        if(this.props.config.buttons){
         for(let i=0;i<this.props.config.buttons.length;i++){
             console.log("buttons detected")
             tot.push(<Button variant="contained" color="primary">{this.props.config.buttons[i].name}</Button>)
         }
        }
        return tot
    }
    render() { 
        return (
            <>
            <form >
        {this.renderForm()}
            </form>
            </>
        );
    }
}
 
export default AacnForm;