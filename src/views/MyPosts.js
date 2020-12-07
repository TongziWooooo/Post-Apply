/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button,
  Progress
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import PostList from "../components/my-post/PostList";

class MyPosts extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="召集令" subtitle="You are wanted" className="text-sm-left" />
        </Row>
        <Row>
          <Col lg="10" sm="12" className="">
            <PostList />
          </Col>
          
        </Row>
      </Container>
    )
  }
}

export default MyPosts;