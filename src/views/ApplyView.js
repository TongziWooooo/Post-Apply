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

import Constants from "../flux/constants";
import PageTitle from "../components/common/PageTitle";
import PostDetail from "../components/post-detail/PostDetail";
import ApplyPost from "../components/post-detail/ApplyPost";
import ApplyEdit from "../components/post-detail/ApplyEdit"

class ApplyView extends React.Component {
  constructor(props) {
    super(props);
      //state: {postID: post.token_id
    this.state = {
      postID:this.props.location.state.postID,
      

      post: {
        postID: '10101',
        backgroundImage: require("../images/content-management/1.jpeg"),
        category: "技术交流",
        author: "猪笨笨",
        authorAvatar: require("../images/avatars/1.jpg"),
        title: "找人一起探讨怎么做Web大作业",
        body:
          "这个作业有点难度，大佬们帮帮忙吧。这个作业有点难度，大佬们帮帮忙吧。这个作业有点难度，大佬们帮帮忙吧。这个作业有点难度，大佬们帮帮忙吧。",
        end_date: "2021.01.01",
        people_total: 12,
        people_approved: 2,
        status: 1
      },
      apply: null

    }
    alert(this.state.postID)
    this.onToggle = this.onToggle.bind(this);

    this.parserDate = this.parserDate.bind(this)
    this.fetchPostInfo = this.fetchPostInfo.bind(this);


  }
  parserDate(date) {
    var t = Date.parse(date);
    console.log(t)
    if (!isNaN(t)) {
        return new Date(Date.parse(date.replace(/-/g, "/")));
    } else {
        return new Date();
    }
};
  fetchPostInfo(){
    fetch('http://127.0.0.1:5000/token?_id='+this.state.postID, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        
        // "Cookie": "session=4067dbf4-bd0e-43e5-b599-19ba67adebeb",
        'Content-Type': 'application/json',
      }
    })
    .then((res)=>{
      if(res.status===200){
        return res.json()
      }
    })
    .then(res=>{

      var temp_post =  {
        postID: res["data"]["token_info"]["token_id"],
        backgroundImage: require("../images/content-management/1.jpeg"),
        category: "技术交流",
        categoryTheme: "dark",
        author: "猪笨笨",
        authorAvatar: require("../images/avatars/1.jpg"),
        title:res["data"]["token_info"]["token_name"],
        body:res["data"]["token_info"]["desc"],
        end_date: (res["data"]["token_info"]["end_time"]),
        people_total: res["data"]["token_info"]["max_num"],
        people_approved: res["data"]["token_info"]["cur_num"],
        status: 1
      }
      this.setState({post:temp_post},()=>{console.log(this.state.post)})
      
      // console.log(res["data"]["token_info"]["end_time"])
      // console.log(this.parserDate(res["data"]["token_info"]["end_time"]))
      // this.setState({value:res["data"]["token_info"]["desc"]})
      // this.setState({title:res["data"]["token_info"]["token_name"]})
      // this.setState({max_num:res["data"]["token_info"]["max_num"]})
      // this.setState({token_id:res["data"]["token_info"]["token_id"]})
  
      // this.setState({end_time:this.parserDate(res["data"]["token_info"]["end_time"])})
      // this.setState
    })
  }
  
  componentDidMount(){
    if (this.props.location.state.type === Constants.APPLY_POST) {
      this.setState({apply: <ApplyPost onToggle={this.onToggle}/>})
    } else {
      this.setState({apply: <ApplyEdit/>})
    }

    // alert("aawra")
    this.fetchPostInfo()
  }

  onToggle() {
    this.setState({apply: <ApplyEdit/>});
  }


  render(){
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title={"召集令"} subtitle="You are wanted" className="text-sm-left" />
        </Row>
        <Row>
          <Col lg="6" md="6" sm="12" className="">
            <PostDetail post={this.state.post} edit={false}/>
          </Col>
          <Col lg="6" md="6" sm="12" className="">
            {/* <ApplyPost /> */}
            {this.state.apply}
             {/*<ApplyPost />*/}
            {/*<ApplyEdit />*/}

          </Col>
        </Row>
      </Container>
    )
  }
}

export default ApplyView;