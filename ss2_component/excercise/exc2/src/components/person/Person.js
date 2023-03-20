import React from "react";
import './Person.css';
import Radium from 'radium';

const Person = (props) => {
   const styles = {
    '@media(min-width: 500':{
        with:'450px'
    }
   }
    return(
        <div className="Person" style={styles}>
            <p onClick={props.click}>This is a {props.name}. I'm {props.age} year old.</p>
            <p>{props.children }</p>
            <input type={'text'} onChange={props.changed} value={props.name}></input>
        </div>
    )
}

// class Person extends Component {
//     render() {
//         return (
//             <p>This is a {this.props.name}. I'm {this.props.age} year old.</p>
//         );
//     }
// }
export default Radium(Person);