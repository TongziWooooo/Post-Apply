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
            <div># {this.props.user.userID}</div> {/*请求编号*/}
          </Col>
          <Col className="col-3">
            <div>{this.props.user.username}</div> {/*请求用户*/}
          </Col>
          <Col className="col-3">
            <div>{this.props.user.username}</div> {/*召集令标题*/}
          </Col>
          <Col className="col-4">
            <div>
              <Button theme="white" id={"popover-" + this.props.idx} onClick={this.toggle}>
                请求描述
              </Button>
              <Popover
                placement="bottom"
                open={this.state.open}
                toggle={this.toggle}
                target={"#popover-" + this.props.idx}
              >
                <PopoverBody>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                  terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                  labore wes anderson cred nesciunt sapiente ea proident.
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
