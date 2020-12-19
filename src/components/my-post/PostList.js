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
import {Link} from "react-router-dom";

 class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.value = "-1"
    this.deletePost = this.deletePost.bind(this)
  }

  deletePost(){
    // alert(this.value)
    fetch('http://10.128.222.68:5000/token'+"?token_id="+this.value, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
               'Accept': 'application/json',
        'Authorization':window.sessionStorage.getItem('Authorization'),

        // 'Authorization':window.sessionStorage.getItem('Authorization'),
        'Content-Type': 'application/json',
      },
      }).then(()=> {setTimeout(200,this.props.forceRender())

    })
  }

  render() {
    // posts = this.props.posts
    const posts = [
      {
        postID: '11111',
        title: '找人做作业',
        description: '找人做作业真的很难啊找人做作业真的很难啊找人做作业真的很难啊找人做作业真的很难啊',
        messages: 5,
      },
      {
        postID: '22222',
        title: 'Web大作业',
        description: '找人做作业真的很难啊找人做作业真的很难啊找人做作业真的很难啊找人做作业真的很难啊',
        messages: 0,
      },
      {
        postID: '33333',
        title: '有点难',
        description: '找人做作业真的很难啊找人做作业真的很难啊找人做作业真的很难啊找人做作业真的很难啊',
        messages: 3,
      }
    ]
    return (
      <Card>
        <ListGroup>
          {this.props.posts.map((post, idx) => (
            <ListGroupItem key={idx} flush style={{"border-top": "1px solid #D3D3D3"}}>
              <Row>
                <Col className="col-4">
                  <Link to={{pathname: "/manage-post", state: {postID: post.postID}}} style={{color: "#000"}}>
                    <div># {post.postID}</div>
                  </Link>
                </Col>
                <Col className="col-7">
                  <Link to={{pathname: "/manage-post", state: {postID: post.postID}}} style={{color: "#000"}}>
                    <div>{post.title}</div>
                  </Link>
                  {/* <div>{post.description}</div> */}
                </Col>
                {/*<Col className="col-1">*/}
                {/*  <PostListDropdown post_id={post.postID}/>*/}
                {/*</Col>*/}
                <Col className="col-1">
                  {
                    post.messages !== 0 ?
                    <Link to={{pathname: "/manage-post", state: {postID: post.postID}}} style={{color: "#000"}}>
                      <Badge pill>{post.messages}</Badge>
                    </Link>
                    : post.cur_num === 0 && post.messages=== 0?
                    <a  style={{'color': 'red'}}>
                      <span className="material-icons"
                            onClick={()=>{this.value = post.postID
                                this.deletePost()
                            }} value={post.postID}>remove_circle_outline</span>
                    </a>
                    :post.state === "已完成"?

                    <a href="#" style={{'color': 'green'}}>
                      <span className="material-icons"
                            onClick={true}>check_circle_outline</span>
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

export default PostList;
