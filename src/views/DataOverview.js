import React, {Component} from "react";
import PropTypes from "prop-types";
import {Button, Card, CardBody, Col, Container, FormSelect, Row} from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";
import UsersOverview from "./../components/data-overview/UsersOverview";
import TopUsers from "./../components/data-overview/TopUsers";
import RangeDatePicker from "../components/common/RangeDatePicker";
class DataOverview extends Component {

  constructor(props){
    super(props)
    this.state = {
      start_date: undefined,
      end_date: undefined,
      city: undefined,
      type: undefined,
      formated_start_date: undefined,
      formated_end_date: undefined,
      token_type: "所有类别",
      province: undefined,


      smallStats: [
        {
          label: "成交单数",
          value: "0",
          percentage: "4.7%",
          increase: true,
          chartLabels: [null, null, null, null, null, null, null],

          attrs: {md: "6", sm: "6"},
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
          value: "0",
          percentage: "12.4",
          increase: true,
          chartLabels: [null, null, null, null, null, null, null],
          attrs: {md: "6", sm: "6"},
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
      ],
      chartData: {
        labels: Array.from(new Array(30), (_, i) => (i === 0 ? 1 : i)),
        datasets: [
          {
            label: "成交单数",
            fill: "start",
            data:Array(30).fill(0),
            backgroundColor: "rgba(0,123,255,0.1)",
            borderColor: "rgba(0,123,255,1)",
            pointBackgroundColor: "#ffffff",
            pointHoverBackgroundColor: "rgb(0,123,255)",
            borderWidth: 1.5,
            pointRadius: 0,
            pointHoverRadius: 3
          },
          {
            label: "中介费金额",
            fill: "start",
            data: Array(30).fill(0),
            backgroundColor: "rgba(255,65,105,0.1)",
            borderColor: "rgba(255,65,105,1)",
            pointBackgroundColor: "#ffffff",
            pointHoverBackgroundColor: "rgba(255,65,105,1)",
            borderDash: [3, 3],
            borderWidth: 1,
            pointRadius: 0,
            pointHoverRadius: 2,
            pointBorderColor: "rgba(255,65,105,1)"
          }
        ]
      },
      chart:null,//<UsersOverview title="统计图"     />// <UsersOverview title="统计图" chartData={this.state.chartData}    />
      rank_list:[],
      rank_type: "order",

      cityOptions: []
    }

    this.cityDict = {
      "所有省": [],
      "北京市": ["北京市"],
      "广东省": ["广州市", "深圳市", "中山市"],
      "福建省": ["莆田市", "厦门市", "福州市"]
    }


    this.orderList = [];
    this.moneyList = [];

    this.handleStartDateChange = this.handleStartDateChange.bind(this)
    this.handleEndDateChange = this.handleEndDateChange.bind(this)
    this.handleTypeChange = this.handleTypeChange.bind(this)
    this.handleCityChange = this.handleCityChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.changeRankType = this.changeRankType.bind(this)
    this.handleProChange = this.handleProChange.bind(this)
  }

  changeRankType(e) {
    this.setState({rank_type: e.target.value});
  }

  handleStartDateChange(time,fmt){
    // alert(time)
    console.log(fmt)
    console.log(time)
    this.setState({
      start_date:new Date(time ),
      formated_start_date:fmt
    })
  }


  handleEndDateChange(time,fmt){
    // alert(time)
    console.log(fmt)
    console.log(time)
    this.setState({
      end_date:new Date(time),
      formated_end_date:fmt
    })
  }

  handleTypeChange(e){
    this.setState({token_type:e.target.value})
    // alert(e.target.value)

  }

  handleProChange(e){
    this.setState({cityOptions: this.cityDict[e.target.value]});
  }

  handleCityChange(e){
    // alert(e.target.value)
    if (e.target.value === "选择城市") {
      this.setState({city: undefined})
    } else {
      this.setState({city:e.target.value})
    }
  }

  onSubmit(){
    fetch("http://10.128.222.68:5000/chart?start_date="+this.state.formated_start_date+"&end_date="+this.state.formated_end_date+"&city="+this.state.city+"&type="+this.state.token_type,{
      method: 'get',
      credentials: 'include',
      headers: {
               'Accept': 'application/json',
        'Authorization':window.sessionStorage.getItem('Authorization'),
        'Content-Type': 'application/json',
      }
    }).then((res)=>res.json()).then((res)=>{
        console.log(res.data.num_arr)
        let arr = [{
          label: "成交单数",
          value: res.data.total_num,
          chartLabels: Array(res.data.label.length).fill(null),
          attrs: { md: "6", sm: "6" },
          datasets: [
            {
              label: "Today",
              fill: "start",
              borderWidth: 1.5,
              backgroundColor: "rgba(0, 184, 216, 0.1)",
              borderColor: "rgb(0, 184, 216)",
              data: res.data.num_arr
            }
          ]
        },
        {
          label: "成交金额",
          value: res.data.total_income,
          percentage: "12.4",
          increase: true,
          chartLabels: Array(res.data.label.length).fill(null),
          attrs: { md: "6", sm: "6" },
          datasets: [
            {
              label: "Today",
              fill: "start",
              borderWidth: 1.5,
              backgroundColor: "rgba(23,198,113,0.1)",
              borderColor: "rgb(23,198,113)",
              data: res.data.income_arr
            }
            ]
          }]
        console.log(arr[0].chartLabels)
        this.setState({smallStats:arr})

        let chartData =
        {
          labels: res.data.label,
          datasets:
          [
            {
              label: "成交单数",
              fill: "start",
              data: res.data.num_arr,
              backgroundColor: "rgba(0,123,255,0.1)",
              borderColor: "rgba(0,123,255,1)",
              pointBackgroundColor: "#ffffff",
              pointHoverBackgroundColor: "rgb(0,123,255)",
              borderWidth: 1.5,
              pointRadius: 0,
              pointHoverRadius: 3
            },
            {
              label: "中介费金额",
              fill: "start",
              data: res.data.income_arr,
              backgroundColor: "rgba(255,65,105,0.1)",
              borderColor: "rgba(255,65,105,1)",
              pointBackgroundColor: "#ffffff",
              pointHoverBackgroundColor: "rgba(255,65,105,1)",
              borderDash: [3, 3],
              borderWidth: 1,
              pointRadius: 0,
              pointHoverRadius: 2,
              pointBorderColor: "rgba(255,65,105,1)"
            }
          ]
        }
        this.setState({chartData:chartData},
      //   ()=> {   setTimeout(() => {  this.setState({chart:<UsersOverview title="统计图" chartData={this.state.chartData}    />}) }, 200)
      // }
      )
      console.log(chartData)
    })
    fetch("http://10.128.222.68:5000/rank?start_date="+this.state.formated_start_date+"&end_date="+this.state.formated_end_date+"&city="+this.state.city+"&type="+this.state.token_type,{
      method: 'get',
      credentials: 'include',
      headers: {
               'Accept': 'application/json',
        'Authorization':window.sessionStorage.getItem('Authorization'),
        'Content-Type': 'application/json',
      }
    }).then((res)=>res.json()).then((res)=>{
      // res.data.order
      // res.data.money
      // [id, 数据, 用户名]
      // console.log(res.data)

      if (this.state.rank_type === "order") {
        this.setState({rank_list: res.data.order})
      } else {
        this.setState({rank_list: res.data.money})
      }

      // this.orderList = res.data.order.sort((a, b) => {
      //   return a[1] > b[1];
      // });
      // this.moneyList = res.data.money.sort((a, b) => {
      //   return a[1] > b[1];
      // });
    })

  }
    componentWillMount() {
      // fetch("http://10.128.222.68:5000/rank?start_date="+this.state.formated_start_date+"&end_date="+this.state.formated_end_date+"&city="+this.state.city+"&type="+this.state.token_type,{
      //   method: 'get',
      //   credentials: 'include',
      //   headers: {
      //            'Accept': 'application/json',
       // 'Authorization':window.sessionStorage.getItem('Authorization'),//     'Authorization':window.sessionStorage.getItem('Authorization'),
      //     'Content-Type': 'application/json',
      //   }
      // }).then((res)=>res.json()).then((res)=>{
      //   this.setState({rank_list: res.data.order})
      // })


      }

  render() {
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle title="成交数据" subtitle="Dashboard" className="text-sm-left mb-3"/>
        </Row>
        <Row className="mb-4">
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col className="d-flex mb-2 mb-sm-0">
                    <RangeDatePicker start_date={this.state.start_date} end_date={this.state.end_date} handleStartDateChange={this.handleStartDateChange} handleEndDateChange={this.handleEndDateChange}/>
                  </Col>
                  <Col>
                    <FormSelect onChange={this.handleProChange}>
                      <option value="所有省">所有省</option>
                      <option value="北京市">北京市</option>
                      <option value="福建省">福建省</option>
                      <option value="广东省">广东省</option>
                    </FormSelect>
                  </Col>

                  <Col>
                    <FormSelect onChange={this.handleCityChange}>
                      <option>选择城市</option>
                      {
                        this.state.cityOptions.map(city => {
                          return <option value={city}>{city}</option>
                        })
                      }
                    </FormSelect>
                  </Col>
                  <Col>
                    <FormSelect onChange={(e)=>this.handleTypeChange(e)}>
                      <option selected>所有类别</option>
                      <option value="技术交流">技术交流</option>
                      <option value="学业探讨">学业探讨</option>
                      <option value="社会实践">社会实践</option>
                      <option value="公益志愿">公益志愿</option>
                      <option value="缘来如此">缘来如此</option>
                    </FormSelect>
                  </Col>
                  <Col>
                    <Button
                      size="sm" outline
                      className="d-flex ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0"
                      onClick={this.onSubmit}
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
              {this.state.smallStats.map((stats, idx) => (
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
                <UsersOverview title="统计图" chartData={this.state.chartData}></UsersOverview>
              </Col>
            </Row>
          </Col>
          <Col>
            <TopUsers
              rank_list={this.state.rank_list}
              rank_type={this.state.rank_type}
              changeRankType={this.changeRankType}
            />
          </Col>
        </Row>


      </Container>
    )
  }
}


DataOverview.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: PropTypes.array
};


export default DataOverview;
