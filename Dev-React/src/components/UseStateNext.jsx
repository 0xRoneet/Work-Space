import { useState } from "react";

export default function UseStateNext() {
  const [formfields, setFormFields] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const rePayload = JSON.stringify(formfields);
    console.log("the request payload", rePayload);
    alert(rePayload);
    console.log(`Your First Name is: ${formfields.firstName}`);
    console.log(`Your Email is: ${formfields.email}`);
  };

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setFormFields((prevStateMap) => ({
      ...prevStateMap,
      [fieldName]: fieldValue,
    }));
  };

  return (
    <form>
      <section>
        <label>Enter Your First Name :</label>
        <input
          type="text"
          name="firstName"
          value={formfields.firstName || ""}
          onChange={handleChange}
        />
      </section>
      <section>
        <label>Enter Your Email :</label>
        <input
          type="email"
          name="email"
          value={formfields.email || ""}
          onChange={handleChange}
        />
      </section>
      <button onClick={handleSubmit}>Register</button>
    </form>
  );
}
