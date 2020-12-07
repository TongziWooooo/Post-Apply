import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "shards-react";

export default class PostListDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { open: false };
  }

  toggle() {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  }

  render() {
    return (
      <Dropdown open={this.state.open} toggle={this.toggle} size="xs" className="d-table">
        <DropdownToggle theme="white" style={{"padding": "2px 10px 4px 10px"}}>
          <i className="material-icons" style={{"margin": "1px"}}>edit</i>
        </DropdownToggle>
        <DropdownMenu small right>
          <DropdownItem>修改</DropdownItem>
          <DropdownItem>删除</DropdownItem>
          {/* <DropdownItem>Something else here</DropdownItem> */}
        </DropdownMenu>
      </Dropdown>
    );
  }
}