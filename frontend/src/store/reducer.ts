import { combineReducers } from 'redux'
import { reducer as mobile } from './mobile'

const reducers = {
  mobile
}

export const appReducer = combineReducers(reducers)
