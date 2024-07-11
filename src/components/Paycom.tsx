import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Paycom.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const Paycom: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    // Please sync "QR" to the project
  }, []);

  return (
    <section className={`${styles.frameParent} ${className}`}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.paymentWrapper}>
            <a className={styles.payment}>Payment</a>
          </div>
          <div
            className={styles.statusIconParent}
            onClick={onFrameContainerClick}
          >
            <div className={styles.statusIcon} />
            <img
              className={styles.closeIcon}
              loading="lazy"
              alt=""
              src="/close@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.div}>ช่องทางการชำระเงิน</div>
      <div className={styles.kBankParent}>
        <div className={styles.kBank}>
          <div className={styles.paypal}>
            <img className={styles.paypal1Icon} alt="" src="/paypal-1@2x.png" />   
          </div> 
          <img
            className={styles.images1Icon}
            loading="lazy"
            alt=""
            src="/images-1@2x.png"
          />
        </div>
        <div className={styles.paypalParent} onClick={onGroupContainerClick}>
          <div className={styles.paypal1}>
            <img
              className={styles.paypal1Icon1}
              alt=""
              src="/paypal-1@2x.png"
            />
          </div>
          <img
            className={styles.promptpayLogo1Icon}
            loading="lazy"
            alt=""
            src="/promptpaylogo-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Paycom;
