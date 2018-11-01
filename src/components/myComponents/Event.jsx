import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

export default class Event extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          borderStyle: "solid",
          borderColor: "white",
          borderWidth: "1px",

          height: "150px"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            overflow: "inherit",
            textAlign: "center",
            height: "150px",
            width: "35%",
            background: "#D0F0C0"
          }}
        >
          <p>
            <b>EventName </b>
          </p>

          <h8>12 Dec 2018</h8>
          <p>17:30</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            height: "150px",
            width: "65%",
            background: "#F5F5F5"
          }}
        >
          <IconButton variant="text" size="medium">
            <Edit />
          </IconButton>
          <IconButton variant="text" size="small">
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    );
  }
}
