import React, { Component } from 'react';


class AacnForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.renderForm = this.renderForm.bind(this)
    }
    renderForm(){
        let id=0
        let tot= [];
        let num = this.props.num;
        console.log(num)
        while(num>0){
            tot.push(<input type="text" key={id} />)
           id++
            num--
        }
        console.log("My totl", tot)
        return tot
    }
    render() { 
        return (
            <>
        {this.renderForm()}
            </>
        );
    }
}
 
export default AacnForm;