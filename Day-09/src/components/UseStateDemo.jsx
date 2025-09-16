import { useState } from "react";

export default function UseStateDemo() {
    const [formFields, setFormFields] = useState({});
    const handleSubmit = (event) => {
        event.preventDefault();
        const reqPayload = JSON.stringify(formFields);
        console.log("The request  payload is ", reqPayload);
        alert(reqPayload);
        //console.log(`Your first name :$formFields[firsName]`);
    };

    const handleChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        console.log(fieldValue);
        setFormFields((prevStateMap) => {
            console.log(fieldName, "Inside generic Form method", prevStateMap[fieldName]);
            return (
                { ...prevStateMap, [fieldName]: fieldValue }
            );
        })
        //setFirstName(e.target.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <section>
                <label>Enter your First Name:</label>
                <input type="text" name="firstName" value={formFields.firstName || ''} onChange={handleChange} />
            </section>
            <section>
                <label>Enter your Email:</label>
                <input type="email" name="email" value={formFields.email || ''} onChange={handleChange} />
            </section>
            <button type="submit" style={{ margin: '15px' }}>Register</button>
        </form>
    );
    /**
     * Steps:
     *  -> component uses the initial state for firstName which is ""
     *  -> UI is rendered using this initial state
     *  -> when user try to interact with application (component) like typing name in field
     *  -> this will trigger the onChange event, which calls the handleChange function
     *  -> handleChange has business logic to update firstName state, using setFirstName()
     *  -> since the state is changed thus, the render method will get called 
     */
}