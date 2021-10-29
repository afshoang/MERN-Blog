import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import './home.css'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import { listPosts } from '../../actions/postActions'
import Spinner from '../../components/spinner/Spinner'

const Home = () => {
  const dispatch = useDispatch()
  const { search } = useLocation()

  const postList = useSelector((state) => state.postList)
  const { loading, error, posts } = postList

  useEffect(() => {
    dispatch(listPosts(search))
  }, [dispatch, search])

  return (
    <>
      <Header />
      <div className='home'>
        {loading ? (
          <Spinner />
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          <>
            <Posts posts={posts} />
            <Sidebar />
          </>
        )}
      </div>
    </>
  )
}

export default Home
