import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { detailPost } from '../../actions/postActions'
import './singlePost.css'
import Spinner from '../spinner/Spinner'

const SinglePost = () => {
  const { postId } = useParams()
  const dispatch = useDispatch()

  const postDetail = useSelector((state) => state.postDetail)
  const { loading, post, error } = postDetail

  useEffect(() => {
    dispatch(detailPost(postId))
  }, [dispatch, postId])

  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <div className='singlePost'>
          <div className='singlePostWrapper'>
            <img
              className='singlePostImg'
              src='https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=873&q=80'
              alt='single post'
            />
            <h1 className='singlePostTitle'>
              {post.title}
              <div className='singlePostEdit'>
                <i className='singlePostIcon far fa-edit'></i>
                <i className='singlePostIcon far fa-trash-alt'></i>
              </div>
            </h1>
            <div className='singlePostInfo'>
              <span className='singlePostAuthor'>
                Author:
                <Link to={`/?username=${post.username}`} className='link'>
                  <b>{post.username}</b>
                </Link>
              </span>
              <span className='singlePostDate'>1 hour ago</span>
            </div>
            <p className='singlePostDesc'>{post.content}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default SinglePost
