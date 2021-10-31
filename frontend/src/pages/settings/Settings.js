import { useState, useEffect } from 'react'
import axios from 'axios'
import './settings.css'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getUserDetail, update, deleteUser } from '../../actions/userActions'
import Sidebar from '../../components/sidebar/Sidebar'

const Settings = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [image, setImage] = useState('')

  const history = useHistory()

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userDetail = useSelector((state) => state.userDetail)
  const { user } = userDetail

  const userUpdate = useSelector((state) => state.userUpdate)
  const { success: successUpdate } = userUpdate

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    }
    if (successUpdate) {
      dispatch({ type: 'USER_UPDATE_RESET' })
    }
    if (!user || !user.username || user.id !== userInfo.id) {
      dispatch(getUserDetail(userInfo.id))
    } else {
      setUsername(user.username)
      setEmail(user.email)
      setImage(user.profilePic)
    }
  }, [dispatch, history, userInfo, user, successUpdate])

  const handleUpdate = (e) => {
    e.preventDefault()
    const userToUpdate = {
      username,
      email,
      password,
      profilePic: image,
    }
    dispatch(update(user.id, userToUpdate))
  }

  const handleDeleteUser = () => {
    if (
      window.confirm('Bạn có chắc chắn muốn xóa tài khoản và toàn bộ bài viết?')
    ) {
      dispatch(deleteUser(userInfo.id))
    }
  }

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      setImage(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>Update your account</span>
          <span className='settingsDeleteTitle' onClick={handleDeleteUser}>
            Delete your account
          </span>
        </div>
        <form className='settingsForm' onSubmit={handleUpdate}>
          <label>Profile Picture</label>
          <div className='settingsPP'>
            {image && <img src={image} alt='Profile picter' />}
            <label htmlFor='fileInput'>
              <i className='settingsPPIcon far fa-user-circle'></i>
            </label>
            <input
              style={{ display: 'none' }}
              id='fileInput'
              type='file'
              onChange={uploadFileHandler}
            />
          </div>
          <label>Username</label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='settingsSubmit'>Update</button>
          {successUpdate && (
            <span
              style={{ color: 'green', textAlign: 'center', marginTop: '20px' }}
            >
              Đã cập nhật tài khoản...
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

export default Settings
