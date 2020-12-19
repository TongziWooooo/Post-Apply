/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import SignUpForm from "../components/sign/SignUpForm";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }


  render(){
    return (
      <Container fluid className="main-content-container px-4 pb-4 row justify-content-center">
        <Row className="justify-content-center align-items-center">
          <Card className="px-3">
          {/* <Card className="px-3" style={{'height': '450px', 'width': '350px'}}> */}
              <CardBody>
                <p style={{'color': '#007BFF', 'font-size': '55px'}} className="text-center mb-1"><i className="material-icons">fingerprint</i></p>
                <h5 className="text-center mb-4">注册</h5>
                <Row className="justify-content-center align-items-center" style={{'padding': '10px'}}>
                  <SignUpForm />
                </Row>
              </CardBody>
            {/* </Card> */}
            {/* <CardHeader className="border-bottom">
              <h6 className="m-0">注册账号</h6>
            </CardHeader>
            <Row className="justify-content-center align-items-center" style={{'padding': '10px'}}>
              <SignUpForm />
            </Row> */}
          </Card>
        </Row>
      </Container>
    )
  }
}

export default SignUp;