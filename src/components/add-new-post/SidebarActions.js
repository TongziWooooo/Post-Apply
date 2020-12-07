/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import PropTypes from "prop-types";
import RangeDatePicker from "../common/RangeDatePicker";
import CustomFileUpload from "../components-overview/CustomFileUpload";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
  FormInput
} from "shards-react";

const SidebarActions = ({ title }) => (
  <Card small className="mb-3">
    {/* <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader> */}

    <CardBody className="p-0">
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <label>召集时间</label>
          <RangeDatePicker />
        </ListGroupItem>
        <ListGroupItem className="p-3">
            <label>召集人数</label>
            <FormInput
                    id="feID"
                    value="12"
                    onChange={() => {}}
            />
        </ListGroupItem>
        <ListGroupItem className="p-3">
        <label>介绍图片</label>
          <CustomFileUpload />
        </ListGroupItem>
        <ListGroupItem className="d-flex px-3 border-0">
          <Button outline theme="accent" size="sm">
            <i className="material-icons">save</i> Save Draft
          </Button>
          <Button theme="accent" size="sm" className="ml-auto">
            <i className="material-icons">file_copy</i> Publish
          </Button>
        </ListGroupItem>
      </ListGroup>
    </CardBody>
  </Card>
);

SidebarActions.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

SidebarActions.defaultProps = {
  title: "召集设置"
};

export default SidebarActions;
