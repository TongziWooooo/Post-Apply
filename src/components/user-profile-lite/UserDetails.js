import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  Progress,
  Badge
} from "shards-react";
import SimpleBackdrop from "./backdrop";

const UserDetails = (props) => (
  <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
      <div className="mb-3 mx-auto">
        <img
          className="rounded-circle"
          src={require("./../../images/avatars/0.jpg")}
          alt={props.userInfo.user_name}
          width="110"
        />
      </div>
      <h4 className="mb-1">{props.userInfo.user_name}</h4>
      <div>
        { props.userInfo.level === '0' ? <Badge><i class="fas fa-gem"> 钻石用户</i></Badge>
        : props.userInfo.level === '1' ? <Badge theme="info"><i class="far fa-star"> 重要用户</i></Badge>
        : <Badge theme="secondary"><i class="far fa-thumbs-up"> 普通用户</i></Badge>}
      </div>
    </CardHeader>
    <ListGroup flush>
    <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          注册城市
        </strong>
        <span>{props.userInfo.city}</span>
      </ListGroupItem>
      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          注册时间
        </strong>
        <span>{props.userInfo.reg_time}</span>
      </ListGroupItem>
      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          用户简介
          {/*{userDetails.metaTitle}*/}
        </strong>
        <span>
          {props.userInfo.info}
        </span>
      </ListGroupItem>
      <ListGroupItem className="p-4 d-flex justify-content-center">
        <SimpleBackdrop />
      </ListGroupItem>
    </ListGroup>
  </Card>
);

UserDetails.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object
};

UserDetails.defaultProps = {
  userDetails: {
    name: "猪笨笨",
    avatar: require("./../../images/avatars/0.jpg"),
    grade: "1",
    city: "北京",
    register_time: '2020-01-01',
    metaTitle: "用户简介",
    metaValue:
      "猪笨笨真的很厉害，只要你雇佣他，他就绝对能完成任务"
  }
};

export default UserDetails;
