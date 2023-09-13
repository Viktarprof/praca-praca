import React from "react";
import s from "./Select.module.css";

function Select({ options, initialValue, style, icon }) {
  return (
    <div className={s.containerSelect}>
      {icon}
      <select className={`${s[style]}`}>
        <option value="">{initialValue}</option>
        {options.map((data, index) => (
          <option key={index} value={data.title}>
            {data.title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;

