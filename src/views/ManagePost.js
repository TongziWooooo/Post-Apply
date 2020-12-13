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
import PostDetail from "../components/post-detail/PostDetail";
import ApplyList from "../components/my-post/ApplyList";

class ManagePost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {
        postID: '10101',
        backgroundImage: require("../images/content-management/1.jpeg"),
        category: "技术交流",
        categoryTheme: "dark",
        author: "猪笨笨",
        authorAvatar: require("../images/avatars/1.jpg"),
        title: "找人一起探讨怎么做Web大作业",
        body:
          "这个作业有点难度，大佬们帮帮忙吧。这个作业有点难度，大佬们帮帮忙吧。这个作业有点难度，大佬们帮帮忙吧。这个作业有点难度，大佬们帮帮忙吧。",
        end_date: "2021.01.01",
        people_total: 12,
        people_approved: 2,
        status: 1
      }
    }
  }

  render(){
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title={"召集令" + this.props.location.state.postID} subtitle="You are wanted" className="text-sm-left" />
        </Row>
        <Row>
          <Col lg="6" md="6" sm="12" className="">
            <PostDetail post={this.state.post} edit={true}/>
          </Col>
          <Col lg="6" md="6" sm="12" className="">
            <ApplyList />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ManagePost;
