export const postListReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case 'POST_LIST_REQUEST':
      return { loading: true, posts: [] }
    case 'POST_LIST_SUCCESS':
      return { loading: false, posts: action.payload }
    case 'POST_LIST_FAIL':
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const postDetailReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case 'POST_DETAIL_REQUEST':
      return { loading: true, post: {} }
    case 'POST_DETAIL_SUCCESS':
      return { loading: false, post: action.payload }
    case 'POST_DETAIL_FAIL':
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const postCreateReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case 'POST_CREATE_REQUEST':
      return { loading: true }
    case 'POST_CREATE_SUCCESS':
      return { loading: false, success: true, post: action.payload }
    case 'POST_CREATE_FAIL':
      return { loading: false, error: action.payload }
    case 'POST_CREATE_RESET':
      return { post: {} }
    default:
      return state
  }
}
