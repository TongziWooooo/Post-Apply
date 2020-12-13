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
    console.log(this.props.history)
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
          <Button theme="accent" size="md" onClick={this.handleLogin}>登录</Button>
          <Link to={{pathname: "/sign-up"}} className="ml-auto">
            <Button outline theme="secondary" size="md">注册</Button>
          </Link>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export default withRouter(SignInForm);
