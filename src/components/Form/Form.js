import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "submit") {
    const message = document.getElementById("msg").value;
    console.log(message);
  }
  return state;
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <input type="text" name="" id="msg" placeholder="text here" />
      <button onClick={() => dispatch({ type: "submit" })}>Submit</button>{" "}
      <br />
      <button>Edit</button>
      <button>Delete</button>
      <div>
        <p>Message</p>
      </div>
    </div>
  );
};

export default Form;
