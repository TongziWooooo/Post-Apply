import React from "react";
import {withRouter} from "react-router-dom";
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

  }

  handleUsername (e) {
    this.setState({username: e.target.value});
  }

  handlePassword(e) {
    this.setState({password: e.target.value});
  }

  handleLogin() {
    this.props.history.push({
      pathname: "/"
    })
    // console.log(this.props.history)

  }


  login(){
    var flag = 0
    fetch('http://127.0.0.1:5000/session', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        // "Cookie": "session=4067dbf4-bd0e-43e5-b599-19ba67adebeb",
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "username": this.state.username,
          "password": this.state.password,
        })
      }).then(res => { 
        alert("???")
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
          window.sessionStorage.setItem("user_name","xxx")
          this.props.history.push({
            pathname: "/"
          })
        }
      }
    )
  }


  render() {
    return (
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <FormGroup>
            <FormInput placeholder="用户名" onChange={this.handleUsername} required/>
          </FormGroup>
          <FormGroup>
            <FormInput
              type="password"
              placeholder="密码"
              onChange={this.handlePassword}
              required
            />
          </FormGroup>
        </ListGroupItem>
        <ListGroupItem className="d-flex px-3 border-0">
          <Button theme="accent" size="md" onClick={this.login}>登录</Button>
          <Link to={{pathname: "/sign-up"}} className="ml-auto">
            <Button outline theme="secondary" size="md">注册</Button>
          </Link>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export default withRouter(SignInForm);
