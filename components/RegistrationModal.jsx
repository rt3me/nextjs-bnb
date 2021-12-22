import React from 'react';

export default function RegistrationModal(props) {
  return (
    <React.Fragment>
      <h2>Sign up</h2>
      <div>
        <form
          onSubmit={event => {
            alert('Sign up!')
            event.preventDefault()
          }}>
          <input id="email" type="email" placeholder="Email address" />
          <input id="password" type="password" placeholder="Password" />
          <input
            id="passwordconfirmation"
            type="password"
            placeholder="Enter password again"
          />
          <button>Sign up</button>
          <p>
            Already have an account?{' '}
            <a href="javascript:;" onClick={() => props.showLogin()}>
              Log in
            </a>
          </p>
        </form>
      </div>
    </React.Fragment>
  )
}