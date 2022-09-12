import React from "react";
import ReactDOM from 'react-dom'
import styles from "./Deletemodal.module.css";

const Deletemodal = (props) => {
  const Darkbg = (props) => {
    return <div className={styles.darkBG} onClick={props.onReject}></div>;
  };

  const Modal = (props) => {
    return (
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h5 className={`${styles.heading} font-2`}> حذف هزینه</h5>
        </div>
        <button className={styles.closeBtn} onClick={props.onReject}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </button>
        <div className={styles.modalContent}>
          آیا تمایل به حذف گزینه ی مورد نظر دارید
        </div>
        <div className={styles.modalActions}>
          <div className={styles.actionsContainer}>
            <button className={styles.deleteBtn} onClick={props.onConfirm}>
              حذف
            </button>
            <button className={styles.cancelBtn} onClick={props.onReject}>
              انصراف
            </button>
          </div>
        </div>
      </div>
    );
  };

  return <React.Fragment>
    {ReactDOM.createPortal(<Darkbg onReject={props.onReject}></Darkbg> , document.getElementById('dark-bg'))}
    {ReactDOM.createPortal(<Modal onReject={props.onReject} onConfirm={props.onConfirm} ></Modal> , document.getElementById('modal'))}
  </React.Fragment>;
};

export default Deletemodal;
