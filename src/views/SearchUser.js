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

      query: "",


      displayUsers: []
    }

    this.users = [];

    this.handleSearch = this.handleSearch.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
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
      ).then(res => {
      if (res.status === 509) {
        this.props.history.push("/sign-in")
      }
      return res;
    }).then((res)=>res.json()).then((res)=>{
        this.setState({displayUsers: res.data})
        this.users = res.data;
      })
  }

  onKeyDown(e) {
    if (e.keyCode === 13) {
      this.handleSearch()
    }
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
    let temp_users = this.users.filter(user => {
      return this.isQualifiedPosts(this.state.query, user.user_name);
    })
    this.setState({displayUsers: temp_users});

    // this.isQualifiedPosts("a d", "abc");
  }

  render(){
    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle title="用户数据" subtitle="Users" className="text-sm-left mb-3" />
        </Row>
        <Row className="mb-4">
          <Col>
            <Card>
              <CardBody>
                <Row onKeyDown={this.onKeyDown} tabIndex="0">
                  <Col className="col-10">
                  <InputGroup seamless className="ml-3">
                    <InputGroupAddon type="prepend">
                      <InputGroupText>
                        <i className="material-icons">search</i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <FormInput
                      className="navbar-search"
                      placeholder="Search for username..."
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
                  {this.state.displayUsers.map((user, idx) => (
                    <ListGroupItem key={idx} flush style={{"border-top": "1px solid #D3D3D3"}}>
                      <Link to={{
                        pathname: "/manager-profile-root",
                        state: {userType: Constants.MANAGER, userID: user.user_id, root:0}
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
