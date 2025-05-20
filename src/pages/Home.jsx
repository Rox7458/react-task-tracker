import React, { useState } from "react";
import FormAdd from "../components/FormAdd";
import FormList from "../components/FormList";

const home = () => {
  const [data, setData] = useState([]);
  console.log(data);

  return (
    <div>
      <h1>Task Tracker</h1>
      <button>close add task bar</button>

      <FormAdd data={data} setData={setData} />
      <FormList data={data} setData={setData} />
    </div>
  );
};

export default home;
