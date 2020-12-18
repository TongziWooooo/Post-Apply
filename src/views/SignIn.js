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
} from "shards-react";




import PageTitle from "../components/common/PageTitle";
import SignInForm from "../components/sign/SignInForm";
import SimpleBackdrop from "../components/sign/backdrop";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Container fluid className="main-content-container px-4 pb-4 row justify-content-center">
        {/* Page Header */}
        <Row className="justify-content-center align-items-center">
          <Col>
            <Card className="px-4" style={{ 'padding': '10px', 'height': '300px', 'width': '400px' }}>
              <CardHeader className="border-bottom">
                <h6 className="m-0">登录</h6>
              </CardHeader>
              <SignInForm />
              <SimpleBackdrop />
            </Card>
          </Col>

        </Row>


      </Container>
    )
  }
}

export default SignIn;
