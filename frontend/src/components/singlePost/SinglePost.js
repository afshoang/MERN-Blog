import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useHistory } from 'react-router-dom'
import { detailPost, updatePost, deletePost } from '../../actions/postActions'
import './singlePost.css'
import Spinner from '../spinner/Spinner'

const SinglePost = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [updateMode, setUpdateMode] = useState(false)

  const { postId } = useParams()
  const history = useHistory()

  const dispatch = useDispatch()

  const postDetail = useSelector((state) => state.postDetail)
  const { loading, post, error } = postDetail

  const postUpdate = useSelector((state) => state.postUpdate)
  const { success: successUpdate, error: errorUpdate } = postUpdate

  const postDelete = useSelector((state) => state.postDelete)
  const { success: successDelete } = postDelete

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (successDelete) {
      history.push('/')
    }
    if (successUpdate) {
      dispatch({ type: 'POST_UPDATE_RESET' })
    }
    dispatch(detailPost(postId))
  }, [dispatch, postId, history, successUpdate, successDelete])

  const handleDeletePost = (id) => {
    // detele post by id
    if (window.confirm('Bạn chắc chắn muốn xóa bài viết này!')) {
      dispatch(deletePost(id))
    }
  }

  const handleUpdatePost = (id) => {
    dispatch(
      updatePost(id, {
        title,
        content,
      })
    )
    setUpdateMode(false)
  }

  const publicFolder = 'http://localhost:5000/uploads/'

  return (
    <>
      {errorUpdate && <h1>{errorUpdate}</h1>}
      {loading ? (
        <Spinner />
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <div className='singlePost'>
          <div className='singlePostWrapper'>
            {post.photo && (
              <img
                className='singlePostImg'
                src={publicFolder + post.photo}
                alt='single post'
              />
            )}
            {updateMode ? (
              <input
                type='text'
                value={title}
                className='singlePostTitleInput'
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
              />
            ) : (
              <h1 className='singlePostTitle'>
                {post.title}
                {userInfo.username === post.username && (
                  <div className='singlePostEdit'>
                    <i
                      onClick={() => {
                        setTitle(post.title)
                        setContent(post.content)
                        setUpdateMode(true)
                      }}
                      className='singlePostIcon far fa-edit'
                    ></i>
                    <i
                      onClick={() => handleDeletePost(post.id)}
                      className='singlePostIcon far fa-trash-alt'
                    ></i>
                  </div>
                )}
              </h1>
            )}

            <div className='singlePostInfo'>
              <span className='singlePostAuthor'>
                Author:
                <Link to={`/?username=${post.username}`} className='link'>
                  <b> {post.username}</b>
                </Link>
              </span>
              <span className='singlePostDate'>
                {new Date(post.createdAt).toDateString()}
              </span>
            </div>
            {updateMode ? (
              <textarea
                className='singlePostDescInput'
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            ) : (
              <p className='singlePostDesc'>{post.content}</p>
            )}
            {updateMode && (
              <button
                className='singlePostButton'
                onClick={() => handleUpdatePost(post.id)}
              >
                Update
              </button>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default SinglePost
