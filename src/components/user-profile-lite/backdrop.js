import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Player } from 'video-react';
// import "../../../node_modules/video-react/dist/video-react.css";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button
} from "shards-react";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function SimpleBackdrop() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button outline onClick={handleToggle}>
        介绍视频
      </Button>
      <Backdrop className={classes.backdrop} open={open} >
        {/*<img src="http://10.128.222.68:5000/videa"></img>*/}
        <Container fluid className="main-content-container px-4 pb-4 row justify-content-center">
          <Card>
            <CardBody>
              <Row className="p-4">
                <Col>
                  <Player
                    playsInline
                    poster="/assets/poster.png"
                    fluid={false}
                    width={640}
                    height={360}
                    src="http://10.128.222.68:5000/videa?user_id=12"
                  />
                </Col>
              </Row>
              <Row className="py-2 justify-content-center">
                <Col className="d-flex justify-content-center">
                  <Button outline theme="danger" onClick={handleClose}>
                    关闭
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Container>

      </Backdrop>
    </div>
  );
}
