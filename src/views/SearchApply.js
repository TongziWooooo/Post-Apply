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
      reqs:[{
        user_id:"1",
        token_name:"1",
        token_id:"1",
        disc:"???",
        state:"1",
        user_name:"1",
        show:false
      }]
    };

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
        this.setState({reqs:arr})
      }
    )
  }

  render(){
    const users = this.props.users;
    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle title="召集令请求数据" subtitle="Apply" className="text-sm-left mb-3" />
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
                  {
                    this.state.reqs.map((req, idx) => (
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
