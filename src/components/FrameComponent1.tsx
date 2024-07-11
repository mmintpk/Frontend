import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.paymentInner, className].join(" ")}>
      <div className={styles.parent}>
        <div className={styles.div}>
          <div className={styles.child} />
          <div className={styles.email}>ชื่อ</div>
        </div>
        <div className={styles.div1}>
          <div className={styles.item} />
          <div className={styles.email1}>นามสกุล</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
