import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";
import {Constants} from "../flux";

class UserProfileLite extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {}
    }

  }

  fetch_user_info () {
    fetch('http://127.0.0.1:5000/user/' + window.sessionStorage.getItem("user_id"), {
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
          let temp = res.data;
          temp.password = "";
          this.setState({userInfo: temp});
        }
      )

  }

  componentDidMount() {
    this.fetch_user_info()
  }

  render() {
    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle title={"User Profile " + this.props.location.state.userID} subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
        </Row>
        <Row>
          {/*<Col lg="4" className="offset-md-4">*/}
          {/*  <UserDetails />*/}
          {/*</Col>*/}
          <Col lg="4">
            <UserDetails userInfo={this.state.userInfo}/>
          </Col>
          <Col lg="8">
            <UserAccountDetails
              userInfo={this.state.userInfo}
              userType={Constants.MANAGER}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default UserProfileLite;
