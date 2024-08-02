import React from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const CacheView = ({StData}) => {
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
      
    </div>
  )
}

export default CacheView
