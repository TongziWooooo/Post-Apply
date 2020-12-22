import {
  Button,
  Col,
  ListGroupItem,
  Popover,
  PopoverBody,
  Row
} from "shards-react";

import React from "react";

class ApplyItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <ListGroupItem key={1} flush style={{"border-top": "1px solid #D3D3D3"}}>
        <Row>
          <Col className="col-2">
            <div># {this.props.req.req_id}</div> {/*请求编号*/}
          </Col>
          <Col className="col-3">
            <div>{this.props.req.user_name}</div> {/*请求用户*/}
          </Col>
          <Col className="col-3">
            <div>{this.props.req.token_name}</div> {/*召集令标题*/}
          </Col>
          <Col className="col-4">
            <div>
              <Button theme="white" id={"popover-" + this.props.idx} onClick={this.toggle}>
                请求描述
              </Button>
              <Popover
                placement="right"
                open={this.state.open}
                toggle={this.toggle}
                target={"#popover-" + this.props.idx}
              >
                <PopoverBody>
                  {this.props.req.disc}
                </PopoverBody>
              </Popover>
            </div>
          </Col>
        </Row>
      </ListGroupItem>
    );
  }
}

export default ApplyItem;
