import React,{useState,useEffect} from 'react'
import CacheView from './CacheView'
import { useAuthContext } from "../hooks/useAuthContext"
import { useStoreContext } from "../hooks/useStoreContext"

const Caches = () => {
    const { workouts, dispatch } = useStoreContext()
    const {user} = useAuthContext()

    useEffect(() => {
        console.log(user)
        const fetchStore = async () => {
          const response = await fetch('/api/store/cache', {
            headers: {'Authorization': `Bearer ${user.token}`},
          })
          const json = await response.json()
    console.log(json)
          if (response.ok ) {
            dispatch({type: 'GET_CACHE', payload: json})
          }
        }
    if(user){
        fetchStore()
    }
      
        
        
      }, [dispatch,user])

  return (
    <div className='home'>
        <div className="workouts">
        {workouts && workouts.map(StData => (
          <CacheView StData={StData} key={StData._id} />
          
         
        ))}
      </div>
    
    </div>
  )
}

export default Caches
