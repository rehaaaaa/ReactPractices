import React from "react";
import { useState } from "react";

const Form = () => {
  const [Person, setPerson] = useState({ name: "", age: "" });
 
  const changeHandler = (e) => {
    setPerson(prev=>({
        ...prev, name: e.target.value
    }))
  }

  const changeHandle = (e) => {
    setPerson(previous=>({
        ...previous, age:e.target.value
    }))
  }
  return (
    <div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={Person.name}
          placeholder="write name..."
          onChange={changeHandler}
        ></input>
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          value={Person.age}
          placeholder="write age..."
          onChange={changeHandle}
        ></input>
      </div>
      <div>
        <h4>Person's name is {Person.name}</h4>
        <h4>Person's age is {Person.age}</h4>
      </div>
    </div>
  );
};

export default Form;
