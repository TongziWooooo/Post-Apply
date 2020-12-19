import {Col, Container, Row} from "shards-react";
import PageTitle from "../components/common/PageTitle";
import PostDetail_2 from "../components/post-detail/PostDetail_2";
import React from "react";


class ManagerPostView extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title={"召集令"} subtitle="You are wanted" className="text-sm-left" />
        </Row>
        <Row>
          <Col lg="6" md="6" sm="12" className="">
            <PostDetail_2 post={this.props.location.state.post} edit={false}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ManagerPostView;
