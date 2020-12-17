import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Button, Card, CardBody, FormSelect } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";
import UsersOverview from "./../components/data-overview/UsersOverview";
import TopUsers from "./../components/data-overview/TopUsers";
import RangeDatePicker from "../components/common/RangeDatePicker";

const DataOverview = ({ smallStats }) => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="成交数据" subtitle="Dashboard" className="text-sm-left mb-3" />
    </Row>
    <Row className="mb-4">
      <Col>
        <Card>
          <CardBody>
            <Row>
              <Col className="d-flex mb-2 mb-sm-0">
                <RangeDatePicker />
              </Col>
              <Col>
                <FormSelect>
                  <option selected>所有省</option>
                  <option value="1">北京市</option>
                  <option value="2">福建省</option>
                  <option value="3">广东省</option>
                </FormSelect>
              </Col>
              <Col>
                <FormSelect>
                  <option selected>所有市</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </FormSelect>
              </Col>
              <Col>
                <FormSelect>
                  <option selected>所有类别</option>
                  <option value="1">技术交流</option>
                  <option value="2">学业探讨</option>
                  <option value="3">社会实践</option>
                  <option value="4">公益志愿者</option>
                  <option value="5">游玩</option>
                </FormSelect>
              </Col>
              <Col>
                <Button
                  size="sm" outline
                  className="d-flex ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0"
                >
                  GO
                </Button>
              </Col>
            </Row>
          </CardBody>          
        </Card>
      </Col>

    </Row>
    <Row>
      <Col className="col-8">
        {/* Small Stats Blocks */}
        <Row>
          {smallStats.map((stats, idx) => (
            <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
              <SmallStats
                id={`small-stats-${idx}`}
                variation="1"
                chartData={stats.datasets}
                chartLabels={stats.chartLabels}
                label={stats.label}
                value={stats.value}
                percentage={stats.percentage}
                increase={stats.increase}
                decrease={stats.decrease}
              />
            </Col>
          ))}
        </Row>

        <Row>
          {/* Users Overview */}
          <Col lg="12" md="12" sm="12" className="mb-4">
            <UsersOverview title="统计图" />
          </Col>
        </Row>
      </Col>
      <Col>
        <TopUsers />
      </Col>
    </Row>

  
  </Container>
);

DataOverview.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: PropTypes.array
};

DataOverview.defaultProps = {
  smallStats: [
    {
      label: "成交单数",
      value: "2,390",
      percentage: "4.7%",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(0, 184, 216, 0.1)",
          borderColor: "rgb(0, 184, 216)",
          data: [1, 2, 1, 3, 5, 4, 7]
        }
      ]
    },
    {
      label: "成交金额",
      value: "182",
      percentage: "12.4",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(23,198,113,0.1)",
          borderColor: "rgb(23,198,113)",
          data: [1, 2, 3, 3, 3, 4, 4]
        }
      ]
    }
  ]
};

export default DataOverview;
