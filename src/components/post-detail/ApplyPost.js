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
  }

  render() {
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
              <FormTextarea placeholder="Please enter your description." />
            </FormGroup>

            {/* Create Draft */}
            <FormGroup className="mb-0">
              <Button theme="accent" onClick={()=>{this.props.onToggle()}}>
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
