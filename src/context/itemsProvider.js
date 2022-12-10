import React,{createContext} from 'react'
import { useReducer } from 'react'
import {reducer } from './reducer'

export const ItemsContext = createContext(null)

const ItemsProvider = ({children}) => {
    const initialState = {
        items: [],
        selectedItems: [],
        isSearched: false,
        inputVal: '',
        totalVal: 0,
    }

    const [state,dispatch] = useReducer(reducer, initialState)
  return (
    <ItemsContext.Provider value={{...state, dispatch}}>
        {children}
    </ItemsContext.Provider>
  )
}

export default ItemsProvider