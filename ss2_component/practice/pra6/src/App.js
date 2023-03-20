import React, { Component } from "react";
import Hello from "./Hello";
import swal from "sweetalert";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      display: true
    };
  }

  delete = () => {
    this.setState({display: false})
    swal("Thông báo!", "Xoá thành công", "success");
  }

  render(){
    let comp;
    if(this.state.display){
      comp = 'Hello';
    }
    return(
      <div style={{textAlign: 'center'}}>
        {comp}
        <button onClick={this.delete}>
          Xoá Component
        </button>
      </div>
    )
  }
}

export default App;