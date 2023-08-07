import { useId } from "react";
import styles from "./Form.module.css";
import { useData } from "../context/ContextProvider";

//The [ npm run server ] needs to be run post [ npm run dev ] for the code to work as intended.
// The Localhost 3000 is used as the hosting server, and the webapp runs on 5173 (Vite Server)

const Form = () => {
  const id = useId();
  const {
    name,
    email,
    isEdit,
    handleAdd,
    handleUpdate,
    handleCancel,
    dispatch,
  } = useData();

  return (
    <div className={styles.form}>
      <center>
        <h1>{isEdit ? "Edit User" : "Add New User"}</h1>
      </center>
      <center><label htmlFor={`${id}--name`}>Name</label></center>
      <input
        id={`${id}--name`}
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
      />
      <br />
      <center><label htmlFor={`${id}--email`}>Email</label></center>
      <input
        id={`${id}--email`}
        type="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => dispatch({ type: "email", payload: e.target.value })}
      />
      <br />
      {isEdit ? (
        <div style={{ display: "flex" }}>
          <button onClick={handleCancel}>Cancel</button>
          &nbsp;&nbsp;
          <button type="submit" onClick={handleUpdate}>
            Update
          </button>
        </div>
      ) : (
        <button type="submit" onClick={() => handleAdd(name, email)}>
          Submit
        </button>
      )}
    </div>
  );
};

export default Form;
