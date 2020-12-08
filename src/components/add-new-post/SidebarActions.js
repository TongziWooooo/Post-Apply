/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import classNames from "classnames";

import PropTypes from "prop-types";
import  { Component } from 'react';
import RangeDatePicker from "../common/RangeDatePicker";
import   "../../assets/range-date-picker.css";


import {
  InputGroup,
  DatePicker,
  InputGroupAddon,
  InputGroupText

} from "shards-react";

import CustomFileUpload from "../components-overview/CustomFileUpload";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
  FormInput
} from "shards-react";


class SidebarActions extends Component{
  constructor(props) {
    super(props);
    this.state = {
      endDate:undefined
    };

    this.handleChandleEndDateChangehange = this.handleEndDateChange.bind(this);
  }
  handleEndDateChange(){
    var a = 1
  }

  render(){
    const classes = classNames( "d-flex", "my-auto", "date-range");
    return( 
    <Card small className="mb-3">
    {/* <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader> */}

    <CardBody className="p-0">
      <ListGroup flush>

        



        <ListGroupItem className="p-3">
          <label>召集时间????</label>


          <InputGroup className={classes}>

          <DatePicker
          size="lg"
          selected={this.state.endDate}
          onChange={this.handleEndDateChange}
          placeholderText="End Date"
          dropdownMode="select"
          className="text-center"
        />
        <InputGroupAddon type="append">
          <InputGroupText>
            <i className="material-icons">&#xE916;</i>
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>















        </ListGroupItem>
        <ListGroupItem className="p-3">
            <label>召集人数</label>
            <FormInput
                    id="feID"
                    value="12"
                    onChange={() => {}}
            />
        </ListGroupItem>
        <ListGroupItem className="p-3">
        <label>介绍图片</label>
          <CustomFileUpload />
        </ListGroupItem>
        <ListGroupItem className="d-flex px-3 border-0">
          <Button outline theme="accent" size="sm">
            <i className="material-icons">save</i> Save Draft
          </Button>
          <Button theme="accent" size="sm" className="ml-auto">
            <i className="material-icons">file_copy</i> Publish
          </Button>
        </ListGroupItem>
      </ListGroup>
    </CardBody>
  </Card>
    )
  }
}

SidebarActions.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

SidebarActions.defaultProps = {
  title: "召集设置"
};

export default SidebarActions;
