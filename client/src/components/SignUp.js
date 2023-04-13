import React, { useState } from 'react'

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSignup = (e) => {
    e.preventDefault();
    fetch('/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    .then(r => {
      if (r.ok) {
        r.json().then(user => console.log(user))
      } else {
        r.json().then(data => console.log(data))
      }
    })
  }

  return (
    <div>
      <h3>Sign Up</h3>
      <form onSubmit={ handleSignup } >
      <label htmlFor='username'>Username: </label>
      <input 
        type="text"
        value={ username }
        onChange={ e => setUsername(e.target.value) }
      />
      <label htmlFor='password'>Password: </label>
      <input
        type="password"
        value={ password }
        onChange={e => setPassword(e.target.value)}
      />
      <input type="submit" value="Sign Up" />
      </form>
      <br></br>
      <br></br>
      <ul>
        {errors.map(err => {
          return (
            <li key={err}>{err}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default SignUp