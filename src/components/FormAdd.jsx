import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FormAdd = ({ data, setData }) => {
  const [inputTask, setInputTask] = useState("");
  const [inputTime, setInputTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setData([
      ...data,
      {
        id: data.length,
        task: inputTask,
        day: inputTime,
        idDone: false,
      },
    ]);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Task</Form.Label>
        <Form.Control
          onChange={(e) => setInputTask(e.target.value)}
          type="text"
          placeholder="Add project"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Day & Time</Form.Label>
        <Form.Control
          onChange={(e) => setInputTime(e.target.value)}
          type="datetime-local"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Save Task
      </Button>
    </Form>
  );
};

export default FormAdd;
