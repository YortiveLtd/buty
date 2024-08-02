import React from 'react'

const displayFind = ({itemData}) => {
    console.log(itemData)
    //123456789LEDSMTV
  return (
    <div>
    <h2> {itemData.Location} </h2>
    <span>{itemData.Category}</span>
    <span>{itemData.Address}</span>
    <span>{itemData.ItemDescription}</span>
    <span>{itemData.ItemType}</span>
    <span>{itemData.ItemName}</span>
    <span>{itemData.NumberOfItem}</span>
    <span>{itemData.ItemSerialNo}</span>
    <span>{itemData.Remarks}</span>
    <span>{itemData.createdAt}</span>
    <span> {itemData.updatedAt} </span>

     </div>
  )
}

export default displayFind
