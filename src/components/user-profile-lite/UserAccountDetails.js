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

const UserAccountDetails = ({ title }) => (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
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
                    value="123456"
                    disabled="disabled"
                    onChange={() => {}}
                  />
                </Col>
                {/* 用户名 */}
                <Col md="6" className="form-group">
                  <label htmlFor="feUserName">用户名</label>
                  <FormInput
                    id="feUserName"
                    value="SecretName"
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
                    value="笨笨"
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
                    value="猪"
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
                    value="44040219294102478"
                    disabled="disabled"
                    onChange={() => {}}
                  />
                </Col>
                <Col md="6" className="form-group">
                  <label htmlFor="feCity">注册城市</label>
                  <FormInput
                    id="feCity"
                    value="北京市 北京市"
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
                    value="2020-02-02 19:29"
                    disabled="disabled"
                    onChange={() => {}}
                  />
                </Col>
                <Col md="6" className="form-group">
                <label htmlFor="feEditTime">修改时间</label>
                  <FormInput
                    id="feEditTime"
                    value="2020-02-02 19:29"
                    disabled="disabled"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Row form>
                {/* 手机号码 */}
                <Col md="6" className="form-group">
                  <label htmlFor="fePhone">手机号码</label>
                  <FormInput
                    id="fePhone"
                    placeholder="手机号码"
                    value="18800000000"
                    onChange={() => {}}
                  />
                </Col>{/* 密码 */}
                <Col md="6" className="form-group">
                  <label htmlFor="fePassword">密码</label>
                  <FormInput
                    type="password"
                    id="fePassword"
                    placeholder="Password"
                    value="EX@MPL#P@$$w0RD"
                    onChange={() => {}}
                    autoComplete="current-password"
                  />
                </Col>
              </Row>
              <Row form>
                {/* Description */}
                <Col md="12" className="form-group">
                  <label htmlFor="feDescription">用户简介</label>
                  <FormTextarea id="feDescription" rows="5" value={'猪笨笨真的很厉害，只要你雇佣他，他就绝对能完成任务'}/>
                </Col>
              </Row>
              <Button theme="accent">Update Account</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserAccountDetails.defaultProps = {
  title: "Account Details"
};

export default UserAccountDetails;
