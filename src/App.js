import { useState } from "react";
import ExpenceBox from "./components/Expences/ExpenceBox";
import AddExpenceBox from "./components/AddExpences/AddExpenceBox";
import Chart from "./components/Chart/Chart";

const initialExpenceList = [
  {
    Id: 1,
    Title: "خرید گوشی از فروشنده در خیابان احمد آباد",
    Price: 19000,
    Date: "۱۴۰۱/۰۷/۱۵",
    Time: "۲۰ : ۱۷",
    Statuse: "پرداخت شده",
  },
  {
    Id: 2,
    Title: "خرید مانیتور از فروشگاه اینترنتی دیجی کالا",
    Price: 15000,
    Date: "۱۴۰۰/۰۳/۱۵",
    Time: "۲۰ : ۱۷",
    Statuse: "در انتظار پرداخت",
  },
];

function App() {
  const [expenceList, addingNewExpence] = useState(initialExpenceList);

  const addingToExpenseList = (newExpenceData) => {
    addingNewExpence((prevExpenceList) => {
      return [newExpenceData, ...prevExpenceList];
    });
  };

  const deletingItem = (deleteKey) => {
    addingNewExpence((prevGoals) => {
      const expenceList = prevGoals.filter((item) => item.Id !== deleteKey);
      return expenceList;
    });
  };

  return (
    <div className="container">
      <AddExpenceBox onAddingNewExpence={addingToExpenseList} />
      <Chart items={expenceList} />
      <ExpenceBox items={expenceList} onDelete={deletingItem} />
    </div>
  );
}

export default App;
