import React, { FC } from "react";
import { DateObj } from "./DatePicker";
import { TextField } from "@material-ui/core";
import { format } from "date-fns";

interface TextListDatesProps {
  dates: DateObj[];
}
const TextListDates: FC<TextListDatesProps> = ({ dates = [] }) => {
  const getText = (items: DateObj[]): string => {
    let ret: string = "";
    for (let i = 0; i < items.length; i++) {
      ret +=
        format(items[i].sDate, "MM/dd(eee)'  'HH:mm") +
        " - " +
        format(items[i].eDate, "HH:mm") +
        "\n";
    }
    return ret;
  };
  return (
    <div
      style={{
        maxWidth: 300,
        marginLeft: "auto",
        marginRight: "auto",
        padding: 20
      }}
    >
      <p>--- TextListDates ---</p>
      <TextField
        id="outlined-multiline-flexible"
        multiline
        defaultValue={getText(dates)}
        fullWidth={true}
        variant="outlined"
      />
    </div>
  );
};

export default TextListDates;
