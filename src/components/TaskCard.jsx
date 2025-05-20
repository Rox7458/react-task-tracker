import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { IoMdCloseCircle } from "react-icons/io";

const TaskCard = ({ d, data, setData }) => {
  const [draw, setDraw] = useState(false);

  return (
    <div>
      <Card className="mt-1 p-2" onDoubleClick={() => setDraw(!draw)}>
        <Card.Body className="d-flex justify-content-between">
          <Card.Text className={draw ? "draw" : "undraw"}>{d.task}</Card.Text>
          <IoMdCloseCircle
            className="h1"
            onClick={() => setData(data.filter((filt) => filt.id !== d.id))}
          />
        </Card.Body>
        <Card.Text className={draw ? "draw" : "undraw"}>{d.day}</Card.Text>
      </Card>
    </div>
  );
};

export default TaskCard;
