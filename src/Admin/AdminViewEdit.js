import React from 'react'
import { useStoreContext } from "../hooks/useStoreContext"
import { useAuthContext } from '../hooks/useAuthContext'
// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const AdminViewEdit = ({StData}) => {
  const {  dispatch } = useStoreContext()
  const { user } = useAuthContext()

 const handleClick = async () =>{
  if (!user) {
    return
  }

  const response = await fetch('/api/store/deleteStore/'+StData._id,{
    method:'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
const json = await response.json()
if(response.ok){
dispatch({type:'DELETE_STORE',payload:json})
}
 }

  return (
    <div className='workout-details'>
        <h4> {StData.Location} </h4>
        <p> <strong> Category:</strong>{StData.Category}</p>
        <p> <strong>Address: </strong>{StData.Address}</p>
        <p> <strong>Item Type:</strong>{StData.ItemType} </p>
        <p> <strong>Item Name</strong>{StData.ItemName} </p>
        <p> <strong> Item No: </strong>{StData.NumberOfItem}</p>
        <p> <strong>Item Serial No: </strong>{StData.ItemSerialNo}</p>
        <p> <strong>Item Desc: </strong>{StData.ItemDescription}</p>
        <p> <strong>Remarks: </strong>{StData.Remarks}</p>
        {/***<p> <strong>{StData.createdAt} </strong></p> */}    
        <p>{formatDistanceToNow(new Date(StData.createdAt), { addSuffix: true })}</p>
        <span className="material-symbols-outlined"
        style={{color:'red'}}
        onClick={handleClick}>Delete</span>
      
    </div>
  )
}

export default AdminViewEdit
