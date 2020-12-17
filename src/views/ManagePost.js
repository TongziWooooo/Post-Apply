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

import PageTitle from "../components/common/PageTitle";
import PostDetail from "../components/post-detail/PostDetail";
import ApplyList from "../components/my-post/ApplyList";

class ManagePost extends React.Component {
  constructor(props) {
    super(props);
    // alert(this.props.location.state.postID)
    this.state = {
      postID:this.props.location.state.postID,
      overflow:false,

      post: {
        postID: '10101',
        backgroundImage: require("../images/content-management/1.jpeg"),
        category: "技术交流",
        categoryTheme: "dark",
        author: "猪笨笨",
        authorAvatar: require("../images/avatars/1.jpg"),
        title: "找人一起探讨怎么做Web大作业",
        body:
          "这个作业有点难度，大佬们帮帮忙吧。这个作业有点难度，大佬们帮帮忙吧。这个作业有点难度，大佬们帮帮忙吧。这个作业有点难度，大佬们帮帮忙吧。",
        end_date: "2021.01.01",
        people_total: 12,
        people_approved: 2,
        status: 0
      }
    }
    this.parserDate = this.parserDate.bind(this)
    this.fetchPostInfo = this.fetchPostInfo.bind(this);
    this.forceRerender = this.forceRerender.bind(this);
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
        status: res["data"]["token_info"]["state"]
      }
      if(temp_post.people_total<=temp_post.people_approved){
        this.setState({overflow:true})
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

  componentWillMount(){
    // alert("aawra")
    this.fetchPostInfo()
  }

  forceRerender(){
    var temp_post =  {
      postID: this.state.post.postID,
      backgroundImage:this.state.post.backgroundImage,
      category: this.state.post.category,
      categoryTheme: this.state.post.categoryTheme,
      author: this.state.post.author,
      authorAvatar: this.state.post.authorAvatar,
      title:this.state.post.title,
      body:this.state.post.body,
      end_date: this.state.post.end_date,
      people_total: this.state.post.people_total,
      people_approved: this.state.post.people_approved+1,
      status: this.state.post.status
    }
    this.setState({post:temp_post},()=>{console.log(this.state.post)})
    this.setState({postID:this.state.postID})

    // this.setState({post.people_approved:post.people_approved+1});
  }



  render(){
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title={"召集令" + this.state.postID} subtitle="You are wanted" className="text-sm-left" />
        </Row>
        <Row>
          <Col lg="6" md="6" sm="12" className="">
            <PostDetail post={this.state.post} edit={true}/>
            <p>状态是  {this.state.post.status}</p>
          </Col>
          <Col lg="6" md="6" sm="12" className="">
            <ApplyList onAgree={this.forceRerender} overflow={this.state.overflow} postID={this.state.postID}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ManagePost;
