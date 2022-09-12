import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition"
import "react-multi-date-picker/styles/layouts/mobile.css"
import { useState } from "react";

const TimePicker = (props) => {

  const [value, setValue] = useState()


  const handleChange = (value) => {
    setValue(value)
    const Date = value.year + '/' + value.month.number + '/' + value.day;
    props.onSetDate (Date);
  }

  return (
    <DatePicker
      calendar={persian}
      locale={persian_fa}
      animations={[
        transition({ duration: 800, from: 35 })
      ]} 
      className="rmdp-mobile"
      inputClass="col-12 font-1 p-1 d-block select_field"
      value={value}
      onChange={handleChange}
    />
  );
};

export default TimePicker;
