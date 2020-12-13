import React from "react";
import {
  ListGroup,
  ListGroupItem,
  Card,
  Row,
  Col,
  Badge, Button,
} from "shards-react";
import {Link} from "react-router-dom";
import Constants from "../../flux/constants";

 class PostApplyList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const posts = [
      {
        postID: '11111',
        title: '找人做作业',
        description: '找人做作业真的很难啊找人做作业真的很难啊找人做作业真的很难啊找人做作业真的很难啊',
        status: 0,
      },
      {
        postID: '22222',
        title: 'Web大作业',
        description: '找人做作业真的很难啊找人做作业真的很难啊找人做作业真的很难啊找人做作业真的很难啊',
        status: 1,
      },
      {
        postID: '33333',
        title: '有点难',
        description: '找人做作业真的很难啊找人做作业真的很难啊找人做作业真的很难啊找人做作业真的很难啊',
        status: 2,
      },
      {
        postID: '4444',
        title: '不对呀',
        description: '找人做作业真的很难啊找人做作业真的很难啊找人做作业真的很难啊找人做作业真的很难啊',
        status: 3,
      }
    ]
    return (
      <Card>
        <ListGroup>
          {posts.map((post, idx) => (
            <ListGroupItem key={idx} flush style={{"border-top": "1px solid #D3D3D3"}}>
              <Row>
                <Col className="col-4">
                  <Link to={{
                    pathname: "/apply-view",
                    state: {postID: post.postID, type: Constants.APPLY_EDIT}
                  }} style={{color: "#000"}}>
                    <div># {post.postID}</div>
                  </Link>
                </Col>
                <Col className="col-6">
                  <Link to={{
                    pathname: "/apply-view",
                    state: {postID: post.postID, type: Constants.APPLY_EDIT}
                  }} style={{color: "#000"}}>
                    <div>{post.title}</div>
                  </Link>
                </Col>
                <Col className="col-1">
                  {
                    post.status === 0 ? <Badge ><span><i className="material-icons">message</i></span>{" "}申请中</Badge> :
                      post.status === 1 ? <Badge theme="success"><span><i className="material-icons">check</i></span>{" "}成功</Badge> :
                        post.status === 2 ? <Badge theme="danger"><span><i className="material-icons">clear</i></span>{" "}失败</Badge> :
                          <Badge theme="light"><span><i className="material-icons">unpublished</i></span>{" "}取消</Badge>
                  }
                </Col>
                <Col className="col-1">
                  {
                    post.status === 0 ?
                      <a href="#" style={{'color': 'red'}}>
                        <span className="material-icons" onClick={true}>remove_circle_outline</span>
                      </a>
                      :
                      null
                  }
                </Col>
              </Row>
            </ListGroupItem>
          ))
          }
        </ListGroup>
      </Card>
    )
  }
}

export default PostApplyList;
