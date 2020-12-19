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
  Popover,
  PopoverBody,
  PopoverHeader
} from "shards-react";
import ApplyItem from "./ApplyItem";

class SearchApply extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      displayReqs: [
        // {
        //   user_id:"1",
        //   token_name:"1",
        //   token_id:"1",
        //   disc:"???",
        //   state:"1",
        //   user_name:"1",
        //   show:false
        // }
      ],
      query: ""
    };

    this.reqs = [];

    this.handleSearch = this.handleSearch.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);

}
  componentDidMount(){
    fetch("http://10.128.222.68:5000/token_reqs",{
      method: 'get',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Authorization':window.sessionStorage.getItem('Authorization'),
        'Content-Type': 'application/json',
      }
    }).then((res)=>res.json()).then(
      (res)=>{
        var arr=[]
        for(var i in res.data) {
          var temp_dict = {
            "req_id": res.data[i].req_id,
            "send_user_id": res.data[i].send_user_id,
            "token_name": res.data[i].token_name,
            "user_name": res.data[i].user_name,
            "user_id": res.data[i].user_id,
            "disc": res.data[i].disc,
            "create_time": res.data[i].create_time,
            "update_time": res.data[i].update_time,
            "state": res.data[i].state,
            "show": false
          }
          arr.push(temp_dict)

        }
        this.reqs = arr;
        this.setState({displayReqs: arr})
      }
    )
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
    let temp_reqs = this.reqs.filter(req => {
      return this.isQualifiedPosts(this.state.query, req.token_name);
    })
    this.setState({displayReqs: temp_reqs});

    // this.isQualifiedPosts("a d", "abc");
  }

  render(){
    const users = this.props.users;
    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle title="召集令请求数据" subtitle="Apply" className="text-sm-left mb-3" />
        </Row>
        <Row className="mb-4" onKeyDown={this.onKeyDown} tabIndex="0">
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col className="col-10">
                  <InputGroup seamless className="ml-3">
                    <InputGroupAddon type="prepend">
                      <InputGroupText>
                        <i className="material-icons">search</i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <FormInput
                      className="navbar-search"
                      placeholder="Search for post name..."
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
                  {
                    this.state.displayReqs.map((req, idx) => (
                      <ApplyItem req={req} idx={idx}/>
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

SearchApply.propTypes = {
  users: PropTypes.array
};

SearchApply.defaultProps = {
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

export default SearchApply;
