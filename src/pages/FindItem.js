import React,{useState} from 'react'
import { useAuthContext } from "../hooks/useAuthContext"
import { useStoreContext } from "../hooks/useStoreContext"
import displayFind from './displayFind'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const FindItem = () => {
    const { workouts, dispatch } = useStoreContext()
    const {user} = useAuthContext()
    const [getItemNo,setGetItemNo]=useState('')//PR234567SMT
    const [error,setError]=useState('')
    const [loading,setLoading] = useState(null)
    const [progress,setProgess] = useState(null)
    const [emptyFields, setEmptyField] = useState([]);
const handleFind=(e)=>{
    setGetItemNo(e.target.value)

}
const submitFind=async(e)=>{
e.preventDefault()
const data={
    getItemNo
}
if (!user) {
    setError('You must be logged in')
    return
  }
  setLoading(true)
  setProgess(true)
const response = await fetch('/api/store/searchByItemNo',{
method: "POST",
body: JSON.stringify(data),
headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${user.token}`
}
})
const json = await response.json();
  //console.log(json); //123456789LEDSMTV

  if (!response.ok) {
    setError(json.error);
    console.log(json.error)
    setEmptyField(json.emptyFields);
   
  }

  if (response.ok) {
    
    setError(null);
    setEmptyField([]);
    //console.log("new store added:", json);
    dispatch({type:'FIND_ITEM',payload:json})
}


}


  return (
    <div>
        <form className="create" onSubmit={submitFind}>
      <label>Find Item</label>
      <input type='text' onChange={handleFind} value={getItemNo} />
     
      <button>Find</button>
      {error  &&  <div className="error">{error}</div>}

      </form>
      {workouts ? workouts.map((data)=>{
      
      return  (<div className='workout-details'>
        <div className='workouts'>
        <h2> {data.Location} </h2>
        <p> <strong> Category :  </strong>{data.Category}</p>
        <p> <strong> Address  : </strong>{data.Address}</p>
        <p> <strong> Item Desc :  </strong>{data.ItemDescription}</p>
        <p> <strong> Item Type : </strong>{data.ItemType}</p>
        <p> <strong> Item Name : </strong>{data.ItemName}</p>
        <p> <strong> No of Item : </strong>{data.NumberOfItem}</p>
        <p style={{color:'red'}}> <strong> Item Serial No:</strong>{data.ItemSerialNo}</p>
        <p > <strong> Remarks  :  </strong>{data.Remarks}</p>
       
        <p><strong>Created Date :</strong>{formatDistanceToNow(new Date(data.createdAt), { addSuffix: true })}</p>

        <p><strong>Udated  :</strong>{formatDistanceToNow(new Date(data.updatedAt), { addSuffix: true })}</p>

   
</div>
         </div>
         
         )
       
       
      }) :''}
    </div>
  )
}

export default FindItem
