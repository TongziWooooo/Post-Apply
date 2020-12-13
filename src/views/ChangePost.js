import React, { Component } from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import SidebarActions from "../components/add-new-post/SidebarActions";
import SidebarCategories from "../components/add-new-post/SidebarCategories";
import {
  Button,
  FormInput
} from "shards-react";
import Constants from "../flux/constants";

class ChangePost extends Component{
  constructor(props) {
    super(props);
    // alert(props.location.state.postID)
    this.state = {
      value: '请撰写一篇关于你喜欢的 DOM 元素的文章.',
      end_time:undefined,
      token_id:0,
      formated_end_data:"",
      max_num:11,
      title: "",
      type:{
        jsjl:false,
        xstt:false,
        shsj:false,
        gyzy:false,
        yw:false
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleContents = this.handleContents.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.FieldEditor1 = React.createRef();
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.login = this.login.bind(this);
    this.printSession = this.printSession.bind(this);
    this.fetchPostInfo = this.fetchPostInfo.bind(this);
    this.handleActionDateChange = this.handleActionDateChange.bind(this)
    this.handleActionNumChange = this.handleActionNumChange.bind(this)
    this.parserDate = this.parserDate.bind(this)
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
  fetch('http://127.0.0.1:5000/token?_id='+this.props.location.state.postID, {
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
    console.log(res["data"]["token_info"]["end_time"])
    console.log(this.parserDate(res["data"]["token_info"]["end_time"]))
    this.setState({value:res["data"]["token_info"]["desc"]})
    this.setState({title:res["data"]["token_info"]["token_name"]})
    this.setState({max_num:res["data"]["token_info"]["max_num"]})
    this.setState({token_id:res["data"]["token_info"]["token_id"]})

    this.setState({end_time:this.parserDate(res["data"]["token_info"]["end_time"])})
    // this.setState
  })
}

componentDidMount(){
  // alert("aawra")
  this.fetchPostInfo()
}

  handleTitleChange(event){
    this.setState({title:event.target.value}
      )
  }

  handleSubmit(event) {
    // alert('提交的文章: ' + this.state.value);
    event.preventDefault();

    console.log(this.state.title)
    console.log(this.state.value)
    // "技术交流","学业探讨","社会实践","公益志愿","缘来如此"
    var dict={
      jsjl:"技术交流",
      xstt:"学业探讨",
      shsj:"社会实践",
      gyzy:"公益志愿",
      yw:"缘来如此"
    }
    var temp = ""
    for(var key in this.state.type){
      if (this.state.type[key]==true){
        temp=dict[key]
      }
    }
    console.log(temp)


    fetch('http://127.0.0.1:5000/token', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        "Cookie": "session=4067dbf4-bd0e-43e5-b599-19ba67adebeb",
        'Content-Type': 'application/json',
      },
  body: JSON.stringify({
    "token_id":this.state.token_id,
    "token_type": temp,
    "token_name": this.state.title,
    "desc":this.state.value,
    //"user_id":window.sessionStorage.getItem("user_id"),
    "max_num":this.state.max_num,
    "end_time":this.state.formated_end_data,
  })


})
    this.props.history.push({
      pathname: "/status",
      state: {postID: 123, type: Constants.SUCCEED}
    })



  }
  handleContents(content_value){
    this.setState({value: content_value})
    // console.log(this.state.value)
  }
  handleTitle(title){
    this.setState({title: title})
  }

  handleActionDateChange(time,fmt){
    // alert(time)
    this.setState({
      end_time:new Date(time ),
      formated_end_data:fmt
       })
    }
  handleActionNumChange(num){
    this.setState({max_num:num})
  }
  handleTypeChange(typee){
    var a = 1
    var newStateType = {
      jsjl:false,
      xstt:false,
      shsj:false,
      gyzy:false,
      yw:false
    }
    newStateType[typee] = true
    this.setState({type: newStateType})
  }

  login(){

    fetch('http://127.0.0.1:5000/session', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        // "Cookie": "session=4067dbf4-bd0e-43e5-b599-19ba67adebeb",
        'Content-Type': 'application/json',
      },
  body: JSON.stringify({
    "username": "xxx",
    "password": "xx",
  })
}).then(res => { if(res.status===200) return res.json()})
.then(res =>{         //ref

  console.log(res["data"])
  window.sessionStorage.setItem("Authorization","JWT " + res["data"]["token"])
  window.sessionStorage.setItem("user_id",res["data"]["user_id"])
  window.sessionStorage.setItem("user_name","xxx")
  }
)
  }
// .then(
//   (res)=>{
//     if(res.status===200){
//       console.log(res.text())

//       // window.sessionStorage.setItem("Authorization", Response.body.))
//   }
// }
//   // window.sessionStorage.setItem("name", "xxx"))
// )//.then(res=>console.log(res))



  //


  printSession(){
    console.log(window.sessionStorage.getItem('Authorization'))
    fetch('http://127.0.0.1:5000/session', {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Authorization':window.sessionStorage.getItem('Authorization'),
        'Content-Type': 'application/json',
      },
  body: JSON.stringify({
    "username": "xxx",
    "password": "xx",
  })
})

  }

  render(){
    return(
    <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title={"Change Post " + this.props.location.state.postID}
          className="text-sm-left"  />
        </Row>

        <Row>
          {/* Editor */}
          <Col lg="9" md="12">
            <Editor value={this.state.value} title={this.state.title}
            handleContent={this.handleContents}
            handleTitle={this.handleTitleChange}
            />
          </Col>

          {/* Sidebar Widgets */}
          <Col lg="3" md="12">
            <SidebarCategories type={this.state.type} handleTypeChange={this.handleTypeChange} />
            <SidebarActions date={this.state.end_time} num={this.state.max_num}
            handleActionNumChange={this.handleActionNumChange}
            handleActionDateChange={this.handleActionDateChange}
            onSubmit={this.handleSubmit}/>

            <Button theme="accent" size="sm" className="ml-auto" onClick={this.login}>随便登录一下    </Button>
            <Button theme="accent" size="sm" className="ml-auto" onClick={this.printSession}>看一下session    </Button>

          </Col>
        </Row>
      </Container>
    )
  }
}


export default ChangePost;
