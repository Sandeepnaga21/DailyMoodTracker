import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showErrMsg: false,
    errMsg: '',
    isClicked: false,
  }

  onChangeUserName = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  onClickCheckbox = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  onSuccessResponse = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onFailureResponse = errMsg => {
    this.setState({showErrMsg: true, errMsg})
  }

  onClickLoginBtn = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccessResponse(data.jwt_token)
    } else {
      this.onFailureResponse(data.error_msg)
    }
  }

  render() {
    const {username, password, isClicked, showErrMsg, errMsg} = this.state
    const inputType = isClicked ? 'text' : 'password'
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to='/' />
    }

    return (
      <div className='bg-container'>
        <form className='L-container' onSubmit={this.onClickLoginBtn}>
          <h1 className='L-heading'>Daily Mood Tracker</h1>
          <div className='U-container'>
            <label htmlFor='user' className='L-label'>
              USERNAME
            </label>
            <input
              id='user'
              className='L-input'
              type='text'
              onChange={this.onChangeUserName}
              value={username}
            />
          </div>
          <div className='P-container'>
            <label htmlFor='pass' className='L-label'>
              PASSWORD
            </label>
            <input
              id='pass'
              className='L-input'
              type={inputType}
              onChange={this.onChangePassword}
              value={password}
            />
          </div>
          <div className='S-container'>
            <input
              type='checkbox'
              id='check'
              onClick={this.onClickCheckbox}
              className='input'
            />
            <label htmlFor='check' className='label'>
              Show Password
            </label>
          </div>
          <div className='b-container'>
            <button type='submit' className='button'>
              LogIn
            </button>
            {showErrMsg && <p className='error-msg'>*{errMsg}</p>}
          </div>
        </form>
      </div>
    )
  }
}

export default Login
