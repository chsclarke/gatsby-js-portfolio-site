import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Dropdown from './Dropdown'


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  exportButton: { 
    background: "#495057",
    color: "#fff",
    textalign: "center",
    '&:hover': {
        background: "#868e96",
    }
  },
  outline: "none",
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className="subheading text-primary" id="simple-modal-title">Export Resume</div>   
      <p>Please select your prefered resume format.</p>    
      <Dropdown/>
    </div>
  );

  return (
    <div>
      <Box mt="2rem">
        <Button className={classes.exportButton} onClick={handleOpen}>
          Export Resume
        </Button>
        <br/>
        <p className="navbar-text">
                Want to build your own resume site? check the source <a href="https://github.com/chsclarke/gatsby-js-portfolio-site">here</a>
        </p>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
