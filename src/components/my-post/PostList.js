import React from "react";
import { 
  ListGroup, 
  ListGroupItem,
  Card,
  Row,
  Col,
  Badge,
  CardBody
 } from "shards-react";

 import PostListDropdown from "./PostListDropdown"

 class PostList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    //posts = this.props.posts
    // const posts = [
    //   {
    //     postID: '11111',
    //     title: '找人做作业',
    //     description: '找人做作业真的很难啊找人做作业真的很难啊找人做作业真的很难啊找人做作业真的很难啊',
    //     messages: 5,
    //   },
    //   {
    //     postID: '22222',
    //     title: 'Web大作业',
    //     description: '找人做作业真的很难啊找人做作业真的很难啊找人做作业真的很难啊找人做作业真的很难啊',
    //     messages: 0,
    //   },
    //   {
    //     postID: '33333',
    //     title: '有点难',
    //     description: '找人做作业真的很难啊找人做作业真的很难啊找人做作业真的很难啊找人做作业真的很难啊',
    //     messages: 3,
    //   }
    // ]
    return (
      <Card>
        <CardBody className="p-0">
          <ListGroup>
            {this.props.posts.map((post, idx) => (
              <ListGroupItem key={idx} flush style={{"border-top": "1px solid #D3D3D3"}}>
                <Row>
                  <Col className="">
                    <div># {post.postID}</div>
                  </Col>
                  <Col className="col-6">
                    <div>{post.title}</div>
                    {/* <div>{post.description}</div> */}
                  </Col>
                  <Col className="col-1">
                    <PostListDropdown post_id={post.postID}/>
                  </Col>
                  <Col className="col-1">
                    {post.messages === 0 ? <Badge pill style={{"visibility": "hidden"}}>{post.messages}</Badge> : <Badge pill>{post.messages}</Badge>}
                  </Col>              
                </Row>
              </ListGroupItem>
            ))
            }
          </ListGroup>
        </CardBody>
      </Card>
    )
  }
}

export default PostList;