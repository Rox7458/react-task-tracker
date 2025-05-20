import React, { useState } from "react";
import FormAdd from "../components/FormAdd";
import FormList from "../components/FormList";
import Button from "react-bootstrap/Button";

const home = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(true);

  const [cover, setCover] = useState("Close Add Task Bar");

  const onClickBtn = () => {
    setShow(!show);
    show ? setCover("Show Add Task Bar") : setCover("Close Add Task Bar");
  };

  return (
    <div className="container">
      <h1 className=" d-flex justify-content-center w-100">Task Tracker</h1>
      <div className="w-100 d-flex justify-content-center">
        <Button className="showBtn" onClick={onClickBtn}>
          {cover}
        </Button>
      </div>

      {show && <FormAdd data={data} setData={setData} />}

      {data.length == 0 ? (
        <div className="d-flex justify-content-center m-4 h3">
          <p> No task to show</p>
        </div>
      ) : (
        <FormList data={data} setData={setData} />
      )}
    </div>
  );
};

export default home;
