import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../components/layout/MainFooter";

class NoBarLayout extends React.Component {
  constructor(props) {
    super(props);
  }

    render() {
      return  (
      <Container fluid>
      <Row>
        {!this.props.noSidebar && <MainSidebar />}
        <Col
          className="main-content p-0"
          // lg={{ size: 10, offset: 2 }}
          // md={{ size: 9, offset: 3 }}
          sm="12"
          tag="main"
        >
          {!this.props.noNavbar && <MainNavbar />}
          {this.props.children}
          {!this.props.noFooter && <MainFooter />}
        </Col>
      </Row>
    </Container>
    )  
  }
} 
 

NoBarLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noSidebar: PropTypes.bool,
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

NoBarLayout.defaultProps = {
  noSidebar: true,
  noNavbar: true,
  noFooter: true
};

export default NoBarLayout;
