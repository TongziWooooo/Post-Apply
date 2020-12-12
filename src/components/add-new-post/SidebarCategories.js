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
  InputGroupAddon,
  FormCheckbox,
  FormInput
} from "shards-react";

class SidebarCategories extends Component{

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      orange: false,
      lemon: false,
      kiwi: false
    };
  }

  handleChange(e, type) {

    this.props.handleTypeChange(type)
  }



    // "技术交流","学业探讨","社会实践","公益志愿","缘来如此"

  render(){
    return(  
        <Card small className="mb-3">
        <CardHeader className="border-bottom">
          <h6 className="m-0">{title}</h6>
        </CardHeader>
        <CardBody className="p-0">
          <ListGroup flush>
            <ListGroupItem className="px-3 pb-2">
              <FormCheckbox className="mb-1" value="uncategorized" 
              checked={this.props.type.jsjl}
              onChange={e => this.handleChange(e, "jsjl")}   >
                技术交流
              </FormCheckbox>
              <FormCheckbox className="mb-1" value="design" 
                          checked={this.props.type.xstt}
                          onChange={e => this.handleChange(e, "xstt")}                
              >
                学业探讨
              </FormCheckbox>
              <FormCheckbox className="mb-1" value="development"
              checked={this.props.type.shsj}
              onChange={e => this.handleChange(e, "shsj")}   >
                社会实践
              </FormCheckbox>
              <FormCheckbox className="mb-1" value="writing"
              checked={this.props.type.gyzy}
              onChange={e => this.handleChange(e, "gyzy")}   >
                公益志愿
              </FormCheckbox>
              <FormCheckbox className="mb-1" value="books"
              checked={this.props.type.yw}
              onChange={e => this.handleChange(e, "yw")}   >
                缘来如此
              </FormCheckbox>
            </ListGroupItem>

            {/* <ListGroupItem className="d-flex px-3">
              <InputGroup className="ml-auto">
                <FormInput placeholder="New category" />
                <InputGroupAddon type="append">
                  <Button theme="white" className="px-2">
                    <i className="material-icons">add</i>
                  </Button>
                </InputGroupAddon>
              </InputGroup>
    </ListGroupItem> */}
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
