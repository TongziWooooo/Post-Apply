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
  Button,
  ButtonGroup
} from "shards-react";

const ApplyEdit = ({ title }) => (
  <Card small className="">
    {/* Card Header */}
    <CardHeader className="border-bottom">
      <h6 className="m-0">查看接令</h6>
    </CardHeader>

    <CardBody className="d-flex flex-column">
      <Form className="quick-post-form">
        {/* Body */}
        <FormGroup>
          <FormTextarea disabled placeholder="Words can be like X-rays if you use them properly..." />
        </FormGroup>

        {/* Create Draft */}
        <FormGroup className="mb-0">
        <ButtonGroup className="mb-3">
        <Button theme="white">
                  <span className="text-info">
                    <i className="material-icons">edit</i>{" "}编辑
                  </span>
                </Button>
                <Button theme="white">
                  <span className="text-danger">
                    <i className="material-icons">clear</i>{" "}删除
                  </span>
                </Button>
        </ButtonGroup>
        </FormGroup>
      </Form>
    </CardBody>
  </Card>
);

export default ApplyEdit;
