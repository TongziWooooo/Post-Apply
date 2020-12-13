import React from "react";
import { Container, Button } from "shards-react";
import {Constants} from "../flux";
import {Link} from "react-router-dom";

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null
    }
  }

  componentDidMount() {
    if (this.props.location.state.type === Constants.SUCCEED) {
      this.setState({message:
          <div className="error__content">
            <h2>200</h2>
            <h3>Succeed!</h3>
            <p>You have succeeded in your submit.</p>
            <Link to={{pathname: "/"}}>
              <Button pill>&larr; Go Back</Button>
            </Link>
          </div>
      })
    } else {
      this.setState({message:
          <div className="error__content">
            <h2>500</h2>
            <h3>Something went wrong!</h3>
            <p>There was a problem on our end. Please try again later.</p>
            <Link to={{pathname: "/"}}>
              <Button pill>&larr; Go Back</Button>
            </Link>
          </div>
      })
    }
  }

  render() {

    return (
      <Container fluid className="main-content-container px-4 pb-4">
        <div className="error">
          {this.state.message}
        </div>
      </Container>
    );
  }
}

export default Status;
