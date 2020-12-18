import React from "react";
import {Popover, PopoverBody} from "shards-react";

class Tpopover extends React.Component{
  constructor(props){
    super(props)
    this.state={
      show:true
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle(){
    if(this.state.show)
    {this.setState({show:false})}
    else{
      this.setState({show:true})
    }

    }
  render(){
    return(
      <div>
        <p>!!!!!!!!</p>
      <Popover
        placement="bottom"
        open={this.state.show}
        toggle={this.toggle}
        // value={this.pro}
        target="#popover-1"
      >
        <PopoverBody>
          {this.props.desc?this.props.desc:"empty"}
        </PopoverBody>
      </Popover>
      </div>
    )
  }
}

export default Tpopover;

