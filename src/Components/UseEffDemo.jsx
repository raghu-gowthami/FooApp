import React, { useEffect, useState } from "react";

const UseEffDemo = () => {
  const [name, setName] = useState("Jack");
  const [age, setAge] = useState(20);

  function handleChange() {
    setName("Paul");
  }

  function handleAge() {
    setAge(age + 1);
  }

  useEffect(() => {
    console.log("use Effect called");
  }, [age]);

  return (
    <div>
      <h1>Your Name is: {name}</h1>
      <br />
      <h1>Your Age is: {age} </h1>
      <br />
      <button className="btn btn-primary" onClick={handleChange}>
        Update Name
      </button>
      &nbsp;&nbsp;
      <button className="btn btn-primary" onClick={handleAge}>
        Increment Age
      </button>
    </div>
  );
};

export default UseEffDemo;
