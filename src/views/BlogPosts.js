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
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import PostDetail from "../components/post-detail/PostDetail.js"

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts:[],
      // First list of posts.
      // PostsListOne: 
      PostsListOne: [
        {
          backgroundImage: require("../images/content-management/1.jpeg"),
          category: "Business",
          categoryTheme: "dark",
          author: "Anna Kunis",
          authorAvatar: require("../images/avatars/1.jpg"),
          title: "Conduct at an replied removal an amongst",
          body:
            "However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...",
          date: "2021.01.01"
        },
        {
          backgroundImage: require("../images/content-management/2.jpeg"),
          category: "Travel",
          categoryTheme: "info",
          author: "James Jamerson",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Off tears are day blind smile alone had ready",
          body:
            "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
          date: "2021.01.01"
        },
        {
          backgroundImage: require("../images/content-management/3.jpeg"),
          category: "Technology",
          categoryTheme: "royal-blue",
          author: "Jimmy Jackson",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Difficult in delivered extensive at direction",
          body:
            "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
          date: "2021.01.01"
        },
        {
          backgroundImage: require("../images/content-management/4.jpeg"),
          category: "Business",
          categoryTheme: "warning",
          author: "John James",
          authorAvatar: require("../images/avatars/3.jpg"),
          title: "It so numerous if he may outlived disposal",
          body:
            "How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved ready road market resolution...",
          date: "2021.01.01"
        }
      ],


      // Third list of posts.
 

      // Fourth list of posts.
    
    };
  }



  fetch_posts = ()=>{
    fetch('http://127.0.0.1:5000/token_list', {
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
      .then((res)=>{
        // 这里不显示post描述了 因为是富文本，在展示页面会显示标签，很麻烦
        console.log(res.data.token_list)
        var arr = []
        for(var i in res.data.token_list){
          console.log(res.data.token_list[i])
          var dic = {
            backgroundImage: require("../images/content-management/10.jpeg"),
            author: res.data.token_list[i].send_user,
            authorUrl: "#",
            category: res.data.token_list[i].token_type,
            categoryUrl: "#",
            title: res.data.token_list[i].token_name,
            // body:  res.data.token_list[i].desc,
            date: res.data.token_list[i].end_time 
          }
          arr.push(dic)
        }
      

        this.setState({posts:arr}
          ,()=>{
 
      })
      // console.log(post)
        }
      )


  }
  componentDidMount(){
    this.fetch_posts()
  }

  render() {
    const {
      PostsListOne,
      PostsListTwo,
      PostsListThree,
      PostsListFour
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="召集令" subtitle="You are wanted" className="text-sm-left" />
        </Row>

        {/* First Row of Posts */}
        <Row>
          {this.state.posts.map((post, idx) => (
            <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url(${post.backgroundImage})` }}
                >
                  <Badge
                    pill
                    className={`card-post__category bg-${post.categoryTheme}`}
                  >
                    {post.category}
                  </Badge>
                  <div className="card-post__author d-flex">
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                    </a>
                  </div>
                </div>
                <CardBody>
                <span>{post.author}</span>
                  <h5 className="card-title">
                    <a href="/apply-view" className="text-fiord-blue">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text d-inline-block mb-3">{post.body}</p>
                  <span className="text-muted">结束日期： {post.date}</span>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    );
  }
}

export default BlogPosts;
