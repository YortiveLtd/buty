import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import StaffView from './StaffRender/StaffView'
import { useAuthContext } from './hooks/useAuthContext'
import {useState,eseEffect} from 'react'
// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import InventoryForm from './components/InventoryForm'
import Admin from './Admin/AdminFetch'
import Login from './pages/Login'
import Signup from './pages/Signup'
import displayFind from './pages/displayFind'
import Cache from './Admin/Caches'
import FindItem from './pages/FindItem'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
          <Route 
            exact  path="/" 
              element={user ? <Home /> : <Navigate to="/login" />} 
            />
            <Route path="/StaffView" element={<StaffView />}   />
            <Route path="/InventoryForm" element={<InventoryForm />} />
           
             <Route path="/Admin"
             element={ <Admin />    } />
           
            <Route exact path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cache" element={<Cache /> } />
            <Route  path="/find"
             element={<FindItem />  } />
            <Route path="/displayFind" element={<displayFind /> } />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;