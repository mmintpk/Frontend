import { FunctionComponent, useCallback } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import styles from "./checkpay.module.css";

const Checkpay: FunctionComponent = () => {
  const onReturnContainerClick = useCallback(() => {
    // Please sync "ตัวเว็บจองพระไตรปิฏก" to the project
  }, []);

  return (
    <div className={styles.div}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.return} onClick={onReturnContainerClick}>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector1.svg"
          />
        </div>
      </div>
      <main className={styles.inner}>
        <section className={styles.frameParent}>
          <FrameComponent3 />
          <div className={styles.frameGroup}>
            <div className={styles.parent}>
              <div className={styles.div1}>
                <div className={styles.child} />
                <div className={styles.reservationInfo}>
                  <div className={styles.div2}>ชื่อ นามสกุล</div>
                </div>
                <div className={styles.reservationInfo1}>
                  <div className={styles.email}>Email / เบอร์โทรศัพท์</div>
                </div>
                <div className={styles.div3}>ประเภทการจอง</div>
                <div className={styles.div4}>ราคา</div>
              </div>
              <div className={styles.visualElement} />
            </div>
            <footer className={styles.group}>
              <button className={styles.button}>
                <div className={styles.div5}>ยกเลิก</div>
              </button>
              <button className={styles.button1}>
                <div className={styles.div6}>บริจาค</div>
              </button>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Checkpay;
