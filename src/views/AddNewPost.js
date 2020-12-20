import React, { Component } from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import SidebarActions from "../components/add-new-post/SidebarActions";
import SidebarCategories from "../components/add-new-post/SidebarCategories";
import Constants from "../flux/constants"
import {
  Button,
  FormInput
} from "shards-react";

class AddNewPost extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      end_time: null,
      formated_end_data: null,
      max_num: 10,
      title: "",
      type:{
        jsjl:true,
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
    this.handleActionDateChange = this.handleActionDateChange.bind(this)
    this.handleActionNumChange = this.handleActionNumChange.bind(this)
  }

  handleTitleChange(event){
    this.setState({title:event.target.value}
    )
  }

  handleSubmit(event) {
    // this.child.childFn()

    if (this.state.title === "" || this.state.value === ""){
      alert('请输入标题和文章内容！');
      return;
    }
    if (this.state.formated_end_data === null){
      alert('请输入召集截止日期！');
      return;
    }
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


    fetch('http://10.128.222.68:5000/token', {
      method: 'POST',
      headers: {
               'Accept': 'application/json',
        'Authorization':window.sessionStorage.getItem('Authorization'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "token_type": temp,
        "token_name": this.state.title,
        "desc":this.state.value,
        "user_id":window.sessionStorage.getItem("user_id"),
        "max_num":this.state.max_num,
        "end_time":this.state.formated_end_data
      })
    }).then(res => {
      if (res.status === 200) {
        res.json().then((res=>{
          this.child.childFn(res.data)
        }))
        this.props.history.push({
          pathname: "/status",
          state: {postID: 123, type: Constants.SUCCEED}  // 出错就是Constants.FAIL
        })
      } else {
        this.props.history.push({
          pathname: "/status",
          state: {postID: 123, type: Constants.FAIL}  // 出错就是Constants.FAIL
        })
      }
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
    console.log(fmt)
    // alert(time)
    this.setState({
      end_time:new Date(time ),
      formated_end_data:fmt
    })
  }
  handleActionNumChange(num){
    console.log(num)
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
  onRef = (ref) => {
    this.child = ref
  }

  render(){
    return(
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="发布召集令"  subtitle="New Post"
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
                            handleActionDateChange={this.handleActionDateChange} onRef={this.onRef}
                            onSubmit={this.handleSubmit}/>
          </Col>
        </Row>
      </Container>
    )
  }
}


export default AddNewPost;
