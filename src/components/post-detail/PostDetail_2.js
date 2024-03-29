/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button,
  Progress
} from "shards-react";
import {Link} from "react-router-dom";

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    // this.state ={post: this.props.post
    console.log(this.props.post)
    console.log("!!")
    this.fiterLabelHandle = this.fiterLabelHandle.bind(this)

  }

  componentWillMount() {
    // alert(this.props.post.desc)
        console.log(this.props.post)
    console.log("!!")
    this.setState({edit: this.props.edit})
  }

  //删去富文本标签
  fiterLabelHandle = (schemeIntroduce) =>{
    schemeIntroduce = schemeIntroduce.replace(/(\n)/g, ""); // 去掉换行
    schemeIntroduce = schemeIntroduce.replace(/(\t)/g, ""); // 去掉换行
    schemeIntroduce = schemeIntroduce.replace(/(\r)/g, "");
    schemeIntroduce = schemeIntroduce.replace(/<\/?[^>]*>/g, ""); // 去掉标签
    schemeIntroduce = schemeIntroduce.replace(/\s*/g, "");
    schemeIntroduce = schemeIntroduce.replace(/ /ig, " "); // 去掉
    return schemeIntroduce
}

  render(){
    return (
      <Card small className="card-post card-post--1">
        <div
          className="card-post__image"
          style={{ backgroundImage:`url(http://10.128.222.68:5000/videa?token_id=`+this.props.post.token_id+`)` }}
        >
          <Badge
            pill
            className={`card-post__category bg-${this.props.post.categoryTheme}`}
          >
            {this.props.post.token_type}
          </Badge>
          <div className="card-post__author d-flex">
            <a
              href="#"
              className="card-post__author-avatar card-post__author-avatar--small"
              style={{ backgroundImage: `url('${this.props.post.authorAvatar}')` }}
            >
            </a>
          </div>
        </div>
        <CardBody>
        <span>@{this.props.post.send_user}</span>
        <span> # {this.props.post.user_id}</span>
        <h5 className="card-title">
          <a href="#" className="text-fiord-blue">
            {this.props.post.token_name}
          </a>
        </h5>
        <p className="card-text d-inline-block mb-3">{this.fiterLabelHandle(this.props.post.desc)}</p>
        <p className="text-muted">结束日期： {this.props.post.end_time}</p>
        <p className="my-1">已召集 {this.props.post.cur_num} / {this.props.post.max_num}</p>
        <Progress
          theme="success"
          style={{ height: "5px" }}
          className="mb-2"
          value={(this.props.post.cur_num / this.props.post.max_num)*100}
        />
        <Badge theme="success" className="mt-2">召集中</Badge>
          {this.props.edit === true ?
            <Row>
              <Col className="col-md-2 offset-md-10">
                <Link to={{
                  pathname: "/change-post",
                  state: {postID: this.props.post.token_id}
                }}>
                  <Button>Edit</Button>
                </Link>
              </Col>
            </Row>
            :
            null
          }
        </CardBody>
      </Card>

    )
  }
}

export default PostDetail;
