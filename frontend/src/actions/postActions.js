import axios from 'axios'

export const listPosts =
  (search = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: 'POST_LIST_REQUEST' })

      let link = `/api/posts${search}`

      const { data } = await axios.get(link)

      dispatch({ type: 'POST_LIST_SUCCESS', payload: data })
    } catch (error) {
      dispatch({
        type: 'POST_LIST_FAIL',
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const detailPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'POST_DETAIL_REQUEST' })

    const { data } = await axios.get(`/api/posts/${id}`)

    dispatch({ type: 'POST_DETAIL_SUCCESS', payload: data })
  } catch (error) {
    dispatch({
      type: 'POST_DETAIL_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createPost = (newPost) => async (dispatch, getState) => {
  try {
    dispatch({ type: 'POST_CREATE_REQUEST' })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post('/api/posts', newPost, config)

    dispatch({ type: 'POST_CREATE_SUCCESS', payload: data })
  } catch (error) {
    dispatch({
      type: 'POST_CREATE_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
