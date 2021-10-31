import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/userActions'
import { Link, useHistory } from 'react-router-dom'
import Spinner from '../../components/spinner/Spinner'
import './login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      history.push('/')
    }
  }, [userInfo, history])

  const handleSubmitLogin = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
    setEmail('')
    setPassword('')
  }
  return (
    <div className='login'>
      <span className='loginTitle'>Login</span>
      {loading && <Spinner />}
      {error && (
        <span style={{ color: 'red', marginTop: '10px' }}>{error}</span>
      )}
      <form className='loginForm' onSubmit={handleSubmitLogin}>
        <label>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type='text'
          className='loginInput'
          placeholder='Enter your email...'
          required
        />
        <label>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type='password'
          className='loginInput'
          placeholder='Enter your password...'
          required
        />
        <button className='loginButton'>Login</button>
      </form>
      <button className='loginRegisterButton'>
        <Link to='/register'>Register</Link>
      </button>
    </div>
  )
}

export default Login
