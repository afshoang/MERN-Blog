import axios from 'axios'

export const listCategory = () => async (dispatch) => {
  try {
    dispatch({ type: 'CATEGORY_LIST_REQUEST' })

    const { data } = await axios.get('/api/categories')

    dispatch({ type: 'CATEGORY_LIST_SUCCESS', payload: data })
  } catch (error) {
    dispatch({
      type: 'CATEGORY_LIST_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
