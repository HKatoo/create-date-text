import React, { FC, useState } from "react";
import ListDates from "./ListDates";
import TextListDates from "./TextListDates";
import { compareAsc } from "date-fns";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { isBefore } from "date-fns";
import DateFnsUtils from "@date-io/date-fns";

export interface DateObj {
  sDate: Date;
  eDate: Date;
}

const DatePicker: FC = () => {
  //const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [dates, setDates] = useState<DateObj[]>([]);

  const add = () => {
    if (!(startDate && endDate)) return;
    if (isBefore(startDate, endDate)) {
      const tmp: DateObj = { sDate: startDate, eDate: endDate };
      const check = dates.some(
        date => date.sDate === startDate && date.eDate === endDate
      );
      console.log(check);
      if (!check) {
        setDates(
          dates.concat(tmp).sort((x, y) => compareAsc(x.sDate, y.sDate))
        );
      }
    }
  };

  const remove = (idx: number) => {
    setDates(dates.filter((dates, index) => index !== idx));
  };

  return (
    <div
      style={{
        maxWidth: 800,
        padding: "0 30",
        marginLeft: "auto",
        marginRight: "auto"
      }}
    >
      <Grid container spacing={3}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid item xs={4}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date"
              format="yyyy/MM/dd"
              value={startDate}
              onChange={value => {
                setStartDate(value);
                setEndDate(value);
              }}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Start Time"
              value={startDate}
              onChange={value => setStartDate(value)}
              KeyboardButtonProps={{
                "aria-label": "change time"
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="End Time"
              value={endDate}
              onChange={value => setEndDate(value)}
              KeyboardButtonProps={{
                "aria-label": "change time"
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={add}
            style={{ width: "100%" }}
          >
            ADD
          </Button>
        </Grid>
        <Grid item xs={12}>
          <ListDates items={dates} remove={remove} />
        </Grid>
        <Grid item xs={12}>
          <TextListDates dates={dates} />
        </Grid>
      </Grid>
    </div>
  );
};

export default DatePicker;
