import React from "react";
import {withRouter} from "react-router-dom";
import "../../../node_modules/video-react/dist/video-react.css"; // import css
import { Player, ControlBar, BigPlayButton, VolumeMenuButton, PlaybackRateMenuButton, ClosedCaptionButton } from 'video-react';

import {
  Row,
  Col,
  Form,
  FormGroup,
  FormFeedback,
  FormInput,
  Button,
  ButtonGroup,
  ListGroup,
  ListGroupItem
} from "shards-react";
import {Link} from "react-router-dom";

import Constants from "../../flux/constants";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null
    }

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.login = this.login.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  handleUsername (e) {
    this.setState({username: e.target.value});
  }

  handlePassword(e) {
    this.setState({password: e.target.value});
  }

  handleLogin() {
    this.props.history.push({
      pathname: "/blog-posts"
    })
    // console.log(this.props.history)

  }

  onKeyDown(e) {
    if (e.keyCode === 13) {
      this.login()
    }
  }


  login(){
    // if (this.state.username === "admin") {
    //   if (this.state.password === "admin") {
    //     this.props.history.push({
    //       pathname: "/data-overview"
    //     })
    //   } else {
    //     alert("密码错误")
    //   }
    //
    // } else {
    // }
      var flag = 0
      fetch('http://10.128.222.68:5000/session', {
        method: 'POST',
        credentials: 'include',
        headers: {
                 'Accept': 'application/json',
        // 'Authorization':window.sessionStorage.getItem('Authorization'),// "Cookie": "session=4067dbf4-bd0e-43e5-b599-19ba67adebeb",
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "username": this.state.username,
          "password": this.state.password,
        })
      }).then(res => {
        if(res.status===200)
        {
          flag = 1
          console.log("为什么")
          return res.json()
        } else{
          alert("密码错误")
        }
      })
        .then(res =>{         //ref
            if(flag === 1 ){
              console.log(res["data"])
              window.sessionStorage.setItem("Authorization","JWT " + res["data"]["token"])
              window.sessionStorage.setItem("user_id",res["data"]["user_id"])
              window.sessionStorage.setItem("user_name",res['data']['user_name'])

              if (this.state.username === "admin") {
                this.props.history.push({
                  pathname: "/data-overview"
                })
              } else {
                this.props.history.push({
                  pathname: "/blog-posts"
                })
              }

            }
          }
        )

  }


  render() {
    return (
      <ListGroup flush onKeyDown={this.onKeyDown} tabIndex="0">
        <ListGroupItem className="p-1">
          <FormGroup>
          <label>用户名</label>
            <FormInput placeholder="用户名" onChange={this.handleUsername} required/>
          </FormGroup>
          <FormGroup>
            <label>密码</label>
            <FormInput
              type="password"
              placeholder="密码"
              onChange={this.handlePassword}
              required
            />
          </FormGroup>
        </ListGroupItem>
        <ListGroupItem className="d-flex px-3 border-0" >
          <Button pill size="md" className="m-auto" onClick={this.login}>登录</Button>
          <Link to={{pathname: "/sign-up"}} className="m-auto">
            <Button pill theme="secondary" size="md">注册</Button>
          </Link>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export default withRouter(SignInForm);
