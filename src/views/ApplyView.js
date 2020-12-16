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

var sleep = function(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
var formatDate = function(date){
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  var minute = date.getMinutes();
  minute = minute < 10 ? ('0' + minute) : minute;
  var second= date.getSeconds();
  second = minute < 10 ? ('0' + second) : second;
  return y + '-' + m + '-' + d+' '+h+':'+minute+':'+ second;
};


class ApplyView extends React.Component {
  constructor(props) {
    super(props);
      //state: {postID: post.token_id
      this.value = ""
    this.state = {
      postID:this.props.location.state.postID,
      req_info:{
        desc:"",
        create_time:"",
        update_time:"",
        state:"0"

      }, //算了 不写了  现在是  用户申请该编辑 输入栏会清空，想改掉要把decs提出来 好麻烦
      

      post: {
        postID: this.props.location.state.postID,
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
    // alert(this.state.postID)
    this.onToggle = this.onToggle.bind(this);

    this.parserDate = this.parserDate.bind(this)
    this.fetchPostInfo = this.fetchPostInfo.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this)
    this.handleApplyDescChange = this.handleApplyDescChange.bind(this)

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
    fetch('http://10.128.222.68:5000/token?_id='+this.state.postID, {
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
        author: res["data"]["token_info"]["user_name"],
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
  

  async fetch_req_info(){
    console.log("will fetch")
    fetch('http://10.128.222.68:5000/token_req?token_id='+this.state.postID+'&user_id='+window.sessionStorage.getItem("user_id"), {
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
    }).then((res)=>{

      var req_info={
        desc:res.data.desc,
        create_time:res.data.create_time,
        update_time:res.data.update_time,
        state:res.data.state
  
      }
      this.setState({req_info:req_info},()=>{
        console.log(this.state.req_info) 
        this.setState({apply: <ApplyEdit req_info={this.state.req_info}  postID={this.state.post.postID} handleDescChange={this.handleDescChange}/>})

      })
      //this.value=req_info

    }
    )


  }


  async componentDidMount(){
    this.fetchPostInfo()
    if (this.props.location.state.type === Constants.APPLY_POST) {
      this.setState({apply: <ApplyPost req_info={this.state.req_info} onToggle={this.onToggle} onChange={this.handleApplyDescChange} postID={this.state.post.postID}/>})
    } else {
      this.fetch_req_info()


    }
    // sleep(5000)
    console.log("~~~~~~")
    // alert("aawra")
  }

  onToggle() {
    this.setState({apply: <ApplyEdit req_info={this.state.req_info} handleDescChange={this.handleDescChange} postID={this.state.post.postID}/>});
  }
  handleApplyDescChange(value){
    // var fmt = formatDate(Date.now())
     var req_info={
       desc:value,
       create_time:this.state.req_info.create_time,
       update_time:this.state.req_info.update_time,
       state:this.state.req_info.state
 
     }
     // this.value=req_inf?o
     this.setState({req_info:req_info},()=>{
      this.setState({apply: <ApplyPost req_info={this.state.req_info} onToggle={this.onToggle} onChange={this.handleApplyDescChange} postID={this.state.post.postID}/>})

     })
   }
 
  handleDescChange(value){
   // var fmt = formatDate(Date.now())
    var req_info={
      desc:value,
      create_time:this.state.req_info.create_time,
      update_time:this.state.req_info.update_time,
      state:this.state.req_info.state

    }
    // this.value=req_inf?o
    this.setState({req_info:req_info},()=>{
      this.setState({apply: <ApplyEdit req_info={this.state.req_info}  postID={this.state.post.postID} handleDescChange={this.handleDescChange}/>})
      console.log("oooooooo")
      console.log(this.state.req_info.desc)
    })
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