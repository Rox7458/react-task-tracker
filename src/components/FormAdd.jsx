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
        isDone: false,
      },
    ]);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label className="formInput">Task</Form.Label>
        <Form.Control
          className="formInput"
          onChange={(e) => setInputTask(e.target.value)}
          type="text"
          placeholder="Add project"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="formInput">Day & Time</Form.Label>
        <Form.Control
          className="formInput"
          onChange={(e) => setInputTime(e.target.value)}
          type="datetime-local"
          required
        />
      </Form.Group>
      <div className="d-flex justify-content-center">
        <Button className="showBtn" variant="primary" type="submit">
          Save Task
        </Button>
      </div>
    </Form>
  );
};

export default FormAdd;
