import { createContext, useReducer } from 'react'

export const StoresContext = createContext()

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case 'GET_STORE':
      return { 
        workouts: action.payload 
      }
    case 'CREATE_STORE':
      return { 
        workouts: [action.payload, ...state.workouts] 
      }
      case 'DELETE_STORE':
        return{
            workouts: state.workouts.filter((w)=> w._id !== action.payload._id)
        }
        case 'GET_CACHE':
        return{
          workouts: action.payload 
        }
        case 'FIND_ITEM':
          return { 
            workouts: action.payload 
          }
    default:
      return state
  }
}

export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, { 
    workouts: null
  })
  
  return (
    <StoresContext.Provider value={{ ...state, dispatch }}>
      { children }
    </StoresContext.Provider>
  )
}