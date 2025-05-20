import TaskCard from "./TaskCard";

const FormList = ({ data, setData }) => {
  return (
    <div className="mt-3">
      {data.map((d) => (
        <TaskCard key={d.id} d={d} data={data} setData={setData} />
      ))}
    </div>
  );
};

export default FormList;
