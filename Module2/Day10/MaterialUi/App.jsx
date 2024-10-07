import { useState } from "react";
import "./App.css";
import MuiTypography from "./Components/MuiTypography";
import MuiButton from "./Components/MuiButton";
import MuiTextField from "./Components/MuiTextField";
import MuiSelect from "./Components/MuiSelect";
import MuiRadioButtons from "./Components/MuiRadioButton";
import MuiCheckbox from "./Components/MuiCheckBox";
import MuiSwitch from "./Components/MuiSwitch";
import MuiRating from "./Components/MuiRating";
import MuiBox from "./Components/MuiBox";
import MuiStack from "./Components/MuiStack";
import MuiGrid from "./Components/MuiGrid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>TypoGraphy</div>
      <MuiTypography />
      <hr />
      <br />
      <h2>button</h2>
      <MuiButton />
      <hr />
      <br />
      <h2>Text Field</h2>
      <MuiTextField />
      <hr />
      <br />
      <h2>MuiSelect</h2>
      <MuiSelect />
      <hr />
      <br />
      <h2>Mui RadioButton</h2>
      <MuiRadioButtons />
      <hr />
      <br />
      <h2>Mui CheckBox</h2>
      <MuiCheckbox />
      <hr />
      <br />
      <h2>Mui Switch</h2>
      <MuiSwitch />
      <hr />
      <br />
      <h2>Mui Rating</h2>
      <MuiRating />
      <hr />
      <br />
      <h2>Mui Box</h2>
      <MuiBox />
      <hr />
      <br />
      <h2>Mui Stack</h2>
      <MuiStack />
      <hr />
      <br />
      <h2>Mui Grid</h2>
      <MuiGrid />
    </>
  );
}

export default App;
