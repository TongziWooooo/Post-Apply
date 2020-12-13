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

import Constants from "../flux/constants";
import PageTitle from "../components/common/PageTitle";
import PostDetail from "../components/post-detail/PostDetail";
import ApplyPost from "../components/post-detail/ApplyPost";
import ApplyEdit from "../components/post-detail/ApplyEdit"

class ApplyView extends React.Component {
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
      },
      apply: null
    }
    this.onToggle = this.onToggle.bind(this);

  }

  componentDidMount() {
    if (this.props.location.state.type === Constants.APPLY_POST) {
      this.setState({apply: <ApplyPost onToggle={this.onToggle}/>})
    } else {
      this.setState({apply: <ApplyEdit/>})
    }
  }

  onToggle() {
    this.setState({apply: <ApplyEdit/>});
  }

  render(){
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title={"召集令"} subtitle="You are wanted" className="text-sm-left" />
        </Row>
        <Row>
          <Col lg="6" md="6" sm="12" className="">
            <PostDetail post={this.state.post} edit={false}/>
          </Col>
          <Col lg="6" md="6" sm="12" className="">
            {this.state.apply}
             {/*<ApplyPost />*/}
            {/*<ApplyEdit />*/}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ApplyView;
