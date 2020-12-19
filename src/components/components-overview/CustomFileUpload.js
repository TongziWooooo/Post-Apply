import React, {Component} from "react";
import {
  Button,
  FormInput,
  Form,
} from "shards-react";
class CustomFileUpload extends Component {
  constructor(props){
    super(props)
    this.submit = this.submit.bind(this)
  }
  submit(e){
    alert("yes")
    console.log("okkkkkkkkkkk")
    e.preventDefault();
    let formData = new FormData(e.target);
    if(this.props.user_id)
    fetch('http://10.128.222.68:5000/videa?user_id='+this.props.user_id, {
      method: 'POST',
      body: formData //自动将input:file的name属性与文件对象组合成键值对
    }).then(response => console.log(response))
  };

  render() {
    return (
        <Form onSubmit={this.submit}>
          <FormInput type="file" name='file'/>
          <FormInput type="submit" value="上传"/>
        </Form>
    )
  }
}

export default CustomFileUpload;
