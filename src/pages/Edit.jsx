import React from "react";
import { ListGroup } from "react-bootstrap";

function Edit({ itemOrService, expenseAmount, expenseDate, notes, category }) {
  return (
    <div>
      <ListGroup>
        <ListGroup.Item>
          {" "}
          <h6>WHAT I BOUGHT </h6> {" " + itemOrService}{" "}
        </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          <h6>CATEGORY </h6> {"  " + category}
        </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          <h6>AMOUNT </h6>
          {"GHc" + " " + expenseAmount}
        </ListGroup.Item>
        <ListGroup.Item>
          <h6>REASON FOR PURCHASE </h6>
          {" " + notes}
        </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          <h6>DATE </h6>
          {" " + expenseDate}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Edit;
