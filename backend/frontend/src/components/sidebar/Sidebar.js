import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listCategory } from '../../actions/categoryActions'
import './sidebar.css'

const Sidebar = () => {
  const dispatch = useDispatch()
  const categoryList = useSelector((state) => state.categoryList)
  const { categories } = categoryList

  useEffect(() => {
    dispatch(listCategory())
  }, [dispatch])

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
          {categories.map((category) => {
            return (
              <Link
                className='link'
                key={category._id}
                to={`/?cat=${category.name}`}
              >
                <li className='sidebarListItem'>{category.name}</li>
              </Link>
            )
          })}
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
