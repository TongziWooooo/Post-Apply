import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Row,
  Col
} from "shards-react";
import {Link} from "react-router-dom";

class ApplyList extends React.Component {
  constructor(props) {
    super(props);
    this.handleAgree = this.handleAgree.bind(this)
    this.state = {
        post:[{
        id: 1,
        date: "1",
        token_id:"0",
        req_id:"0",
          body:"",
        send_user_id:"0",
        state:"0",
        author: {
          id: "1",
          image: require("../../images/avatars/1.jpg"),
          name: "1",
          url: "#"
        },
      }  ]
    }
    this.fetchPostInfo = this.fetchPostInfo.bind(this)
    this.handleDisagree = this.handleDisagree.bind(this)
  }

  fetchPostInfo(){
    // alert(this.props.postID)

    fetch('http://10.128.222.68:5000/token_reqs?token_id='+this.props.postID, {
      method: 'GET',
      credentials: 'include',
      headers: {
               'Accept': 'application/json',
        'Authorization':window.sessionStorage.getItem('Authorization'),
        'Content-Type': 'application/json',
      }
    })
    .then((res)=>{
      if(res.status===200){
        return res.json()
      }
    })
    .then(res=>{

      var arr = []
      let count = 0
      for(var i in res.data){
        var d =  {
          id: count,
          req_id:res.data[i].req_id,
          date: res.data[i].create_time,
          body: res.data[i].disc,

          token_id:res.data[i].token_id,
          send_user_id:res.data[i].send_user_id,
          state:res.data[i].state,
          author: {
            id: res.data[i].user_id,
            image: require("../../images/avatars/1.jpg"),
            name: res.data[i].user_name,
            url: "#"  
          },
        }     
        // alert(this.props.overflow)
        // alert(d.state)
        if(d.state==="0" && !this.props.overflow){
          arr.push(d)
          count = count+1
        }else if(d.state==="2" && this.props.overflow){
          count = count + 1
          arr.push(d)
          
        }
        // alert(count)
      }
      console.log(arr)
      this.setState({post:arr},()=>{console.log(this.state.post)})
      
    })
  }

  componentDidMount(){
    this.fetchPostInfo()

  }
  handleDisagree(e){
    console.log(e.target.value)
    console.log(this.state.post)
    var item = this.state.post[e.target.value]

    fetch("http://10.128.222.68:5000/token_req?user_id="+item.author.id+"&token_id="+item.token_id,{
      method: 'PUT',
      credentials: 'include',
      headers: {
               'Accept': 'application/json',
        'Authorization':window.sessionStorage.getItem('Authorization'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "token_id":item.token_id,
        "user_id":item.author.id,
        "disc":item.body,
        "state":"1"
      })

    }).then((res)=>
      this.props.onAgree(1)
    ).then(setTimeout(() => {console.log("0000")
      this.fetchPostInfo() }, 200))
    //this.fetchPostInfo()


  }
  handleAgree(e){
    console.log(e.target.value)
    console.log(this.state.post)
    console.log(this.state.post[e.target.value])

    var item = this.state.post[e.target.value]
    fetch('http://10.128.222.68:5000/suc_detail', {
      method: 'POST',
      credentials: 'include',
      headers: {
               'Accept': 'application/json',
        'Authorization':window.sessionStorage.getItem('Authorization'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "req_id":item.req_id,
        "send_user_id":item.send_user_id,
        "token_id":item.token_id,
        "recv_user_id":item.author.id
      })

    }).then((res)=>this.props.onAgree()).then(setTimeout(() => {  this.fetchPostInfo() }, 200)
    )
    console.log(e.target.value)
    console.log(this.state.post[e.target.value])
    // this.fetchPostInfo()
    
    // console.log(e.target.v)

    // console.log(e.target.value[1])
    

  }
  render() {
    
    return (
      <Card small className="blog-comments">
        <CardHeader className="border-bottom">
          <h6 className="m-0">请求者</h6>
        </CardHeader>

        <CardBody className="p-0">
          {this.state.post.map((discussion, idx) => (
            <div key={idx} className="blog-comments__item d-flex p-3">
              {/* Avatar */}
              <div className="blog-comments__avatar mr-3">
                <img src={discussion.author.image} alt={discussion.author.name} />
              </div>

              {/* Content */}
              <div className="blog-comments__content">
                {/* Content :: Title */}
                <div className="blog-comments__meta text-mutes">
                  <Link to={{
                    pathname: "/user-profile-lite", state: {userID: discussion.author.id}
                  }} className={"text-secondary"}>
                    {discussion.author.name}
                  </Link>
                  {/*<a className="text-secondary" href={discussion.author.url}>*/}
                  {/*  {discussion.author.name}*/}
                  {/*</a>{" "}*/}
                  {/*<a className="text-secondary" href={discussion.post.url}>*/}
                  {/*  {discussion.post.title}*/}
                  {/*</a>*/}
                  <span className="text-mutes"> - {discussion.date}</span>
                </div>

                {/* Content :: Body */}
                <p className="m-0 my-1 mb-2 text-muted">{discussion.body}</p>

                {/* Content :: Actions */}
                <div className="blog-comments__actions">
                  {this.props.overflow ? <br />:
                  <ButtonGroup size="sm">
                    <Button theme="white" onClick={this.handleAgree} value={discussion.id} >
                  <span className="text-success">
                    <i className="material-icons">check</i>
                  </span>{" "}
                      同意
                    </Button>
                    <Button theme="white" onClick={this.handleDisagree} value={discussion.id}>
                  <span className="text-danger">
                    <i className="material-icons">clear</i>
                  </span>{" "}
                      拒绝
                    </Button>
                    {/* <Button theme="white">
                  <span className="text-light">
                    <i className="material-icons">more_vert</i>
                  </span>{" "}
                  Edit
                </Button> */}
                  </ButtonGroup>
                  }
                </div>
              </div>
            </div>
          ))}
        </CardBody>

        <CardFooter className="border-top">
        </CardFooter>
      </Card>
    )
  }
}

ApplyList.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The discussions dataset.
   */
  ApplyList: PropTypes.array
};

ApplyList.defaultProps = {
  title: "Discussions",
  discussions: [
    {
      id: 1,
      date: "3 days ago",
      author: {
        id: 111,
        image: require("../../images/avatars/1.jpg"),
        name: "John Doe",
        url: "#"
      },
      post: {
        title: "Hello World!",
        url: "#"
      },
      body: "Well, the way they make shows is, they make one show ..."
    }
  ]
};

export default ApplyList;
