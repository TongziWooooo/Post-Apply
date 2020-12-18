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

class SearchApply extends React.Component{
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      open: false,
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
    fetch("http://127.0.0.1:5000/token_reqs",{
      method: 'get',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Authorization':window.sessionStorage.getItem('Authorization'),
        'Content-Type': 'application/json',
      }
    }).then((res)=>res.json()).then(
      (res)=>{
      this.setState({reqs:res.data})
      }
    )
  }
  toggle() {
    this.setState({
      open: !this.state.open
    });
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
                  {this.state.reqs.map((req, idx) => (
                    <ListGroupItem key={idx} flush style={{"border-top": "1px solid #D3D3D3"}}>
                      <Row>
                        <Col className="col-2">
                          <div># {req.req_id}</div> {/*请求编号*/}
                        </Col>
                        <Col className="col-3">
                          <div>{req.user_name}</div> {/*请求用户*/}
                        </Col>  
                        <Col className="col-3">
                          <div>{req.token_name}</div> {/*召集令标题*/}
                        </Col>
                        <Col className="col-4">
                          <div>
                            <Button theme="white" id={"popover-"+req.req_id} onClick={this.toggle}>
                              请求描述
                            </Button>
                            <Popover
                              placement="bottom"
                              open={this.state.open}
                              toggle={this.toggle}
                              target={"#popover-"+req.req_id}
                            >
                              <PopoverBody>
                                {req.disc?req.disc:"empty"}
                              </PopoverBody>
                            </Popover>
                          </div>
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
