import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import StaffView from './StaffRender/StaffView'
import { useAuthContext } from './hooks/useAuthContext'
// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import InventoryForm from './components/InventoryForm'
import Admin from './Admin/AdminFetch'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  const { user } = useAuthContext()
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
          <Route 
              path="/" 
              element={user ? <Home /> : <Navigate to="/login" />} 
            />
            <Route path="/StaffView" element={<StaffView />}   />
            <Route path="/InventoryForm" element={<InventoryForm />} />
           
             <Route path="/Admin"
             element={ <Admin />    } />
          
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}


export default App;