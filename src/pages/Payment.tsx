import { FunctionComponent } from "react";
import Paycom from "../components/Paycom";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./Payment.module.css";

const Payment: FunctionComponent = () => {
  return (
    <div className={styles.payment}>
      <Paycom />
      <FrameComponent1 />
      <div className={styles.wrapper}>
        <div className={styles.div}>
          <div className={styles.child} />
          <input
            className={styles.email}
            placeholder="Card Number"
            type="text"
          />
        </div>
      </div>
      <FrameComponent />
    </div>
  );
};

export default Payment;
