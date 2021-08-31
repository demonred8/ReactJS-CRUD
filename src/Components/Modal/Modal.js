import React from "react";
import cl from "./Modal.module.css";

function Modal({ title, children, visible, setVisible }) {
  const rootClasses = [cl.modal_container];

  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={cl.modal_content} onClick={(e) => e.stopPropagation()}>
        <div className={cl.modal_header}>
          <span className={cl.modal_window_title}>{title}</span>
          <button className={cl.modal_close} onClick={() => setVisible(false)}>&times;</button>
        </div>
        <div className={cl.modal_window}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
