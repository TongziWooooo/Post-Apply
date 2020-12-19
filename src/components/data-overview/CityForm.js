

import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import "../../../node_modules/video-react/dist/video-react.css"; // import css
import { Player, ControlBar, BigPlayButton, VolumeMenuButton, PlaybackRateMenuButton, ClosedCaptionButton } from 'video-react';

import {Button, Card, CardBody, Col, Container, FormSelect, Row} from "shards-react";
class CityForm extends Component {
  constructor(props){
      super(props)


  }


  render(){

    return (

      this.props.city_form
    )
  }

}

export default CityForm;
