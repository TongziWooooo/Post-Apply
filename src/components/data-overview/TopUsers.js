import React, {Component} from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  FormSelect
} from "shards-react";

class TopUsers extends Component {
  render() {
    let {title, userData} = this.props;
    return (
      <Card small>
        <CardHeader className="border-bottom">
          <Row>
            <Col>
              <h6 className="m-0">{title}</h6>
            </Col>
            <Col>
              <FormSelect
                size="sm"
                value="orders"
                onChange={() => {
                }}
              >
                <option value="orders">成交单数</option>
                <option value="money">中介费</option>
              </FormSelect>
            </Col>
          </Row>


          <div className="block-handle"/>
        </CardHeader>

        <CardBody className="p-0">
          <ListGroup small flush className="list-group-small">
            {this.props.rank_list.map((item, idx) => (
              <ListGroupItem key={idx} className="d-flex px-3">
                <span className="text-semibold text-fiord-blue">{item[2]}</span>
                <span className="ml-auto text-right text-semibold text-reagent-gray">
              {item[1]}
            </span>
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    );
  }
}

TopUsers.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The referral data.
   */
  userData: PropTypes.array
};

TopUsers.defaultProps = {
  title: "🏆用户排名",
  userData: [
    {
      title: "GitHub",
      value: "19,291"
    },
    {
      title: "Stack Overflow",
      value: "11,201"
    },
    {
      title: "Hacker News",
      value: "9,291"
    },
    {
      title: "Reddit",
      value: "8,281"
    },
    {
      title: "The Next Web",
      value: "7,128"
    },
    {
      title: "Tech Crunch",
      value: "6,218"
    },
    {
      title: "YouTube",
      value: "1,218"
    },
    {
      title: "Adobe",
      value: "1,171"
    }
  ]
};

export default TopUsers;
