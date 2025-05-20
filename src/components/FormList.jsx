import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const FormList = ({ data, setData }) => {
  return (
    <div>
      {data.map((d) => (
        <Card>
          <Card.Body>
            <Card.Title>{d.task}</Card.Title>
            <Card.Text>{d.day}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default FormList;
