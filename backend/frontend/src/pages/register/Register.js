import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { register } from '../../actions/userActions'
import Spinner from '../../components/spinner/Spinner'
import './register.css'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()
  // const location = useLocation()

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  useEffect(() => {
    if (userInfo) {
      history.push('/')
    }
  }, [userInfo, history])

  const handleSubmitRegister = (e) => {
    e.preventDefault()
    dispatch(register(username, email, password))
    setUsername('')
    setEmail('')
    setPassword('')
  }

  return (
    <>
      <div className='register'>
        <span className='registerTitle'>Register</span>
        {loading && <Spinner />}
        {error && (
          <span style={{ color: 'red', marginTop: '10px' }}>{error}</span>
        )}
        <form className='registerForm' onSubmit={handleSubmitRegister}>
          <label>Username</label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type='text'
            className='registerInput'
            placeholder='Enter your username...'
            required
          />
          <label>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type='text'
            className='registerInput'
            placeholder='Enter your email...'
            required
          />
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type='password'
            className='registerInput'
            placeholder='Enter your password...'
            required
          />
          <button className='registerButton'>Register</button>
        </form>
        <button className='registerLoginButton'>
          <Link to='/login'>Login</Link>
        </button>
      </div>
    </>
  )
}

export default Register
