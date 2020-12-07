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

const ApplyPost = ({ title }) => (
  <Card small className="">
    {/* Card Header */}
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>

    <CardBody className="d-flex flex-column">
      <Form className="quick-post-form">
        {/* Body */}
        <FormGroup>
          <FormTextarea placeholder="Words can be like X-rays if you use them properly..." />
        </FormGroup>

        {/* Create Draft */}
        <FormGroup className="mb-0">
          <Button theme="accent" type="submit">
            发送请求
          </Button>
        </FormGroup>
      </Form>
    </CardBody>
  </Card>
);

ApplyPost.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

ApplyPost.defaultProps = {
  title: "请求接令"
};

export default ApplyPost;
