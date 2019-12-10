import React, { FC } from "react";
import { DateObj } from "./DatePicker";
import { format } from "date-fns";
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

interface ListDatesProps {
  items?: DateObj[];
  remove?: (idx: number) => void;
}

const ListDates: FC<ListDatesProps> = ({ items = [], remove = () => {} }) => {
  const getFormatedDate = (date_pair: DateObj): string => {
    return (
      format(date_pair.sDate, "yyyy/MM/dd (eee) ") +
      format(date_pair.sDate, "HH:mm") +
      " - " +
      format(date_pair.eDate, "HH:mm")
    );
  };

  return (
    <>
      {items.length > 0 && (
        <Paper
          style={{
            margin: 16,
            maxWidth: 500,
            marginRight: "auto",
            marginLeft: "auto"
          }}
        >
          <List>
            {items.map((date, idx) => (
              <ListItem key={idx} divider={idx !== items.length - 1}>
                <ListItemText primary={getFormatedDate(date)} />
                <ListItemSecondaryAction>
                  <IconButton arial-label="delete" onClick={() => remove(idx)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </>
  );
};

export default ListDates;
