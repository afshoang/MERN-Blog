import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/450px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg'
          alt='about me'
        />
        <p>
          Hi there. I'm Hoang Pham. A Web Developer. In fact, development is not
          my main work. It's my hobby
        </p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>Javascript</li>
          <li className='sidebarListItem'>ReactJs</li>
          <li className='sidebarListItem'>NodeJs</li>
          <li className='sidebarListItem'>Book</li>
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW ME</span>
        <div className='sidebarSocial'>
          <i className='sidebarIcon fab fa-facebook-square'></i>
          <i className='sidebarIcon fab fa-twitter-square'></i>
          <i className='sidebarIcon fab fa-github-square'></i>
          <i className='sidebarIcon fab fa-linkedin'></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
