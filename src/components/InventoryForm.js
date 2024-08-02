import React,{useState} from 'react'
import { useStoreContext } from "../hooks/useStoreContext"
import { useAuthContext } from '../hooks/useAuthContext'

const InventoryForm = () => {
const {dispatch} = useStoreContext()
const { user } = useAuthContext()

    const [Location,setLocation] = useState('')
    const [Category,setCategory] = useState('')
    const [Address,setAddress] = useState('')
    const [ItemType,setItemType] = useState('')
    const [ItemName,setItemName] = useState('')
    const [NumberOfItem,setNumberOfItem] = useState(null)
    const [ItemSerialNo,setItemSerialNo] = useState('')
    const [ItemDescription,setItemDescription] = useState('')
    const [Remarks,setRemarks] = useState('')
    const [loading,setLoading] = useState(null)
    const [progress,setProgess] = useState(null)
    const [emptyFields, setEmptyField] = useState([]);
    const [error, setError] = useState(null);

const handleCategory =(e)=>{
    setCategory(e.target.value)
}
const handleStorLocation =(e)=>{
    setLocation(e.target.value)
    //console.log(e.target.value)
}
const handleSubmit = async (e)=>{
    e.preventDefault()
    if (!user) {
      setError('You must be logged in')
      return
    }

    const storeData = {
        Location,
        Category,
        Address,
        ItemType,
        ItemName,
        NumberOfItem,
        ItemDescription,
        ItemSerialNo,
        Remarks,
      };
      setLoading(true)
      setProgess(true)
  const response = await fetch('/api/store/postStore',{
    method: "POST",
    body: JSON.stringify(storeData),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`
    }
  })

  const json = await response.json();
  console.log(json);
  if (!response.ok) {
    setError(json.error);
    setEmptyField(json.emptyFields);
  }
  if (response.ok) {
    
    setError(null);
    setCategory("");
    setLocation("");
    setAddress("");
    setItemType("");
    setItemName("");
    setNumberOfItem("");
    setItemDescription("");
    setItemSerialNo("");
    setRemarks("");
    
    setEmptyField([]);
    //console.log("new store added:", json);
    dispatch({type:'CREATE_STORE',payload:json})
    //you need to create dispatchere
    //dispatch({ type: "CREATE_STORE", payload: json });
  }
}
const handleDesc =(e)=>{
    setItemDescription(e.target.value)
    //console.log(e.target.value)
}

  return (
    <div>
      <form className="create" onSubmit={handleSubmit}>
      <label>CATEGORY:</label>
      <select onChange={handleCategory}>
        <option>--Please Select--</option>
        <option value="Electronics" selected>
          Electronics
        </option>
        <option value="Home & Office">Home & Office</option>
        <option value="Computing">Computing</option>
        <option value="Industrial & Scientific">Industrial & Scientific</option>
        <option value="Automobile">Automobile</option>
        <option value="Garden & Outdoors"> Garden & Outdoors</option>
      </select>

      <label>Choose Office/Store Location:</label>
      <select onChange={handleStorLocation}>
        <option>--Please Select--</option>
        <option value="Joju Office OTA">Joju Office OTA</option>
        <option value="149 IDIROKO road Oju Ore Round about Ota">
          149 IDIROKO road Oju Ore Rbt Ota
        </option>
        <option value="24 Igomode road Amadiya Junction OTA">
          24 Igomode road Amadiya Junction OTA
        </option>
        <option value="NTAPO Junction Ijoko Ogbayo Ogun State">
          NTAPO Junction Ijoko Ogbayo Ogun State
        </option>
        <option value="147 IDIROKO road Oju Ore Round about OTA">
          147 IDIROKO road Oju Ore Round about OTA
        </option>
        <option value="Atan Market By IDIROKO road ATAN Ogun State">
          Atan Market By IDIROKO road ATAN Ogun State
        </option>
      </select>

      <label>Address:</label>
      <input
        type="text"
        onChange={(e) => setAddress(e.target.value)}
        value={Address}
       // className={emptyFields.includes('Address') ? 'error':''}
      />

      <label>Item Type:</label>
      <input
        type="text"
        onChange={(e) => setItemType(e.target.value)}
        value={ItemType}
       // className={emptyFields.includes('ItemType') ? 'error':''}
      />

      <label>Item Name:</label>
      <input
        type="text"
        onChange={(e) => setItemName(e.target.value)}
        value={ItemName}
       // className={emptyFields.includes('ItemName') ? 'error':''}
      />
      <label>No Of Item:</label>
      <input
        type="number"
        onChange={(e) => setNumberOfItem(e.target.value)}
        value={NumberOfItem}
       // className={emptyFields.includes('NumberOfItem') ? 'error':''}
      />
      <label>Item Description:</label>
      <input
        type="multiple"
        onChange={handleDesc}
        value={ItemDescription}
       // className={emptyFields.includes('ItemDescription') ? 'error':''}
      />
      <label>Item Serial Number:</label>
      <input
        type="text"
        onChange={(e) => setItemSerialNo(e.target.value)}
        value={ItemSerialNo}
       // className={emptyFields.includes('ItemSerialNo') ? 'error':''}
      />
       <label>Remarks:</label>
         <input
        type="multiple"
        onChange={(e) => setRemarks(e.target.value)}
        value={Remarks}
      />

<button>Submit Store</button>
{error && loading &&  emptyFields && progress && <div className="error">{error}</div>}
      </form>
    </div>
  )
}

export default InventoryForm
