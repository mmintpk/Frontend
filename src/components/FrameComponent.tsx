import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.paymentInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.parent}>
          <div className={styles.div}>
            <div className={styles.child} />
            <div className={styles.email}>วันหมดอายุ</div>
          </div>
          <div className={styles.div1}>
            <div className={styles.item} />
            <div className={styles.email1}>CVC</div>
          </div>
          <div className={styles.div2}>
            <div className={styles.inner} />
            <div className={styles.email2}>ZIP CODE</div>
          </div>
        </div>
        <div className={styles.buttonParent}>
          <div className={styles.button}>
            <div className={styles.div3}>ยกเลิก</div>
          </div>
          <div className={styles.button1}>
            <div className={styles.div4}>ตกลง</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
