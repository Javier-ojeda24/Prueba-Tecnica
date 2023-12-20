import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../store/reducers/Task";
import styles from "../App.module.css";
import { Nav } from "./Nav";

interface TaskState {
  tasks: {
    tasks: string[];
  };
}

export const Task = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state: TaskState) => state.tasks);
  const [data, setData] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setData(e.target.value);
  };

  const showModal = () => {
    setModal(true);
  };
  const handleTask = () => {
    if (data !== "") {
      dispatch(addTask(data));
      setData("");
      setModal(false);
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  return (
    <>
      <Nav />
      <div className={styles.contenedorTask}>
        <button onClick={showModal} className={styles.newTask}>
          New Task
        </button>
        {tasks.map((task: string, index: number) => (
          <div key={index}>
            <h3 className={styles.title}>{task}</h3>
          </div>
        ))}
      </div>
      {modal && (
        <div className={styles.modal}>
          <label htmlFor="input-field">
            <input
              data-testid="input-field"
              className={styles.input}
              value={data}
              onChange={handleForm}
              type="text"
            />
            <br />
            {isError && (
              <h3 className={styles.error}>
                Please don't leave the field empty
              </h3>
            )}
            <button className={styles.btnAdd} onClick={handleTask}>
              Add
            </button>
          </label>
        </div>
      )}
    </>
  );
};
