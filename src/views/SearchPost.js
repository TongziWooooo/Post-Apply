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
  }

  render(){
    const posts = this.props.posts;
    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle title="召集令数据" subtitle="Posts" className="text-sm-left mb-3" />
        </Row>
        <Row className="mb-4">
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col className="col-2">
                    <FormSelect>
                      <option selected>所有类别</option>
                      <option value="1">技术交流</option>
                      <option value="2">学业探讨</option>
                      <option value="3">社会实践</option>
                      <option value="4">公益志愿者</option>
                      <option value="5">游玩</option>
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
                    />
                  </InputGroup>
                  </Col>
                  <Col className="col-2">
                    <Button outline theme='secondary'>搜索</Button>
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
                  {posts.map((post, idx) => (
                    <ListGroupItem key={idx} flush style={{"border-top": "1px solid #D3D3D3"}}>
                      <Row>
                        <Col className="col-2">
                          <Link to={{
                            pathname: "/manager-post-view",
                            state: {post: post}
                          }} style={{color: "#000"}}>
                            <div># {post.postID}</div> {/*召集令编号*/}
                          </Link>
                        </Col>
                        <Col className="col-6">
                          <Link to={{
                            pathname: "/manager-post-view",
                            state: {post: post}
                          }} style={{color: "#000"}}>
                            <div>{post.title}</div> {/*召集令标题*/}
                          </Link>
                        </Col>
                        <Col className="col-2">
                          <Link to={{
                            pathname: "/manager-profile-root",
                            state: {userType: Constants.MANAGER, userID: post.host.userID}
                          }} style={{color: "#000"}}>
                            <div>{post.host.name}</div> {/*召集令标题*/}
                          </Link>
                        </Col>
                        <Col>
                          <Badge theme="success">召集中</Badge>
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
