import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";
import {Constants} from "../../flux";


class UserAccountDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: "",
      password: "",
      info: ""
    }

  }

  render() {
    return (
      <Card small className="mb-4">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Account Details</h6>
        </CardHeader>
        <ListGroup flush>
          <ListGroupItem className="p-3">
            <Row>
              <Col>
                <Form>
                  <Row form>
                    {/* 用户id */}
                    <Col md="6" className="form-group">
                      <label htmlFor="feUserID">用户ID</label>
                      <FormInput
                        id="feUserID"
                        value={this.props.userInfo.user_id}
                        disabled="disabled"
                        onChange={() => {}}
                      />
                    </Col>
                    {/* 用户名 */}
                    <Col md="6" className="form-group">
                      <label htmlFor="feUserName">用户名</label>
                      <FormInput
                        id="feUserName"
                        value={this.props.userInfo.user_name}
                        disabled="disabled"
                        onChange={() => {}}
                      />
                    </Col>
                  </Row>
                  <Row form>
                    {/* First Name */}
                    <Col md="6" className="form-group">
                      <label htmlFor="feFirstName">名</label>
                      <FormInput
                        id="feFirstName"
                        placeholder="First Name"
                        value={this.props.userInfo.name.split(" ")[0]}
                        disabled="disabled"
                        onChange={() => {}}
                      />
                    </Col>
                    {/* Last Name */}
                    <Col md="6" className="form-group">
                      <label htmlFor="feLastName">姓</label>
                      <FormInput
                        id="feLastName"
                        placeholder="Last Name"
                        value={this.props.userInfo.name.split(" ")[1]}
                        disabled="disabled"
                        onChange={() => {}}
                      />
                    </Col>
                  </Row>
                  <Row form>
                    <Col md="6" className="form-group">
                      <label htmlFor="feEmail">证件号码（身份证）</label> {/* 这里把这个type改成可变？ */}
                      <FormInput
                        id="feIdentity"
                        value={this.props.userInfo.id_no}
                        disabled="disabled"
                        onChange={() => {}}
                      />
                    </Col>
                    <Col md="6" className="form-group">
                      <label htmlFor="feCity">注册城市</label>
                      <FormInput
                        id="feCity"
                        value={this.props.userInfo.city}
                        disabled="disabled"
                        onChange={() => {}}
                      />
                    </Col>
                  </Row>
                  <Row form>
                    <Col md="6" className="form-group">
                      <label htmlFor="feRegisterTime">注册时间</label>
                      <FormInput
                        id="feRegisterTime"
                        value={this.props.userInfo.reg_time}
                        disabled="disabled"
                        onChange={() => {}}
                      />
                    </Col>
                    <Col md="6" className="form-group">
                      <label htmlFor="feEditTime">修改时间</label>
                      <FormInput
                        id="feEditTime"
                        value={this.props.userInfo.update_time}
                        disabled="disabled"
                        onChange={() => {}}
                      />
                    </Col>
                  </Row>
                  <Row form>
                    {/* 手机号码 */}
                    {/*TODO: 手机号、用户名、name没传过来*/}
                    <Col md="6" className="form-group">
                      <label htmlFor="fePhone">手机号码</label>
                      <FormInput
                        id="fePhone"
                        placeholder="手机号码"
                        disabled={this.props.userType === Constants.MANAGER}
                        value={this.props.userInfo.phone}
                        onChange={this.props.handlePhoneChange}
                      />
                    </Col>{/* 密码 */}
                    <Col md="6" className="form-group">
                      <label htmlFor="fePassword">密码</label>
                      <FormInput
                        type="password"
                        id="fePassword"
                        placeholder="Enter when you want to change."
                        disabled={this.props.userType === Constants.MANAGER}
                        value={this.props.userInfo.password}
                        onChange={this.props.handlePasswordChange}
                        autoComplete="current-password"
                      />
                    </Col>
                  </Row>
                  <Row form>
                    {/* Description */}
                    <Col md="12" className="form-group">
                      <label htmlFor="feDescription">用户简介</label>
                      <FormTextarea
                        id="feDescription" rows="5"
                        disabled={this.props.userType === Constants.MANAGER}
                        value={this.props.userInfo.info}
                        onChange={this.props.handleInfoChange}
                      />
                    </Col>
                  </Row>
                  {
                    this.props.userType === Constants.USER ?
                    <Button theme="accent" onClick={this.props.handleSubmit}>Update Account</Button>
                    :
                    null
                  }
                </Form>
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      </Card>
    )
  }
}

export default UserAccountDetails;

