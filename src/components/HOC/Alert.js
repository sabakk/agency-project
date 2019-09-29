import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { removeAlert } from "../../actions/alertAction";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const Alert = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector(state => state.alert.open);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => dispatch(removeAlert())}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Congratulations</h2>
            <p id="transition-modal-description">
              You have successfully passed the registration.
            </p>
            <div onClick={() => dispatch(removeAlert())}>OK</div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default Alert;
