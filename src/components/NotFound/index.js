import './index.css'

const NotFound = () => (
  <div className="n-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-slides/not-found-bg.png"
      alt="not found"
      className="img"
    />
    <div>
      <h1 className="head">Page Not Found</h1>
      <p className="des">
        We are sorry, the page you requested colud not be found
      </p>
    </div>
  </div>
)

export default NotFound
