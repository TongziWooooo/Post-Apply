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
import {Link, withRouter} from "react-router-dom";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      idNumber: "",
      city: "选择城市",
      phoneNumber: "",
      password: "",

      cityOptions: [],

      validUsername: true,
      validIdNumber: true
    }

    this.cityDict = {
      "选择省份": [],
      "北京市": ["北京市"],
      "广东省": ["广州市", "深圳市", "中山市"],
      "福建省": ["莆田市", "厦门市", "福州市"]
    }

    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleIdNumber = this.handleIdNumber.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleProvince = this.handleProvince.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  checkRequired() {
    return this.state.firstName &&
      this.state.lastName &&
      this.state.username &&
      this.state.idNumber &&
      this.state.city !== "选择城市" &&
      this.state.phoneNumber &&
      this.state.password
  }

  handleFirstName(e) {
    this.setState({firstName: e.target.value});
  }

  handleLastName(e) {
    this.setState({lastName: e.target.value});
  }

  handleUsername(e) {
    this.setState({username: e.target.value});
  }

  handleIdNumber(e) {
    this.setState({idNumber: e.target.value});
  }

  handleCity(e) {
    this.setState({city: e.target.value});
  }

  handlePhoneNumber(e) {
    this.setState({phoneNumber: e.target.value});
  }

  handlePassword(e) {
    this.setState({password: e.target.value});
  }

  handleProvince(e) {
    this.setState({cityOptions: this.cityDict[e.target.value]});
  }

  handleSubmit() {
    // 记得修改state里面那两个valid
    // firstName: "",
    //   lastName: "",
    //   username: "",
    //   idNumber: "",
    //   city: "",
    //   phoneNumber: "",
    //   password: "",
    if (this.checkRequired()) {
      fetch("http://10.128.222.68:5000/users",
        {
          method:"POST",
          credentials: 'include',
          headers: {
                   'Accept': 'application/json',
        // 'Authorization':window.sessionStorage.getItem('Authorization'),
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "firstName":this.state.firstName,
            "lastName":this.state.lastName,
            "username":this.state.username,
            "idNumber":this.state.idNumber,
            "city":this.state.city,
            "password":this.state.password,
            "phoneNumber":this.state.phoneNumber,
          })
        }

      ).then(res => {
        if (res.status === 200) {
          this.props.history.push({
            pathname: "/sign-in"
          })
        } else {
          alert("用户名或身份证号已注册！");
        }
      })
    } else {
      alert("信息未填写完整，请重新填写！");
    }
  }

  checkPhoneNumber() {
    let reg = /^[\d]*$/;
    let phoneNumber = this.state.phoneNumber;
    return (phoneNumber.length === 0 || phoneNumber.length === 11) && reg.test(phoneNumber);
  }

  checkPassword() {
    let upper = false;
    let lower = false;
    let numCount = 0;
    let length = 0;
    let regNum = /^[\d]*$/
    let regLower = /^[a-z]*$/
    let regUpper = /^[A-Z]*$/
    this.state.password.split("").forEach(ch => {
      if (regNum.test(ch)) {
        numCount++;
      } else if (regLower.test(ch)) {
        lower = true;
      } else if (regUpper.test(ch)) {
        upper = true;
      }
      length++;
    })
    console.log(this.state.password.length);
    return (upper && lower && numCount >= 2 && length >= 6) || length === 0;
  }

  render() {
    return (
      <Col sm="12" md="11" style={{'padding-bottom': '20px'}}>
        <Form>
          <Row form>
            <Col md="6" className="form-group">
              <FormInput
                placeholder="名"
                required
                onChange={this.handleFirstName}
                invalid={false}
                valid={false}
              />
              {/* <FormFeedback valid>The first name looks good!</FormFeedback> */}
            </Col>
            <Col md="6" className="form-group">
              <FormInput
                placeholder="姓"
                required
                onChange={this.handleLastName}
                invalid={false}
                valid={false}
              />
            </Col>
          </Row>
          <FormGroup>
            <FormInput
              placeholder="用户名"
              onChange={this.handleUsername}
              required
              invalid={!this.state.validUsername}
              valid={false}
            />
            <FormFeedback>已经被注册了/(ㄒoㄒ)/~~</FormFeedback>
          </FormGroup>
          <FormGroup>
            <FormInput
              placeholder="证件号码"
              onChange={this.handleIdNumber}
              required
              invalid={!this.state.validIdNumber}
              valid={false}
            />
            <FormFeedback>您的证件号码已注册别的账号</FormFeedback>
          </FormGroup>
          <Row form>
            <Col md="6" className="form-group">
              <FormSelect onChange={this.handleProvince}>
                <option>选择省份</option>
                <option>北京市</option>
                <option>广东省</option>
                <option>福建省</option>
              </FormSelect>
            </Col>
            <Col md="6" className="form-group">
              <FormSelect onChange={this.handleCity}>
                <option>选择城市</option>
                {
                  this.state.cityOptions.map(city => {
                    return <option value={city}>{city}</option>
                  })
                }
              </FormSelect>
            </Col>
          </Row>
          <FormGroup>
            <FormInput
              placeholder="手机号"
              onChange={this.handlePhoneNumber}
              required
              invalid={!this.checkPhoneNumber()}
              valid={false}
            />
            <FormFeedback>输入有误，格式应该为：11位数字</FormFeedback>
          </FormGroup>
          <FormGroup>
            <FormInput
              type="password"
              placeholder="密码"
              onChange={this.handlePassword}
              required
              invalid={!this.checkPassword()}
              valid={false}
            />
            <FormFeedback>至少 6 位，2 个数字，1 个大写，1 个小写</FormFeedback>
          </FormGroup>
          <FormGroup className="d-flex px-3 pt-4 border-0">
            <Button pill size="md" onClick={this.handleSubmit}>注册</Button>
            <Button pill theme="secondary" size="md" className="ml-auto" tag={Link} to={"/sign-in"}>返回</Button>
          </FormGroup>
        </Form>
      </Col>
    );
  }
}

export default withRouter(SignUpForm);

