import { useEffect } from "react"
import StaffView from '../StaffRender/StaffView'
import InventoryForm from '../components/InventoryForm'
import { useStoreContext } from "../hooks/useStoreContext"
import { useAuthContext } from "../hooks/useAuthContext"


const Home = () => {
  const { workouts, dispatch } = useStoreContext()
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchStore = async () => {
      const response = await fetch('/api/store/all', {
        headers: {'Authorization': `Bearer ${user.token}`},
      })
      const json = await response.json()

      if (response.ok ) {
        dispatch({type: 'GET_STORE', payload: json})
      }
    }
if(user){
  fetchStore()
}
    
  }, [dispatch,user])

  return (
    <div className="home"> 
      <div className="workouts">
        {workouts && workouts.map(StData => (
          <StaffView StData={StData} key={StData._id} />
          
         
        ))}
      </div>
      <InventoryForm />
    </div>
  )
}

export default Home