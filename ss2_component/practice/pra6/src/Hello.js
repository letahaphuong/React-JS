import React, { Component } from "react";
import swal from 'sweetalert';

class Hello extends Component{
    componentWillUnmount(){
        swal("Hello world!");
    }

    render(){
        return <h1>Hello word!!!</h1>
    }
}

export default Hello;