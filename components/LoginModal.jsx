import React from 'react';

export default function LoginModal(props) {
  return (
    <React.Fragment>
      <h2>Log in</h2>
      <div>
        <form>
          <input id="email" type="email" placeholder="Email address" />
          <input id="password" type="password" placeholder="Password" />
          <button>Log in</button>
          <p>
            Don't have an account yet?{' '}
            <a href="javascript:;" onClick={() => props.showSignup()}>
              Sign up
            </a>
          </p>
        </form>
      </div>
    </React.Fragment>
  )
}