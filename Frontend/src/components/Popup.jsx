import React from 'react';
import "../style/popup.css";
import { RxCross2 } from "react-icons/rx";

export default function Popup({ message, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <p>{message}</p>
        <button onClick={onClose}><RxCross2 /></button>
      </div>
    </div>
  );
}
