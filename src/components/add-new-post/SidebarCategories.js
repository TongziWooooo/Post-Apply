import React,{Component} from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
  InputGroup,
  FormCheckbox,
  FormInput
} from "shards-react";

class SidebarCategories extends Component{

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    console.log(this.props.type)
    console.log("???????????????")
  }
  handleChange(e, type) {
    this.props.handleTypeChange(type)
  }

  render(){
    return(  
        <Card small className="mb-3">
        <CardHeader className="border-bottom">
          <h6 className="m-0">{title}</h6>
        </CardHeader>
        <CardBody className="p-0">
          <ListGroup flush>
            <ListGroupItem className="px-3 pb-2">
              <FormCheckbox className="mb-1"
                checked={this.props.type.jsjl}
                onChange={e => this.handleChange(e, "jsjl")}   >
                技术交流
              </FormCheckbox>
              <FormCheckbox className="mb-1"
                checked={this.props.type.xstt}
                onChange={e => this.handleChange(e, "xstt")}                
              >
                学业探讨
              </FormCheckbox>
              <FormCheckbox className="mb-1"
                checked={this.props.type.shsj}
                onChange={e => this.handleChange(e, "shsj")}   >
                社会实践
              </FormCheckbox>
              <FormCheckbox className="mb-1"
                checked={this.props.type.gyzy}
                onChange={e => this.handleChange(e, "gyzy")}   >
                公益志愿
              </FormCheckbox>
              <FormCheckbox className="mb-1"
                checked={this.props.type.yw}
                onChange={e => this.handleChange(e, "yw")}   >
                缘来如此
              </FormCheckbox>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
)
  }
}

SidebarCategories.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};


var title =  "类型"

export default SidebarCategories;
