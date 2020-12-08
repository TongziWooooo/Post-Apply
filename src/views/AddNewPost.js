import React, { Component } from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import SidebarActions from "../components/add-new-post/SidebarActions";
import SidebarCategories from "../components/add-new-post/SidebarCategories";


class AddNewPost extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value: '请撰写一篇关于你喜欢的 DOM 元素的文章.',
      type:{
        jsjl:false,
        xstt:false,
        shsj:false,
        gyzy:false,
        yw:false
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleContents = this.handleContents.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
    // alert(this.state.value)
  }



  handleSubmit(event) {
    alert('提交的文章: ' + this.state.value);
    event.preventDefault();
  }
  handleContents(content_value){
    this.setState({value: content_value})
    console.log(this.state.value)
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



  render(){
    return(
    <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Add New Post" subtitle="Blog Posts" className="text-sm-left" />
        </Row>

        <Row>
          {/* Editor */}
          <Col lg="9" md="12">
            <Editor value={this.state.value} handleContent={this.handleContents} onChange={this.handleChange} />
          </Col>

          {/* Sidebar Widgets */}
          <Col lg="3" md="12">
            <SidebarCategories type={this.state.type} handleTypeChange={this.handleTypeChange}/>
            <SidebarActions />
          </Col>
        </Row>
      </Container>
    )
  }
}


export default AddNewPost;
