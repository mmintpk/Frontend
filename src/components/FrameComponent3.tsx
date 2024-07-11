import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <header className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.buttonParent}>
        <div className={styles.button}>
          <div className={styles.div}>ตรวจสอบรายชื่อ</div>
        </div>
        <div className={styles.wrapper}>
          <h3 className={styles.h3}>ชำระเงิน</h3>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.button1}>
            <div className={styles.div1}>กำหนดชำระเงิน</div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent3;
