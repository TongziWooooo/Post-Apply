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
import {withRouter} from "react-router-dom";
import Constants from "../../flux/constants";


class ApplyEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      desc: this.props.value,
      edit: false
    }

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this)
  }

  toggleEdit() {
    this.setState({edit: !this.state.edit})
  }

  

  handleSubmit() {
    console.log("ppppppppp")
    console.log(this.state.desc)
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
    alert("???")
    this.setState({edit: !this.state.edit})
  }
  handleDelete(){
    this.props.history.push({
      pathname: "/status",
      state: {type: Constants.SUCCEED}
    })
  }

  handleDescChange(e){
    console.log("xxx")
    console.log(this.state.desc)
    this.setState({desc:e.target.value})
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
                  <FormTextarea disabled value={this.state.desc}/>
                  :
                  <FormTextarea value={this.state.desc} placeholder="Please enter your description." onChange={this.handleDescChange} />
              }
            </FormGroup>

            {/* Create Draft */}
            <FormGroup className="mb-0">
              <ButtonGroup className="mb-3">
                {this.state.edit === true ?
                  <Button theme="white" onClick={this.handleSubmit}>
                    <span className="text-info">
                      <i className="material-icons">edit</i>{" 提交"}
                    </span>
                  </Button>
                  :
                  <Button theme="white" onClick={this.toggleEdit} >
                    <span className="text-info">
                      <i className="material-icons">edit</i>{" 编辑"}
                    </span>
                  </Button>
                }
                <Button theme="white" onClick={this.handleDelete}>
                  <span className="text-danger">
                    <i className="material-icons" >clear</i>{" 删除"}
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

export default withRouter(ApplyEdit);
