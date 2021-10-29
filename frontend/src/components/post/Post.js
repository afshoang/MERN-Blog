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
          <span className='postCat'>Book</span>
          <span className='postCat'>NodeJs</span>
        </div>
        <span className='postTitle'>
          <Link to={`/post/${post.id}`} className='link'>
            {post.title}
          </Link>
        </span>
        <hr />
        <span className='postDate'>{convertTime(post.createdAt)}</span>
      </div>
      <p className='postDesc'>
        Eiusmod fugiat veniam do proident laboris laboris amet aliquip voluptate
        deserunt officia nulla sit excepteur. Et ullamco irure aute adipisicing
        mollit ex. Sunt do et elit deserunt consequat. Proident aliqua ut minim
        ex officia. Eiusmod fugiat veniam do proident laboris laboris amet
        aliquip voluptate deserunt officia nulla sit excepteur. Et ullamco irure
        aute adipisicing mollit ex. Sunt do et elit deserunt consequat. Proident
        aliqua ut minim ex officia. Eiusmod fugiat veniam do proident laboris
        laboris amet aliquip voluptate deserunt officia nulla sit excepteur. Et
        ullamco irure aute adipisicing mollit ex. Sunt do et elit deserunt
        consequat. Proident aliqua ut minim ex officia.
      </p>
    </div>
  )
}

export default Post
