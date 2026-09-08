import { useState } from "react"
import "./Login.css";

function Login() {
  let [, setEmail] = useState()
  let [, setPassword] = useState()
  function SubmitForm(e){
    e.preventDefault()
    alert("YOUR FORM HAS SUBMITTED SUCESSFULLY")
    alert(`${email} ${password}`)
  }
return (

  <div>
    <form onSubmit={()=> SubmitForm()}>
      <div>
        <span>Email:</span>
        <input type="email" name = "email" placeholder='Enter your name' onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <br/>
      <div>
        <span>Password:</span>
        <input type="password" name="password" placeholder='enter your password' onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <button>SubmitForm</button>
    </form>
    </div>
    

)
}

export default Login
