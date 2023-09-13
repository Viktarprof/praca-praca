import React from "react";
import s from "./Input.module.css";

function Input({ id, type, style, onChange }) {
  return (
    <>
      <input 
        onChange={onChange} 
        id={id} 
        className={`${s[style]}`} 
        type={type} />
      <label htmlFor={id}></label>
    </>
  );
}

export default Input;
