import React, { FC } from "react";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { Select, Button } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

const dateFns = new DateFnsUtils();

const DatePicker: FC = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    dateFns.date()
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    console.log(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="flex-start" alignItems="baseline">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="yyyy/MM/dd"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change time"
          }}
        />
        <Select></Select>
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
