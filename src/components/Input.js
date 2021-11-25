import React from "react";

class Input extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
          <label>
              {this.props.name}:
              <input type = "number" onChange={(e) => this.props.handleInput(e.target.value)}/>
            </label>
            </div>
                );
    }
}
export default Input;