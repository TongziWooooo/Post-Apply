/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Badge,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  FormSelect, ListGroup
} from "shards-react";

import Constants from "../flux/constants";
import PageTitle from "../components/common/PageTitle";
import PostDetail from "../components/post-detail/PostDetail.js"
import {Link} from "react-router-dom";

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayPosts: [],
      query: "",
      // First list of posts.
      // PostsListOne:
      PostsListOne: [
        {
          postID: 1,
          backgroundImage: require("../images/content-management/1.jpeg"),
          category: "Business",
          categoryTheme: "dark",
          author: "Anna Kunis",
          authorAvatar: require("../images/avatars/1.jpg"),
          title: "Conduct at an replied removal an amongst",
          // body:
          //   "However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...",
          date: "2021.01.01"
        },
        {
          postID: 2,
          backgroundImage: require("../images/content-management/2.jpeg"),
          category: "Travel",
          categoryTheme: "info",
          author: "James Jamerson",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Off tears are day blind smile alone had ready",
          // body:
          //   "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
          date: "2021.01.01"
        },
        {
          postID: 3,
          backgroundImage: require("../images/content-management/3.jpeg"),
          category: "Technology",
          categoryTheme: "royal-blue",
          author: "Jimmy Jackson",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Difficult in delivered extensive at direction",
          // body:
          //   "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
          date: "2021.01.01"
        },
        {
          postID: 4,
          backgroundImage: require("../images/content-management/4.jpeg"),
          category: "Business",
          categoryTheme: "warning",
          author: "John James",
          authorAvatar: require("../images/avatars/3.jpg"),
          title: "It so numerous if he may outlived disposal",
          // body:
          //   "How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved ready road market resolution...",
          date: "2021.01.01"
        },
        {
          postID: 5,
          backgroundImage: require("../images/content-management/3.jpeg"),
          category: "Technology",
          categoryTheme: "royal-blue",
          author: "Jimmy Jackson",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Difficult in delivered extensive at direction",
          // body:
          //   "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
          date: "2021.01.01"
        },
      ],


      // Third list of posts.


      // Fourth list of posts.

    };

    this.handleTypeSelect = this.handleTypeSelect.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }



  fetch_posts = ()=>{
    fetch('http://10.128.222.68:5000/token_list?_id='+window.sessionStorage.getItem("user_id"), {
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
          if(res.status===200){
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
              postID: res.data.token_list[i].token_id,
              category: res.data.token_list[i].token_type,
              categoryUrl: "#",
              title: res.data.token_list[i].token_name,
              // body:  res.data.token_list[i].desc,
              date: res.data.token_list[i].end_time,
              has_req: res.data.token_list[i].has_req
            }
            console.log(dic.postID)
            arr.push(dic)
          }


          this.posts = arr;
          this.setState({displayPosts: arr});
          //   this.setState({posts:arr}
          //     ,()=>{
          //
          // })
          // console.log(post)


        }
      )


  }

  handleTypeSelect = (e) => {
    // alert(e.target.value);
    let temp_posts;
    if (e.target.value === "所有类别") {
      temp_posts = this.posts.filter(post => {
        return this.isQualifiedPosts(this.state.query, post.title);
      })
    } else {
      temp_posts = this.posts.filter(post => {
        return post.category === e.target.value && this.isQualifiedPosts(this.state.query, post.title);
      })
      // console.log(temp_posts)
    }
    this.setState({displayPosts: temp_posts});
  }

  handleQuery(e) {
    this.setState({query: e.target.value});
  }

  isQualifiedPosts(query, title) {
    let flag = true;
    query.split(" ").forEach(str => {
      if (title.indexOf(str) === -1)
        flag = false;
    })
    return flag;
  }

  handleSearch(e) {
    let temp_posts = this.posts.filter(post => {
      return this.isQualifiedPosts(this.state.query, post.title);
    })
    this.setState({displayPosts: temp_posts});

    // this.isQualifiedPosts("a d", "abc");
  }

  onKeyDown(e) {
    if (e.keyCode === 13) {
      this.handleSearch()
    }
  }

  componentDidMount(){
    this.fetch_posts()
  }

  render() {

    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="召集令" subtitle="You are wanted" className="text-sm-left" />
        </Row>

        <Row className="mb-4">
          <Col>
            <Card>
              <CardBody className="p2-1">
                <Row onKeyDown={this.onKeyDown} tabIndex="0">
                  <Col className="col-2">
                    <FormSelect onChange={this.handleTypeSelect}>
                      <option selected>所有类别</option>
                      <option value="技术交流">技术交流</option>
                      <option value="学业探讨">学业探讨</option>
                      <option value="社会实践">社会实践</option>
                      <option value="公益志愿">公益志愿</option>
                      <option value="游玩">游玩</option>
                    </FormSelect>
                  </Col>
                  <Col className="col-8">
                  <InputGroup seamless className="ml-3">
                    <InputGroupAddon type="prepend">
                      <InputGroupText>
                        <i className="material-icons">search</i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <FormInput
                      className="navbar-search"
                      placeholder="Search for something..."
                      onChange={this.handleQuery}
                    />
                  </InputGroup>
                  </Col>
                  <Col className="col-2" >
                    <Button outline theme='secondary' onClick={this.handleSearch}>搜索</Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
      </Col>
        </Row>
        <Row>
          {this.state.displayPosts.map((post, idx) => (
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
                <span>@{post.author}</span>
                  <h5 className="card-title">
                    <Link to={{
                      pathname: "/apply-view",
                      state: {postID: post.postID, type: post.has_req}//Constants.APPLY_POST}
                    }} className="text-fiord-blue">
                      {post.title}
                    </Link>

                  </h5>
                  {/* <p className="card-text d-inline-block mb-3">{post.body}</p> */}
                  <span className="text-muted">结束日期：{post.date}</span>
                  <Row className="ml-0">
                    <Badge theme="success" className="mt-2">召集中</Badge>
                  </Row>
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
