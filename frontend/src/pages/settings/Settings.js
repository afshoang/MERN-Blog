import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

const Settings = () => {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>Update your account</span>
          <span className='settingsDeleteTitle'>Delete your account</span>
        </div>
        <form className='settingsForm'>
          <label>Profile Picture</label>
          <div className='settingsPP'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/450px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg'
              alt='Profile picter'
            />
            <label htmlFor='fileInput'>
              <i class='settingsPPIcon far fa-user-circle'></i>
            </label>
            <input style={{ display: 'none' }} id='fileInput' type='file' />
          </div>
          <label>Username</label>
          <input type='text' placeholder='HoangPham' />
          <label>Email</label>
          <input type='email' placeholder='HoangPham@gmail.com' />
          <label>Username</label>
          <input type='password' />
          <button className='settingsSubmit'>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

export default Settings
