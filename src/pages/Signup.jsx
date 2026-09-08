
import { useState } from "react";
import "./Signup.css";


function Signup() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [RollNumber, setRollNumber] = useState("");

  function SubmitForm(e) {

    e.preventDefault();

    alert("YOUR ACCOUNT HAS BEEN CREATED SUCCESSFULLY!");

    alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}\nRollNumber: ${RollNumber}`);
  }

  return (

    <div>

      <form onSubmit={SubmitForm}>

        <div>

          <label>Name: </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />

        </div>

        <br />

        <div>

          <label>Email: </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

        </div>

        <br />

        <div>

          <label>Password: </label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />

        </div>

        <br />

        <div>

          <label>RollNumber: </label>

          <input
            type="number"
            name="RollNumber"
            placeholder="Enter your RollNO"
            onChange={(e) => setRollNumber(e.target.value)}
          />

        </div>

        <button type="submit">Sign Up</button>

      </form>

    </div>
  );
}

export default Signup;

