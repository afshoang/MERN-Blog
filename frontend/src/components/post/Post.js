import './post.css'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
  /* 
    Get time from mongoDB convert to string day or hour was created
  **/
  const convertTime = (timeInMil) => {
    const timeCreated = new Date(Date.now() - new Date(timeInMil).getTime())
    return timeCreated.getDate() > 0
      ? timeCreated.getDate() + ' ngày trước'
      : timeCreated.getHours() + ' giờ trước'
  }

  const publicFolder = 'http://localhost:5000/uploads/'
  return (
    <div className='post'>
      <img
        className='postImg'
        src={publicFolder + post.photo}
        alt='single post'
      />
      <div className='postInfo'>
        <div className='postCats'>
          {post.categories.map((cat) => (
            <span key={cat} className='postCat'>
              {cat}
            </span>
          ))}
        </div>
        <span className='postTitle'>
          <Link to={`/post/${post.id}`} className='link'>
            {post.title}
          </Link>
        </span>
        <hr />
        <span className='postDate'>{convertTime(post.createdAt)}</span>
      </div>
      <p className='postDesc'>{post.content}</p>
    </div>
  )
}

export default Post
