import React, { useRef, useState, useEffect } from 'react'
import '../index.css'
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SignUp = () => {
  // const userRef = useRef();
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

  const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


  // set focus to username on page load
  // useEffect(() => {
  //   userRef.current.focus();
  // })

  // test username against username regex whenever username is changed
  useEffect(() => {
    // const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
    const result = USER_REGEX.test(username);
    console.log(result)
    console.log(username)
    setValidName(result)
  }, [USER_REGEX, username])

  // test password against password regex AND verify matching password
  useEffect(() => {
    // const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    const result = PWD_REGEX.test(password);
    console.log(result);
    console.log(password);
    setValidPwd(result);
    const match = password === verifyMatch;
    setVerifyMatch(match);
  }, [PWD_REGEX, password, verifyMatch]);

  // remove errors when user is making changes to reverify results
  useEffect(() => {
    setErrMsg('');
  }, [username, password, verifyPwd])


  const handleSubmit = (e) => {
    e.preventDefault();
    const verifyUsername = USER_REGEX.test(username);
    const verifyPassword = PWD_REGEX.test(password);
    if (!verifyUsername || !verifyPassword) {
      setErrMsg("Invalid Entry");
      return;
    } else {
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
  }

  return (
    // <div>
      <section>
      <h3>Sign Up</h3>
      {/* If errMsg exists, we will display it, otherwise it just displays offscreen but is still available to screen readers rather than display=none removing from the document */}
      {/* The aria-live assertive setting will tell the screen reader to announce the error message if a new one is set */}
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <form onSubmit={ handleSubmit } >
        <label htmlFor='username'>Username: 
          <span className={validName ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck}/>
          </span>
          <span className={validName || !username ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes}/>
          </span>
        </label>
        <input 
          required
          type="text"
          id="username"
          // ref={userRef}
          autoComplete="off"
          value={ username }
          onChange={ e => setUsername(e.target.value) }
          aria-invalid={validName ? "false" : "true"}
          aria-describedby='uidnote'
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
        <p id="uidnote" className={userFocus && username && !validName ? "instructions" : "offscreen"}>
          <FontAwesomeIcon icon={faInfoCircle} />
          4 to 24 characters.<br></br>
          Must begin with a letter.<br></br>
          Letters, numbers, underscores, hyphens allowed.
        </p>
        <label htmlFor='password'>
          Password: 
          <span className={validPwd ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className={validPwd || !password ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes}/>
          </span>
        </label>
        <input
          required
          type="password"
          id="password"
          value={ password }
          // ref={userRef}
          onChange={e => setPassword(e.target.value)}
          aria-invalid={validPwd ? "false" : "true"}
          aria-describedby='pwdnote'
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
        />
        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
          <FontAwesomeIcon icon={faInfoCircle} />
          8 to 24 characters.
          Must include uppercase and lowercase letters, a number and a special character.<br></br>
          Allowed special characters: 
            <span aria-label='exclamation mark'>!</span>
            <span aria-label='at symbol'>@</span>
            <span aria-label='hashtag'>#</span>
            <span aria-label='dollar sign'>$</span>
            <span aria-label='percent'>%</span>
        </p>
        <label htmlFor='confirmPwd'>
          Confirm Password: 
          <span className={verifyPwd && verifyMatch ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck}/>
          </span>
          <span className={verifyPwd || verifyMatch ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes}/>
          </span>
        </label>
        <input
          required
          type="password"
          id="confirmPwd"
          value={ verifyPwd }
          // ref={userRef}
          onChange={e => setVerifyPwd(e.target.value)}
          aria-invalid={verifyMatch ? "false" : "true"}
          aria-describedby='confirmnote'
          onFocus={() => setVerifyFocus(true)}
          onBlur={() => setVerifyFocus(false)}
          />
          <p id="confirmnote" className={verifyFocus && !verifyMatch ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle}/>
            Must match the password input field.
          </p>
        <button disabled={!validName || !validPwd || !verifyMatch ? true : false}>Sign Up</button>
      </form>
      </section>
    // </div>
  )
}

export default SignUp