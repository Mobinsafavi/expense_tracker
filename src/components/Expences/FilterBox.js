import Card from "../Ui/Card";

import styles from '../Ui/Button.module.css' 
import Select from "../Ui/Select";

const FilterBox = (props) => {
  const filterChanging = (event) => {
    props.onFilterChange(event.target.value);
  };
  return (
    <Card className='shadow-sm'>
      <div className="col-12 d-flex my-2">
        <div className="col-2 d-flex  py-2 m-auto">
          <a
            className={`col-6 p-1 font-1 ms-auto ${styles.btn}`}
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bar-chart-fill"
              viewBox="0 0 16 16"
            >
              <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" />
            </svg>
          </a>
        </div>
        <div className="col-5 d-flex py-2">
          <div className="col-10 m-auto">
            <Select
              className="font-1 col-5 p-1 col-12"
              aria-label=".form-select-sm example"
              onChange={filterChanging}
            >
              <option value="a">انتخاب کنید ...</option>
              <option value="پرداخت شده">پرداخت شده</option>
              <option value="در انتظار پرداخت">در انتظار پرداخت</option>
            </Select>
          </div>
        </div>
        <div className="col-5 font-2 text-center m-auto">
          {" "}
          : فیلتر وضعیت هزینه
        </div>
      </div>
    </Card>
  );
};

export default FilterBox;
