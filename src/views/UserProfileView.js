import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";

class UserProfileView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {}
    }
    this.fetch_user_info = this.fetch_user_info.bind(this);
  }

  fetch_user_info () {
    fetch('http://127.0.0.1:5000/user/' + this.props.location.state.userID, {
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

  componentDidMount() {
      this.fetch_user_info();
  }

  render() {
    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          {/* <PageTitle title={"User Profile " + props.location.state.userID} subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" /> */}
        </Row>
        <Row>
          <Col lg="6" className="offset-md-3">
            <UserDetails userInfo={this.state.userInfo}/>
          </Col>
        </Row>
      </Container>
    )
  }
}


export default UserProfileView;
