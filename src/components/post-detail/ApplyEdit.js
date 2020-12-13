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

class ApplyEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false
    }

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleEdit() {
    this.setState({edit: !this.state.edit})
  }

  handleSubmit() {
    // TODO： submit
    this.setState({edit: !this.state.edit})
  }

  render() {
    return(
      <Card small className="">
        {/* Card Header */}
        <CardHeader className="border-bottom">
          <h6 className="m-0">查看接令</h6>
        </CardHeader>

        <CardBody className="d-flex flex-column">
          <Form className="quick-post-form">
            {/* Body */}
            <FormGroup>
              {
                this.state.edit === false ?
                  <FormTextarea disabled/>
                  :
                  <FormTextarea placeholder="Please enter your description." />
              }
            </FormGroup>

            {/* Create Draft */}
            <FormGroup className="mb-0">
              <ButtonGroup className="mb-3">
                {this.state.edit === true ?
                  <Button theme="white" onClick={this.toggleEdit}>
                    <span className="text-info">
                      <i className="material-icons">edit</i>{" 提交"}
                    </span>
                  </Button>
                  :
                  <Button theme="white" onClick={this.handleSubmit}>
                    <span className="text-info">
                      <i className="material-icons">edit</i>{" 编辑"}
                    </span>
                  </Button>
                }
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
    )
  }
}

export default ApplyEdit;
