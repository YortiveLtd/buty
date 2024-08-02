import { useEffect, useState } from "react"
import StaffView from '../StaffRender/StaffView'
import InventoryForm from '../components/InventoryForm'


const Home = () => {
  const [getStore, setGetStore] = useState(null)

  useEffect(() => {
    const fetchStore = async () => {
      const response = await fetch('/api/store/all')
      const json = await response.json()

      if (response.ok) {
        setGetStore(json)
      }
    }

    fetchStore()
  }, [])

  return (
    <div className="home">
      <div className="workouts">
        {getStore && getStore.map(StData => (
          <StaffView StData={StData} key={StData._id} />
          
         
        ))}
      </div>
      <InventoryForm />
    </div>
  )
}

export default Home