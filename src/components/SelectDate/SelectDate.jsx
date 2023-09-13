import React from "react";
import s from "./SelectDate.module.css";
import Select from "../UI/Select/Select";
import { months, years } from "../../data";
import { AiOutlineCalendar } from "react-icons/ai";

function SelectDate() {
  return (
    <div className={s.container}>
      <Select 
        icon={<AiOutlineCalendar />}
        style="selectDate" 
        initialValue="Wybierz rok" 
        options={years} />
      <Select
        icon={<AiOutlineCalendar />}
        style="selectDate"
        initialValue="Wybierz miesiąc"
        options={months}
      />
      
    </div>
  );
}

export default SelectDate;
