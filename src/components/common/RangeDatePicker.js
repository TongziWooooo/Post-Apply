import React from "react";
import classNames from "classnames";
import {
  InputGroup,
  DatePicker,
  InputGroupAddon,
  InputGroupText
} from "shards-react";

import "../../assets/range-date-picker.css";
var formatDate = function (date) {
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  var minute = date.getMinutes();
  minute = minute < 10 ? ('0' + minute) : minute;
  var second= date.getSeconds();
  second = minute < 10 ? ('0' + second) : second;
  return y + '-' + m + '-' + d;
};

class RangeDatePicker extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   startDate: undefined,
    //   endDate: undefined
    // };

    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
  }

  handleStartDateChange(value) {
    this.props.handleStartDateChange(value,formatDate(value))
    // this.setState({
    //   ...this.state,
    //   ...{ startDate: new Date(value) }
    // });
  }

  handleEndDateChange(value) {
    this.props.handleEndDateChange(value,formatDate(value))
    // this.setState({
    //   ...this.state,
    //   ...{ endDate: new Date(value) }
    // });
  }

  render() {
    const { className } = this.props;
    const classes = classNames(className, "d-flex", "my-auto", "date-range");

    return (
      <InputGroup className={classes}>
        <DatePicker
          size="sm"
          selected={this.props.start_date}
          onChange={this.handleStartDateChange}
          placeholderText="Start Date"
          dropdownMode="select"
          className="text-center"
        />
        <DatePicker
          size="sm"
          selected={this.props.end_date}
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
    );
  }
}

export default RangeDatePicker;
