// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter, Redirect} from 'react-router-dom'

import './index.css'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')

  const onSubmitSuccess = token => {
    const {history} = props
    Cookies.set('jwt_token', token, {
      expires: 30,
    })
    history.replace('/')
  }

  const loginHandler = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      console.log(data)
      onSubmitSuccess(data.jwt_token)
    }
  }

  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div className="login-page">
      <h1>Please Login</h1>
      <button type="button" onClick={loginHandler}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default withRouter(Login)
