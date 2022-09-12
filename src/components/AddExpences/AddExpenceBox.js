import AddExpenceForm from "./AddExpenceForm";
import Card from "../Ui/Card";

const AddExpenceBox = (props) => {
  const submitedFunc = (enteredExpence) => {
    const expenceData = {
      ...enteredExpence
    }
    props.onAddingNewExpence(expenceData)
  }

  return <Card className="row p-3">
    <AddExpenceForm onSubmitExpence = {submitedFunc} ></AddExpenceForm>
  </Card>;
};
export default AddExpenceBox;
