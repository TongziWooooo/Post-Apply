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
import {Link} from "react-router-dom";

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post
  }

  componentDidMount() {
    this.setState({edit: this.props.edit})
  }

  render(){
    return (
      <Card small className="card-post card-post--1">
        <div
          className="card-post__image"
          style={{ backgroundImage: `url(${this.state.backgroundImage})` }}
        >
          <Badge
            pill
            className={`card-post__category bg-${this.state.categoryTheme}`}
          >
            {this.state.category}
          </Badge>
          <div className="card-post__author d-flex">
            <a
              href="#"
              className="card-post__author-avatar card-post__author-avatar--small"
              style={{ backgroundImage: `url('${this.state.authorAvatar}')` }}
            >
            </a>
          </div>
        </div>
        <CardBody>
        <span>@{this.state.author}</span>
        <span> # {this.state.postID}</span>
        <h5 className="card-title">
          <a href="#" className="text-fiord-blue">
            {this.state.title}
          </a>
        </h5>
        <p className="card-text d-inline-block mb-3">{this.state.body}</p>
        <p className="text-muted">结束日期： {this.state.end_date}</p>
        <p>已召集 {this.state.people_approved} / {this.state.people_total}</p>
        <Progress
          theme="success"
          style={{ height: "5px" }}
          className="mb-3"
          value={(this.state.people_approved / this.state.people_total)*100}
        />
          {this.state.edit === true ?
            <Row>
              <Col className="col-md-2 offset-md-10">
                <Link to={{
                  pathname: "/change-post",
                  state: {postID: this.props.post.postID}
                }}>
                  <Button>Edit</Button>
                </Link>
              </Col>
            </Row>
            :
            null
          }
        </CardBody>
      </Card>

    )
  }
}

export default PostDetail;
