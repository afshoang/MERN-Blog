import axios from 'axios'

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: 'USER_LOGIN_REQUEST' })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      'api/auth/login',
      { email, password },
      config
    )

    dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: 'USER_LOGIN_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({ type: 'USER_LOGOUT' })
  // document.location.href = '/'
}

export const register = (username, email, password) => async (dispatch) => {
  try {
    dispatch({ type: 'USER_REGISTER_REQUEST' })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/api/auth/register',
      { username, email, password },
      config
    )

    dispatch({ type: 'USER_REGISTER_SUCCESS', payload: data })

    dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: 'USER_REGISTER_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getUserDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'USER_DETAIL_REQUEST' })

    const { data } = await axios.get(`/api/users/${id}`)

    dispatch({ type: 'USER_DETAIL_SUCCESS', payload: data })
  } catch (error) {
    dispatch({
      type: 'USER_DETAIL_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const update = (id, userToUpdate) => async (dispatch, getState) => {
  try {
    dispatch({ type: 'USER_UPDATE_REQUEST' })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/api/users/${id}`, userToUpdate, config)

    dispatch({ type: 'USER_UPDATE_SUCCESS' })

    dispatch({ type: 'USER_DETAIL_SUCCESS', payload: data })

    dispatch({ type: 'USER_DETAIL_RESET' })
  } catch (error) {
    dispatch({
      type: 'USER_UPDATE_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
