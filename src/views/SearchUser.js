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
} from "shards-react";
import {Link} from "react-router-dom";
import {Constants} from "../flux";

class SearchUser extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

      users : [
        {
          user_name: "GitHub",
          user_id: "12345",
          user_type:"普通"
        }
        ]
    }
  }

  componentDidMount() {
    fetch('http://10.128.222.68:5000/users',
      {
        method:"GET",
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Authorization':window.sessionStorage.getItem('Authorization'),
          'Content-Type': 'application/json',
        },
      }
      ).then((res)=>res.json()).then((res)=>{this.setState({users:res.data})})
  }

  render(){
    const users = this.props.users;
    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle title="用户数据" subtitle="Users" className="text-sm-left mb-3" />
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
                  {this.state.users.map((user, idx) => (
                    <ListGroupItem key={idx} flush style={{"border-top": "1px solid #D3D3D3"}}>
                      <Link to={{
                        pathname: "/manager-profile-root",
                        state: {userType: Constants.MANAGER, userID: user.userID}
                      }} style={{color: "#000"}}>
                        <Row>
                          <Col className="col-2">
                            <div># {user.user_id}</div>
                          </Col>
                          <Col className="col-8">
                            <div>{user.user_name}</div>
                          </Col>
                          <Col className="2">

                            <div>{user.user_type}</div>
                          </Col>
                        </Row>
                      </Link>
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

SearchUser.propTypes = {
  users: PropTypes.array
};

SearchUser.defaultProps = {
  users: [
    {
      username: "GitHub",
      userID: "12345"
    },
    {
      username: "Stack Overflow",
      userID: "51234"
    },
    {
      username: "Hacker News",
      userID: "13434"
    },
    {
      username: "Reddit",
      userID: "67867"
    },
    {
      username: "The Next Web",
      userID: "456"
    },
    {
      username: "Tech Crunch",
      userID: "4563"
    },
    {
      username: "YouTube",
      userID: "1218"
    },
    {
      username: "Adobe",
      userID: "1171"
    }
  ]
};

export default SearchUser;
