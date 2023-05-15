import React from 'react'

function Signup() {
  return (
    <div className='sign_up'>
      <form>
        <div className="form">
          <h1>Sign Up Form</h1>
          <div className="form_name">
            <label for="email"><b>Email</b></label><br/>
            <input type="text" placeholder="Enter Email" name="email" required />
          </div>
          <div className="form_password">
            <label for="password"><b>Password</b></label><br/>
            <input type="password" placeholder="Enter Password" name="password" required />
          </div>
          <div className="form_password">
            <label for="repeatPassword"><b>Repeat Password</b></label><br/>
            <input type="password" placeholder="Repeat Password" name="repeatPassword"
              required />

          </div>
          <div className='remember'>
            <label>
              <input type="checkbox" checked="checked" name="remember" /> Remember me
            </label>
          </div><p className='terms' >By creating an account you agree to our <a href="#">Terms & Privacy</a></p>
          <div className='form_btn'>
            <button type="button" className="cancel" id='cancel'>Cancel</button>
            <button type="submit" className="signup">Sign Up</button>
          </div>

        </div>
      </form>
    </div>
  )
}

export default Signup