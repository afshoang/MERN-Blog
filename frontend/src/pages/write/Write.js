import axios from 'axios'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createPost } from '../../actions/postActions'
import './write.css'

const Write = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [file, setFile] = useState(null)

  const dispatch = useDispatch()
  const postCreate = useSelector((state) => state.postCreate)
  const { loading, post, success: successCreate } = postCreate

  const history = useHistory()

  useEffect(() => {
    if (successCreate) {
      history.push(`/post/${post.id}`)
      dispatch({ type: 'POST_CREATE_RESET' })
    }
  }, [dispatch, history, successCreate, post])

  const handleSubmitPuslish = async (e) => {
    e.preventDefault()
    const newPost = {
      title,
      content,
    }
    if (file) {
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append('name', filename)
      data.append('file', file)
      newPost.photo = filename
      try {
        await axios.post('/api/upload', data)
      } catch (error) {}
    }
    dispatch(createPost(newPost))
    setTitle('')
    setContent('')
  }

  return (
    <div className='write'>
      {file && (
        <img className='writeImg' src={URL.createObjectURL(file)} alt='write' />
      )}
      <form className='writeForm' onSubmit={handleSubmitPuslish}>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fas fa-plus'></i>
          </label>
          <input
            onChange={(e) => setFile(e.target.files[0])}
            type='file'
            id='fileInput'
            style={{ display: 'none' }}
          />
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type='text'
            placeholder='Title'
            className='writeInput'
            autoFocus={true}
          />
        </div>
        <div className='writeFormGroup'>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder='Tell your story...'
            type='text'
            className='writeInput writeText'
          ></textarea>
        </div>
        <button className='writeSubmit'>Publish</button>
      </form>
    </div>
  )
}

export default Write
