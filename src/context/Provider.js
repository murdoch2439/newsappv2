import React, {createContext, useReducer} from 'react'
import newsInitialState from './initialStates/newsInitialState'
import registrationInitialState from './initialStates/signUpInitialState'
import newsReducer from './reducers/newsReducer'
import registrationReducer from './reducers/registrationReducer'

export const GlobalContext = createContext({})

const GlobalProvider = ({children}) =>{
  const [registrationState, registrationDispatch]= useReducer(registrationReducer, registrationInitialState)
  const [newsState, newsDispatch]= useReducer(newsReducer, newsInitialState)

  return(
    <GlobalContext.Provider value={{registrationState, newsState, registrationDispatch, newsDispatch}}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider