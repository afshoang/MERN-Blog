import { useDispatch, useSelector } from 'react-redux'
import './topbar.css'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/userActions'
import avatar from './avatar.jpg'

const Topbar = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userDetail = useSelector((state) => state.userDetail)
  const { user } = userDetail

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className='top'>
      <div className='topLeft'>
        <i className='topIcon fab fa-facebook-square'></i>
        <i className='topIcon fab fa-twitter-square'></i>
        <i className='topIcon fab fa-github-square'></i>
        <i className='topIcon fab fa-linkedin'></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link className='link' to='/'>
              HOME
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/write'>
              WRITE
            </Link>
          </li>
          <li className='topListItem'>ABOUT</li>
          <li className='topListItem'>CONTACT</li>
          {userInfo && (
            <li className='topListItem' onClick={() => handleLogout()}>
              LOGOUT
            </li>
          )}
        </ul>
      </div>
      <div className='topRight'>
        {userInfo ? (
          <Link className='link' to='/settings'>
            <img
              src={userInfo.profilePic === '' ? avatar : userInfo.profilePic}
              alt='icon top bar'
              className='topImg'
            />
          </Link>
        ) : (
          <>
            <ul className='topList'>
              <li className='topListItem'>
                <Link className='link' to='/login'>
                  LOGIN
                </Link>
              </li>
              <li className='topListItem'>
                <Link className='link' to='/register'>
                  REGISTER
                </Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  )
}

export default Topbar
