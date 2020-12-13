import React from "react";
import {
  Row,
  Col,
  Form,
  FormGroup,
  FormFeedback,
  FormInput,
  Button,
  ListGroup,
  ListGroupItem
} from "shards-react";

const SignInForm = () => (
  <ListGroup flush>
    <ListGroupItem className="p-3">
      <FormGroup>
        <FormInput placeholder="用户名" required/>
      </FormGroup>
      <FormGroup>
        <FormInput
          type="password"
          placeholder="密码"
          onChange={() => { }}
          required
        />
      </FormGroup>
    </ListGroupItem>
    <ListGroupItem className="d-flex px-3 border-0">
      <Button theme="accent" size="md">登录</Button>
      <Button outline theme="secondary" size="md" className="ml-auto">注册</Button>
    </ListGroupItem>
  </ListGroup>
);

export default SignInForm;
