import React, {useState} from 'react'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClick = async () => {
    console.log(email, password)
    fetch("http://localhost:8000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: email, password: password })
    }).then(res => res.json()).then(data => console.log(data))
  }

  const onEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const onPasswordChange = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div className="App">
      <input type="text" value={email} onChange={onEmailChange} />
      <input type="password" value={password} onChange={onPasswordChange}/>
      <button onClick={onClick} type="submit">login</button>
    </div>
  );

}

export default Login