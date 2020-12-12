import React,{Component} from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput } from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

class Editor extends Component{
  constructor(props){
    super(props);

    // this.state={text:this.props.value}
    this.handleChange = this.handleChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleChange(value) {
    // 为什么这里传进来的是真实值但Title的change传进来的是event?
    // this.setState({ text: value });
    this.props.handleContent(value)
    console.log(value)
  };
  handleTitleChange(e){
    this.props.handleTitle(e)
    console.log(e.target.value)
  
  }
  
  render(){
    return(
      <Card small className="mb-3">
      <CardBody>
        <Form className="add-new-post">
          <FormInput size="lg" className="mb-3" placeholder="Your Post Title" onChange={this.handleTitleChange} value={this.props.title}/>
          <ReactQuill className="add-new-post__editor mb-1" 
          value={this.props.value}
          onChange={this.handleChange}  />
        </Form>
      </CardBody>
    </Card>
    )
  }
  
}

export default Editor;
