import { StoresContext } from "../context/WorkoutsContext"
import { useContext } from "react"

export const useStoreContext = () => {
  const context = useContext(StoresContext)

  if(!context) {
    throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
  }

  return context
}