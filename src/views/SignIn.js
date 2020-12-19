/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
// import "node_modules/video-react/dist/video-react.css"; // import css
// <link rel="stylesheet" href="/css/video-react.css" />



import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody
} from "shards-react";




import PageTitle from "../components/common/PageTitle";
import SignInForm from "../components/sign/SignInForm";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Container fluid className="main-content-container row justify-content-center">
        {/* Page Header */}
        <Row className="justify-content-center align-items-center">
          <Col>
            <Card className="px-3" style={{'height': '480px', 'width': '350px'}}>
              <CardBody>
                <p style={{'color': '#007BFF', 'font-size': '55px'}} className="text-center mb-1"><i className="material-icons">fingerprint</i></p>
                <h5 className="text-center mb-5">登录</h5>
                <SignInForm />
              </CardBody>
            </Card>
          </Col>

        </Row>


      </Container>
    )
  }
}

export default SignIn;
