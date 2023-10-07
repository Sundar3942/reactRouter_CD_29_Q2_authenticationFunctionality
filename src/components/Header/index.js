import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div>
    <ul className="nav-menu">
      <li className="link">
        <Link to="/">Home</Link>
      </li>
      <li className="link">
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
)

export default Header
