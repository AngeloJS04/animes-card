import React, { useState } from "react";
import { ModalI } from "../../interface/Modal.interface";



const Modal = ({ active, children, toggle, header, width = "mw-650px", realWidth }: ModalI) => {
  const [animation, setAnimation] = useState(false);
  return (
    <>
      <div
        className={`fade ${active && "modal show"}  back-modal  animate__fadeOut`}
        id="kt_modal_new_target"
        tabIndex={-1}
        aria-modal={active}
        role="dialog"
        style={{ display: "block", zIndex: 1000 }}
      >

        <div
          onClick={() => {
            setAnimation(true)
            setTimeout(() => {
              toggle()
            }, 70);
          }}
          style={{
            background: "#00000075",
            height: "100vh",
            zIndex: -1,
            position: "fixed",
            width: "100%",
          }}
        />
        <div
          className={`modal-dialog modal-dialog-centered ${width}  animate__animated  ${active && 'animate__fadeInDown'} ${animation && ' animate__fadeOutUp'} }`}
          style={{ animationDuration: '1s', maxWidth: realWidth, width: "500px !important" }}
          data-select2-id="select2-data-72-7h6m"
        >
          <div className="modal-content rounded">
            <div className="modal-header pb-2">
              <div className="mx-8">
                {typeof header == 'function' ?
                  header() : <h2 className="fw-bolder fs-3">{header}</h2>}
              </div>
              <div
                className="mb-2"
                data-bs-dismiss="modal"
              >
                <span onClick={() => {
                  setAnimation(true)
                  setTimeout(() => {
                    toggle()
                  }, 70);
                }} className=" btn-sm cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      opacity="0.5"
                      x="6"
                      y="17.3137"
                      width="16"
                      height="2"
                      rx="1"
                      transform="rotate(-45 6 17.3137)"
                      fill="black"
                    ></rect>
                    <rect
                      x="7.41422"
                      y="6"
                      width="16"
                      height="2"
                      rx="1"
                      transform="rotate(45 7.41422 6)"
                      fill="black"
                    ></rect>
                  </svg>
                </span>
              </div>
            </div>
            <div
              id="contain-popup"
              className="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15"
              style={{ overflow: 'visible' }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
