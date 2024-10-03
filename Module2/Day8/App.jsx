import FormWithoutYup from "./Components/FormWithoutYup";
import "./App.css";
import FormWithYup from "./Components/FormWithYup";
import { Provider } from "react-redux";
import { store } from "./Components/Redux/BookStore";
import BookContainer from "./Components/BookContainer";
import FormUsingYup from "./Components/FormUsingYup";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Implement Validation Withuat using Yup :</h1>
        <FormWithoutYup />
        <hr />
        <h1>Implement Validation using Yup :</h1>
        <FormWithYup />
        <hr />
        <h1>Redux </h1>
        <BookContainer />
        <hr />
        <h1>Nasted Object</h1>
        <FormUsingYup />
      </div>
    </Provider>
  );
}

export default App;
