import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  postListReducer,
  postDetailReducer,
  postCreateReducer,
  postUpdateReducer,
  postDeleteReducer,
} from './reducers/postReducers'
import { categoryListReducer } from './reducers/categoryReducers'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailReducer,
  userUpdateReducer,
} from './reducers/userReducers'

const reducer = combineReducers({
  postList: postListReducer,
  postDetail: postDetailReducer,
  postCreate: postCreateReducer,
  postUpdate: postUpdateReducer,
  postDelete: postDeleteReducer,
  categoryList: categoryListReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userDetail: userDetailReducer,
  userUpdate: userUpdateReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
  },
}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
