import React, {Component} from "react";
import {
  Button,
  FormInput,
  Form,
} from "shards-react";
class CustomFileUpload_2 extends Component {
  constructor(props){
    super(props)
    this.submit = this.submit.bind(this)
    this.state={
      upload:false,
      file:null
    }
    this.upload = this.upload.bind(this)
  }
  submit(e){
    this.setState({upload:true})
    this.setState({file:new FormData(e.target)})
    // this.props.onSubmit(e.target)

    //
    // alert("yes")
    // console.log("okkkkkkkkkkk")
    // e.preventDefault();
    e.preventDefault();

    let formData = new FormData(e.target);
    // if(this.props.user_id)
    // fetch('http://10.128.222.68:5000/videa?user_id='+this.props.user_id, {
    //   method: 'POST',
    //   body: formData //自动将input:file的name属性与文件对象组合成键值对
    // }).then(response => console.log(response))
  };
  componentDidMount() {
    this.props.onRef(this)
  }
  upload (token_id){
      if(this.state.upload){
        // console.log("okkkkkkkkkkk")
        // let formData = new FormData(e.target);
        // if(this.props.user_id)
        fetch('http://10.128.222.68:5000/videa?token_id='+token_id, {
          method: 'POST',
          body: this.state.file //自动将input:file的name属性与文件对象组合成键值对
        }).then(response => console.log(response))

      }
  }

  myName = (token_id) => this.upload(token_id)

  render() {
    return (
        <Form onSubmit={this.submit}>
          <FormInput type="file" name='file'/>
          <FormInput type="submit" value="上传"/>
        </Form>
    )
  }
}

export default CustomFileUpload_2;
