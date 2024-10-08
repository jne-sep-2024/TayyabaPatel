import React, { useState } from "react";
import { Stack, TextField } from "@mui/material";
import { DatePicker, DateTimePicker, TimePicker } from "@mui/x-date-pickers"; // Updated import path

export default function MuiDateTime() {
  const [selectDate, setDate] = useState(null);
  const [selectTime, setTime] = useState(null);
  const [selectDateTime, setDateTime] = useState(null);
  console.log(selectDate);
  console.log(selectTime);
  console.log(selectDateTime);

  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DatePicker
        label="Date Picker"
        renderInput={(params) => <TextField {...params} />} // Fixed return
        value={selectDate}
        onChange={(newValue) => {
          setDate(newValue);
        }}
      />
      <TimePicker
        label="Date Picker"
        renderInput={(params) => <TextField {...params} />} // Fixed return
        value={selectDate}
        onChange={(newValue) => {
          setTime(newValue);
        }}
      />
      <DateTimePicker
        label="Date Picker"
        renderInput={(params) => <TextField {...params} />} // Fixed return
        value={selectDateTime}
        onChange={(newValue) => {
          setDateTime(newValue);
        }}
      />
    </Stack>
  );
}
