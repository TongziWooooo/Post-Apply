import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";


class UserProfileRoot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {name: ""}
    }

    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleInfoChange = this.handleInfoChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fetch_user_info () {
    fetch('http://192.168.43.60:5000/user/' + window.sessionStorage.getItem("user_id"), {
      method: 'get',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Authorization':window.sessionStorage.getItem('Authorization'),
        'Content-Type': 'application/json',
      },
    })
      .then(
        res=>{
          if(res.status===200){
            return res.json()
          }else{
            alert("fail to get posts")
          }
        }
      )
      .then((res)=>{
        console.log(res.data);
        this.setState({userInfo: res.data});
        }
      )

  }

  handlePhoneChange(e) {
    // alert(e.target.value)
    let userInfo = this.state.userInfo;
    userInfo.phone = e.target.value;
    this.setState({userInfo: userInfo})
  }

  handlePasswordChange(e) {
    let userInfo = this.state.userInfo;
    userInfo.password = e.target.value;
    this.setState({userInfo: userInfo})
  }

  handleInfoChange(e) {
    let userInfo = this.state.userInfo;
    userInfo.info = e.target.value;
    this.setState({userInfo: userInfo})
  }

  handleSubmit() {
    console.log(this.state.userInfo)

    fetch('http://192.168.43.60:5000/user/' + window.sessionStorage.getItem("user_id"), {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Authorization':window.sessionStorage.getItem('Authorization'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...this.state.userInfo
      })
    }).then(res=>{
      if(res.status===200){
        alert("修改成功！")
      } else {
        alert("fail to get posts")
      }
    })

  }

  componentDidMount() {
    this.fetch_user_info()
  }

  render() {
    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          {/* <PageTitle title={"User Profile " + props.location.state.userID} subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" /> */}
        </Row>
        <Row>
          <Col lg="4">
            <UserDetails userInfo={this.state.userInfo}/>
          </Col>
          <Col lg="8">
            <UserAccountDetails
              userInfo={this.state.userInfo}
              userType={this.props.location.state.userType}
              handlePhoneChange={this.handlePhoneChange}
              handlePasswordChange={this.handlePasswordChange}
              handleInfoChange={this.handleInfoChange}
              handleSubmit={this.handleSubmit}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default UserProfileRoot;
