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
                  <label htmlFor="feFirstName">用户ID</label>
                  <FormInput
                    id="feID"
                    value="123456"
                    disabled="disabled"
                    onChange={() => {}}
                  />
                </Col>
                {/* 用户名 */}
                <Col md="6" className="form-group">
                  <label htmlFor="feLastName">用户名</label>
                  <FormInput
                    id="feName"
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
                {/* Email */}
                <Col md="6" className="form-group">
                  <label htmlFor="feEmail">证件号码</label>
                  <FormInput
                    id="feIdentity"
                    placeholder="证件号码"
                    value="44040219294102478"
                    disabled="disabled"
                    onChange={() => {}}
                  />
                </Col>
                {/* City */}
                <Col md="6" className="form-group">
                  <label htmlFor="feCity">注册城市</label>
                  <FormInput
                    id="feCity"
                    value="北京"
                    disabled="disabled"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Row form>
                {/* 手机号码 */}
                <Col md="6" className="form-group">
                  <label htmlFor="fePassword">手机号码</label>
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
