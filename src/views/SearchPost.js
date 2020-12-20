import React from "react";
import PropTypes from "prop-types";
import PageTitle from "../components/common/PageTitle";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  FormSelect,
  ListGroup,
  ListGroupItem,
  Badge
} from "shards-react";
import {Link} from "react-router-dom";
import {Constants} from "../flux";

class SearchPost extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      displayPosts: [],
      query: "",
      type: "",
    }

    this.posts = [];

    this.handleTypeSelect = this.handleTypeSelect.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentDidMount(){
    fetch('http://10.128.222.68:5000/token_list',{
      method:"GET",
      credentials: 'include',
      headers: {
               'Accept': 'application/json',
        'Authorization':window.sessionStorage.getItem('Authorization'),
        'Content-Type': 'application/json',
      }
    }).then(res => {
      if (res.status === 509) {
        this.props.history.push("/sign-in")
      }
      return res;
    }).then((res)=>res.json()).then((res)=>{
      console.log(res.data['token_list'])
      this.posts = res.data['token_list'];
      this.setState({displayPosts:res.data['token_list']})
    })
  }

  handleTypeSelect = (e) => {
    let temp_posts;
    if (e.target.value === "所有类别") {
      temp_posts = this.posts.filter(post => {
        return this.isQualifiedPosts(this.state.query, post.token_name);
      })
    } else {
      temp_posts = this.posts.filter(post => {
        return post.token_type === e.target.value && this.isQualifiedPosts(this.state.query, post.token_name);
      })
      // console.log(temp_posts)
    }
    this.setState({type: e.target.value, displayPosts: temp_posts});
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
    let temp_posts;
    if (this.state.type === "所有类别") {
      temp_posts = this.posts.filter(post => {
        return this.isQualifiedPosts(this.state.query, post.token_name);
      })
    } else {
      temp_posts = this.posts.filter(post => {
        return post.token_type === this.state.type && this.isQualifiedPosts(this.state.query, post.token_name);
      })
      // console.log(temp_posts)
    }
    this.setState({displayPosts: temp_posts});

    // this.isQualifiedPosts("a d", "abc");
  }

  onKeyDown(e) {
    if (e.keyCode === 13) {
      this.handleSearch()
    }
  }


  render(){
    const posts = this.props.posts;
    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle title="召集令数据" subtitle="Posts" className="text-sm-left mb-3" />
        </Row>
        <Row className="mb-4" onKeyDown={this.onKeyDown} tabIndex="0">
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col className="col-2">
                    <FormSelect onChange={this.handleTypeSelect}>
                      <option selected>所有类别</option>
                      <option value="技术交流">技术交流</option>
                      <option value="学业探讨">学业探讨</option>
                      <option value="社会实践">社会实践</option>
                      <option value="公益志愿者">公益志愿者</option>
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
                      placeholder="Search for post name"
                      onChange={this.handleQuery}
                    />
                  </InputGroup>
                  </Col>
                  <Col className="col-2">
                    <Button outline theme='secondary' onClick={this.handleSearch}>搜索</Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardBody className="p-0">
                <ListGroup>
                  {this.state.displayPosts.map((post, idx) => (
                    <ListGroupItem key={idx} flush style={{"border-top": "1px solid #D3D3D3"}}>
                    <Row>
                    <Col className="col-2">
                    <Link to={{
                    pathname: "/manager-post-view",
                    state: {post: post}
                  }} style={{color: "#000"}}>
                    <div># {post.token_id}</div> {/*召集令编号*/}
                    </Link>
                    </Col>
                    <Col className="col-6">
                    <Link to={{
                    pathname: "/manager-post-view",
                    state: {post: post}
                  }} style={{color: "#000"}}>
                    <div>{post.token_name}</div> {/*召集令标题*/}
                    </Link>
                    </Col>
                    <Col className="col-2">
                    <Link to={{
                    pathname: "/manager-profile-root",
                    state: {userType: Constants.MANAGER, userID: post.user_id}
                  }} style={{color: "#000"}}>
                    <div>{post.send_user}</div> {/*召集令标题*/}
                    </Link>
                    </Col>
                    <Col>
                    <Badge theme="success">{post.state}</Badge>
                    </Col>
                    </Row>
                    </ListGroupItem>
                    ))
                  }

                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
  )
}
}

SearchPost.propTypes = {
  posts: PropTypes.array
};

SearchPost.defaultProps = {
  posts: [
    {
      title: "GitHub",
      postID: "12345",
      host: {
        name: "xxx",
        userID: "777"
      }
    },
    {
      title: "Stack Overflow",
      postID: "51234",
      host: {
        name: "xxx",
        userID: "777"
      }
    },
    {
      title: "Hacker News",
      postID: "13434",
      host: {
        name: "xxx",
        userID: "777"
      }
    },
    {
      title: "Reddit",
      postID: "67867",
      host: {
        name: "xxx",
        userID: "777"
      }
    },
    {
      title: "The Next Web",
      postID: "456",
      host: {
        name: "xxx",
        userID: "777"
      }
    },
    {
      title: "Tech Crunch",
      postID: "4563",
      host: {
        name: "xxx",
        userID: "777"
      }
    },
    {
      title: "YouTube",
      postID: "1218",
      host: {
        name: "xxx",
        userID: "777"
      }
    },
    {
      title: "Adobe",
      postID: "1171",
      host: {
        name: "xxx",
        userID: "777"
      }
    }
  ]
};

export default SearchPost;
