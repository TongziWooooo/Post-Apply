import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  FormInput,
  FormTextarea,
  Button
} from "shards-react";
import {Link} from "react-router-dom";

class ApplyPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      desc: "",
      //create_time:this.state.req_info.create_time,
      //update_time:fmt,
      //state:"0"
    }
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDescChange = this.handleDescChange.bind(this)
  }


  handleSubmit(e) {
    fetch("http://127.0.0.1:5000/token_req",{
      method:'POST',
      headers: {
        'Accept': 'application/json',
        // "Cookie": "session=4067dbf4-bd0e-43e5-b599-19ba67adebeb",
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        "token_id":this.props.postID,
        "user_id":window.sessionStorage.getItem("user_id"),
        "disc":this.state.desc,
        "state":"0"
      })
    })

    // TODO： submit
    // alert("???")
    this.setState({edit: !this.state.edit})
  }

  handleDescChange(e){
    this.props.onChange(e.target.value)
    // console.log(">>>.")
    // console.log(e.target.value)

    // this.setState({desc:e.target.value})
  }
  

  render() {
    console.log("iahfouehgouewhgoeshgoewhghewgouhewou")

    return (
      <Card small className="">
        {/* Card Header */}
        <CardHeader className="border-bottom">
          <h6 className="m-0">请求接令</h6>
        </CardHeader>

        <CardBody className="d-flex flex-column">
          <Form className="quick-post-form">
            {/* Body */}
            <FormGroup>
              <FormTextarea value={this.props.value} onChange={this.handleDescChange} placeholder="Please enter your description." />
            </FormGroup>

            {/* Create Draft */}
            <FormGroup className="mb-0">
              <Button theme="accent" onClick={()=>{
                      this.handleSubmit()
                      this.props.onToggle()}}>
                发送请求
              </Button>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    )
  }
}

export default ApplyPost;
