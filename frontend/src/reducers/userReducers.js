export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_LOGIN_REQUEST':
      return { loading: true }
    case 'USER_LOGIN_SUCCESS':
      return { loading: false, userInfo: action.payload }
    case 'USER_LOGIN_FAIL':
      return { loading: false, error: action.payload }
    case 'USER_LOGOUT':
      return {}
    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_REGISTER_REQUEST':
      return { loading: true }
    case 'USER_REGISTER_SUCCESS':
      return { loading: false, userInfo: action.payload }
    case 'USER_REGISTER_FAIL':
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userDetailReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case 'USER_DETAIL_REQUEST':
      return { loading: true }
    case 'USER_DETAIL_SUCCESS':
      return { loading: false, user: action.payload }
    case 'USER_DETAIL_FAIL':
      return { loading: false, error: action.payload }
    case 'USER_DETAILS_RESET':
      return { user: {} }
    default:
      return state
  }
}

export const userUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_UPDATE_REQUEST':
      return { loading: true }
    case 'USER_UPDATE_SUCCESS':
      return { loading: false, success: true }
    case 'USER_UPDATE_FAIL':
      return { loading: false, error: action.payload }
    case 'USER_UPDATE_RESET':
      return {}
    default:
      return state
  }
}

export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_DELETE_REQUEST':
      return { loading: true }
    case 'USER_DELETE_SUCCESS':
      return { loading: false, success: true }
    case 'USER_DELETE_FAIL':
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
