import { useState } from "react";
import TimePicker from "./TimePicker";
import { numberToWords } from "@persian-tools/persian-tools";

import Button from "../Ui/Buttton";
import Input from "../Ui/Input";
import Select from "../Ui/Select";

const AddExpenceForm = (props) => {
  const [PrsPrice, PriceHandler] = useState("");

  // adding new expence detailes states
  const [NewTitle, AddNewTitle] = useState("");
  const [NewPrice, AddNewPrice] = useState("");
  const [NewStatus, AddNewStatus] = useState("");
  const [NewDate, AddNewDate] = useState("");

  // expence details validation states
  const [validTitle, isValidTitle] = useState(true);
  const [validPrice, isValidPrice] = useState(true);
  const [validStatus, isValidStatus] = useState(true);
  // const [validDate, isValidDate] = useState(true);

  const NewExpenceTitle = (event) => {
    AddNewTitle(event.target.value);
    if (event.target.value.trim().length > 0) {
      isValidTitle(true);
    }
  };
  const NewExpencePrice = (event) => {
    PriceHandler(numberToWords(event.target.value * 10));
    AddNewPrice(Number(event.target.value));
    if (event.target.value.trim().length > 0) {
      isValidPrice(true);
    }
  };
  const NewExpenceStatus = (event) => {
    AddNewStatus(event.target.value);
    if (event.target.value.trim().length > 0) {
      isValidStatus(true);
    }
  };

  const SubmitNewExpence = (event) => {
    event.preventDefault();
    if (
      NewTitle.length === 0 ||
      NewPrice.length === 0 ||
      NewStatus.length === 0
    ) {
      if (NewTitle.trim().length === 0) {
        isValidTitle(false);
      }
      if (NewPrice.length === 0) {
        isValidPrice(false);
      }
      if (NewStatus.length === 0) {
        isValidStatus(false);
      }
      return;
    } else {
      const NewExpenceObj = {
        Id: Math.random().toString(),
        Title: NewTitle,
        Price: Number(NewPrice),
        Date: NewDate,
        Statuse: NewStatus,
      };
      props.onSubmitExpence(NewExpenceObj);
    }

    AddNewTitle("");
    AddNewPrice("");
    AddNewStatus("");
  };

  const dateHandler = (selectedDate) => {
    AddNewDate(selectedDate);
  };
  return (
    <form onSubmit={SubmitNewExpence}>
      <div
        className={`col-12 mb-2 text-end form-validation  ${
          validTitle === false ? "invalid" : ""
        }`}
      >
        <label className="form-label font-1 fw-bolder text-secondary mb-1">
          : عنوان هزینه
        </label>
        <Input
          type="text"
          className="col-12 p-1 text-secondary text-end font-2"
          value={NewTitle}
          onChange={NewExpenceTitle}
        />
        <p className="font-1 py-1 m-0 d-none text-danger warning-box">
          {" "}
          عنوان هزینه را وارد کنید
        </p>
      </div>
      <div className="d-flex mb-2">
        <p className="col-3 fw-bold font-2 p-1 text-center m-auto">تومان</p>
        <div
          className={`col-9 mb-3 text-end form-validation ${
            validPrice === false ? "invalid" : ""
          }`}
        >
          <label className="form-label font-1 fw-bolder text-secondary mb-1">
            : قیمت
          </label>
          <Input
            type="number"
            className="col-12 p-1 text-secondary text-end font-2"
            value={NewPrice}
            onChange={NewExpencePrice}
          />
          {NewPrice.length === 0 ? (
            <p className="m-0"></p>
          ) : (
            <p className="font-1 py-1 m-0 text-success">
              {" معادل " + PrsPrice + " ریال"}
            </p>
          )}
          <p className="font-1 py-1 m-0 d-none text-danger warning-box">
            قیمت هزینه را وارد کنید
          </p>
        </div>
      </div>
      <div className="d-flex mb-2 justify-content-between">
        <div
          className={`col-5 mb-3 text-end form-validation ${
            validStatus === false ? "invalid" : ""
          }`}
        >
          <label className="form-label font-1 fw-bolder text-secondary mb-1">
            : وضعیت
          </label>
          <Select
            className="font-1 col-5 p-1 col-12"
            aria-label="Default select example"
            value={NewStatus}
            onChange={NewExpenceStatus}
          >
            <option value="نامشخص">انتخاب کنید ...</option>
            <option value="پرداخت شده">پرداخت شده</option>
            <option value="در انتظار پرداخت">در انتظار پرداخت</option>
          </Select>
          <p className="font-1 py-1 m-0 d-none text-danger warning-box">
            وضعیت را مشخص کنید
          </p>
        </div>
        <div className="col-6 mb-3 text-end d-flex flex-column">
          <label className="form-label font-1 fw-bolder text-secondary my-1">
            : تاریخ و ساعت
          </label>
          <TimePicker onSetDate={dateHandler}></TimePicker>
        </div>
      </div>
      <Button type="submit" className="col-5 font-2 mt-2 py-1">
        {" "}
        افزودن{" "}
      </Button>
    </form>
  );
};
export default AddExpenceForm;
