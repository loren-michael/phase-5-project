import React, { useRef, useState, useEffect } from 'react'

const SignUp = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [verifyPwd, setVerifyPwd] = useState("")
  const [verifyMatch, setVerifyMatch] = useState(false);
  const [verifyFocus, setVerifyFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);


  // set focus to username on page load
  useEffect(() => {
    userRef.current.focus();
  })
  
  // test username against username regex whenever username is changed
  useEffect(() => {
    const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
    const result = USER_REGEX.test(username);
    console.log(result)
    console.log(username)
    setValidName(result)
  }, [username])

  // test password against password regex AND verify matching password
  useEffect(() => {
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    const result = PWD_REGEX.test(password);
    console.log(result);
    console.log(password);
    setValidPwd(result);
    const match = password === verifyMatch;
    setVerifyMatch(match);
  }, [password, verifyMatch]);

  // remove errors when user is making changes to reverify results
  useEffect(() => {
    setErrMsg('');
  }, [username, password, verifyPwd])


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
      {/* If errMsg exists, we will display it, otherwise it just displays offscreen but is still available to screen readers rather than display=none removing from the document */}
      {/* The aria-live assertive setting will tell the screen reader to announce the error message if a new one is set */}
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <form onSubmit={ handleSignup } >
      <label htmlFor='username'>Username: </label>
      <input 
        required
        type="text"
        id="username"
        ref={userRef}
        autoComplete="off"
        value={ username }
        onChange={ e => setUsername(e.target.value) }
        aria-invalid={validName ? "false" : "true"}
        aria-describedby='uidnote'
        onFocus={() => setUserFocus(true)}
        onBlur={() => setUserFocus(false)}
      />
      <p id="uidnote" className={userFocus && username && !validName ? "instructions" : "offscreen"}>
        4 to 24 characters.<br></br>
        Must begin with a letter.<br></br>
        Letters, numbers, underscores, hyphens allowed.
      </p>
      <label htmlFor='password'>Password: </label>
      <input
        type="password"
        value={ password }
        onChange={e => setPassword(e.target.value)}
      />
      <label htmlFor='verifyPwd'>Verify Password: </label>
      <input
        type="password"
        value={ verifyPwd }
        onChange={e => setVerifyPwd(e.target.value)}
      />
      <input type="submit" value="Sign Up" />
      </form>
    </div>
  )
}

export default SignUp