import React from "react";
import {
  Row,
  Col,
  Form,
  FormGroup,
  FormFeedback,
  FormInput,
  FormSelect,
  Button
} from "shards-react";

const SignUpForm = () => (
  <Col sm="12" md="11" style={{'padding-bottom': '20px'}}>
    <Form>
      <Row form>
        <Col md="6" className="form-group">
          <FormInput
            value="笨笨"
            placeholder="名"
            required
            onChange={() => {}}
          />
          {/* <FormFeedback valid>The first name looks good!</FormFeedback> */}
        </Col>
        <Col md="6" className="form-group">
          <FormInput
            value="猪"
            placeholder="姓"
            required
            onChange={() => {}}
          />
        </Col>
      </Row>
      <FormGroup>
        <FormInput placeholder="用户名" required invalid />
        <FormFeedback>已经被注册了/(ㄒoㄒ)/~~</FormFeedback>
      </FormGroup>
      <FormGroup>
        <FormInput placeholder="证件号码" required />
      </FormGroup>
      <Row form>
        <Col md="6" className="form-group">
          <FormSelect>
              <option>选择省份</option>
              <option>...</option>
          </FormSelect>
        </Col>
        <Col md="6" className="form-group">
          <FormSelect>
              <option>选择城市</option>
              <option>...</option>
          </FormSelect>
        </Col>
      </Row>
      <FormGroup>
        <FormInput 
          placeholder="手机号" 
          required 
          invalid />
        <FormFeedback>输入有误，格式应该为：11位</FormFeedback>
      </FormGroup>
      <FormGroup>
        <FormInput
          type="password"
          placeholder="密码，不少于6位，必须含有两个数字和大小写"
          onChange={() => {}}
          required 
          valid
        />
        <FormFeedback valid>OK!</FormFeedback>
      </FormGroup>
      <FormGroup className="d-flex px-3 border-0">
        <Button theme="accent" size="md">注册</Button>
        <Button outline theme="secondary" size="md" className="ml-auto">登录</Button>
      </FormGroup>
    </Form>
  </Col>
);

export default SignUpForm;
