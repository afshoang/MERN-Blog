import axios from 'axios'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createPost } from '../../actions/postActions'
import './write.css'

const Write = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState([])
  const [image, setImage] = useState('')

  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const postCreate = useSelector((state) => state.postCreate)
  const { post, success: successCreate } = postCreate

  const categoryList = useSelector((state) => state.categoryList)
  const { categories: categoriesState } = categoryList

  const history = useHistory()

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    }
    if (successCreate) {
      history.push(`/post/${post.id}`)
      dispatch({ type: 'POST_CREATE_RESET' })
    }
  }, [dispatch, history, userInfo, successCreate, post])

  const handleSubmitPuslish = async (e) => {
    e.preventDefault()
    const newPost = {
      title,
      content,
      categories: category,
      photo: image,
    }
    dispatch(createPost(newPost))
    setTitle('')
    setContent('')
    setImage('')
    setCategory([])
  }

  const handleChangeCategory = (e) => {
    // change category
    if (!category.includes(e.target.value))
      setCategory([...category, e.target.value])
    if (!e.target.checked) {
      setCategory(category.filter((cat) => cat !== e.target.value))
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
    <div className='write'>
      {image && <img className='writeImg' src={image} alt='write' />}
      <form className='writeForm' onSubmit={handleSubmitPuslish}>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fas fa-plus'></i>
          </label>
          <input
            onChange={uploadFileHandler}
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
          {categoriesState &&
            categoriesState.map((category) => (
              <label
                key={category._id}
                htmlFor={category.name}
                className='categoryInput'
              >
                <input
                  type='checkbox'
                  id={category.name}
                  name='interest'
                  value={category.name}
                  onChange={handleChangeCategory}
                />{' '}
                {category.name}
              </label>
            ))}
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
