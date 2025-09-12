import { useState } from "react";

function UseStateDemo() {
  const [firstName, setFirstName] = useState("");

  const viewFields = () => {
    console.log(`the firstname is ${firstName}`);
  };

  const handleChange = (e) => {
    // console.log("event :",e.target.value);
    setFirstName(e.target.value);
  };

  return (
    <>
      <section>
        <label>Enter Your First Name :</label>
      </section>
      <input type="text" value={firstName} onChange={handleChange}></input>
      <section>
        <button onClick={viewFields}> View Name</button>
      </section>
    </>
  );
}

export default UseStateDemo;
