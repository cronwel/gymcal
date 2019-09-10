import React from 'react';
import './signup.css';


const Signup = (props) => {
  let formFields = {}
  return (
    <div className="signup">
      Sign up for our newsletter, get in on the pre-release for free.
      Limit to first 100 clients.
      <form>
      <input ref={input => formFields.email = input} placeholder='Enter e-mail' />
      <button>Sign Me Up</button>
    </form>
    </div>
  )
}

export default Signup;