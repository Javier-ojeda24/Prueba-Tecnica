import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../store/reducers/Task";

interface TaskState {
  tasks: any;
}
export const Task = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state: TaskState) => state.tasks);
  const [data, setData] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setData(e.target.value);
  };

  const showModal = () => {
    setModal(true);
  };
  const handleTask = () => {
    dispatch(addTask(data));
    setData("");
    setModal(false)
  };

  return (
    <>
      <button onClick={showModal}> New Task </button>
      {tasks.map((task: string, index: number) => (
        <div key={index}>
          <h3>{task}</h3>
        </div>
      ))}
      {modal && (
        <div>
          <label htmlFor="">
            <input value={data} onChange={handleForm} type="text" />
            <button onClick={handleTask}>Add</button>
          </label>
        </div>
      )}
    </>
  );
};
