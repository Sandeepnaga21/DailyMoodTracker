import {withRouter} from 'react-router-dom'
import './index.css'

const NavBar = props => {
  const onClickLogout = () => {
    const {history} = props
    history.replace('/login')
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <a className="navbar-brand">Daily Mood Traker</a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <a className="nav-link active" href="/">
              Home
            </a>
            <a className="nav-link" href="/reports">
              Reports
            </a>
            <a className="nav-link">
              <button type="button" className="button1" onClick={onClickLogout}>
                Logout
              </button>
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default withRouter(NavBar)
