import React , { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { addCommas } from "@persian-tools/persian-tools";
import FilterBox from "./FilterBox";

function ExpenceBox(props) {
  const [filter, filterAssigning] = useState("");
  const filterHandler = (selectedFilter) => {
    filterAssigning(selectedFilter);
  };

  let filteredExpences = "";
  if (filter === "" || filter === "a") {
    filteredExpences = props.items;
  } else {
    filteredExpences = props.items.filter((expence) => {
      return expence.Statuse === filter;
    });
  }

  const Delete = (key) => {
    props.onDelete (key)
  }

  return (
    <React.Fragment>
      <FilterBox selected={filter} onFilterChange={filterHandler} />
      {filteredExpences.length === 0 ? (
        <p className="text-center my-5 text-secondary" >هیج هزینه ای یافت نشد</p>
      ) : (
        filteredExpences.map((expenceObj) => (
          <ExpenseItem
            onDeleteItem={Delete}
            key={expenceObj.Id}
            id={expenceObj.Id}
            title={expenceObj.Title}
            price={addCommas(expenceObj.Price)}
            date={expenceObj.Date}
            time={expenceObj.Time}
            statuse={expenceObj.Statuse}
          />
        ))
      )}
    </React.Fragment>
  );
}

export default ExpenceBox;
