import { Link } from 'react-router-dom'
import BYLogo from '../images/ButYLogo.png'
import Archive from '../images/Archive.png'
import find from '../images/find.png'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }
  return (
    <header>
      <div className="container">
        <Link to="/">
        <img src={BYLogo} style={{width:'4rem'}} alt='' />
        </Link>
        <span>
        <Link to="/cache">
        <img src={Archive} style={{width:'3rem',height:'2rem'}} alt='' />
        </Link></span>

        <span>
        <Link to="/find">
        <img src={find} style={{width:'3rem',height:'2rem'}} alt='' />
        </Link></span>
        
        <nav>
        {user && (
            <div>
              <span><small>{user.email}</small></span>
              <button onClick={handleClick}><small style={{fontSize:'0.7rem'}}>Log out</small></button>
              
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
              
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar