import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { removeAlert } from "../../actions/alertAction";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Alert.module.scss";

const Alert = () => {
  const dispatch = useDispatch();
  const open = useSelector(state => state.alert.open);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={styles.modal}
        open={open}
        onClose={() => dispatch(removeAlert())}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={styles.paper}>
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
