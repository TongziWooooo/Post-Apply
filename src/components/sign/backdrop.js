import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";


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
    <row className="justify-content-center align-items-center">

    <div>
      <Button variant="outlined" color="primary" onClick={handleToggle}>
        Show backdrop
      </Button>
      <Backdrop className={classes.backdrop} open={open} >
        {/*<img src="http://127.0.0.1:5000/videa"></img>*/}

        <Player
          playsInline
          poster="/assets/poster.png"
          fluid={false}
          width={480}
          height={272}
          src="http://127.0.0.1:5000/videa?user_id=12"
        />
        <Button  color="primary" onClick={handleClose}>
          close backdrop
        </Button>
      </Backdrop>
    </div>
    </row>

  );
}
