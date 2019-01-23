import React, { Component } from 'react';
import PropTypes from 'prop-types';
import guidGenerator from '../../function_library/guid_generator.js'

 



class AacnForm extends Component {
    constructor(props){
        super(props)
        this.state={d:guidGenerator()}
    }

    /* check for config prop, if present populate the form */

render(){

    return ( undefined

    )
}

}

AacnForm.proptypes = {
    config:PropTypes.object
}

export default AacnForm