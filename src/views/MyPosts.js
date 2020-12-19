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
  state={
    post:[]
  }
  constructor(props) {
    super(props);
    // this.setState({post:["xxx"]})
    this.fetch_posts = this.fetch_posts.bind(this)
    this.forceRender = this.forceRender.bind(this)
  }

  fetch_posts = ()=>{
    fetch('http://10.128.222.68:5000/token'+"?user_id="+window.sessionStorage.getItem("user_id"), {
      method: 'get',
      credentials: 'include',
      headers: {
               'Accept': 'application/json',
        'Authorization':window.sessionStorage.getItem('Authorization'),
        'Content-Type': 'application/json',
      },
      })
      .then(
        res=>{
          if(res.status==200){
            return res.json()
          }else{
            alert("fail to get posts")
          }
        }
      )
      .then((res)=>{this.setState({post:res.data})
      console.log(res.data)}
      )


  }
  componentDidMount(){
    this.fetch_posts()
  }

  forceRender(){
    this.fetch_posts()
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
            <PostList forceRender={this.forceRender} posts={this.state.post} edit={true}/>
          </Col>

        </Row>
      </Container>
    )
  }
}

export default MyPosts;
