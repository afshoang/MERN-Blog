import './topbar.css'

const Topbar = () => {
  return (
    <div className='top'>
      {/* <div className='topLeft'>
        <i className='topIcon fab fa-facebook-square'></i>
        <i className='topIcon fab fa-twitter-square'></i>
        <i className='topIcon fab fa-github-square'></i>
        <i className='topIcon fab fa-linkedin'></i>
      </div> */}
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>HOME</li>
          <li className='topListItem'>WRITE</li>
          <li className='topListItem'>ABOUT</li>
          <li className='topListItem'>CONTACT</li>
        </ul>
      </div>
      {/* <div className='topRight'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/450px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg'
          alt='icon top bar'
          className='topImg'
        />
      </div> */}
    </div>
  )
}

export default Topbar
