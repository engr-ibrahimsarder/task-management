import { Navigate, Outlet, Route, Routes, useLocation} from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Tasks from './pages/Tasks/Tasks'
import Trash from './pages/Trash/Trash'
import TaskDetail from './pages/TaskDetail/TaskDetail'
import Users from './pages/Users/Users'
import Login from './pages/Login/Login'

function Layout(){
  const user = "";
  const location = useLocation()
  return user ? 
  (
    <div className='w-full h-screen flex flex-col md:flex-row'>
      <div className='w-1/5 h-screen bg-white sticky top-0 hidden md:block'>
        {/* sidebar */}
      </div>
      {/* mobile sidebar */}
      <div className='flex-1 overflow-y-auto'>
        {/* Navbar */}
        <div className='p-4 2xl:px-10'>
          <Outlet/>
        </div>
      </div>
    </div>
  ) 
  : 
  (
    <Navigate to="/log-in" state={{from: location}} replace/>
  )
};

function App() {
  return (
   <main>
    <Routes>
      <Route element={Layout}>
        <Route path='/' element={<Navigate to='/dashboard'/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/tasks" element={<Tasks/>}/>
        <Route path="/in-progress/:status" element={<Tasks/>}/>
        <Route path="/todo/:status" element={<Tasks/>}/>
        <Route path="/completed/:status" element={<Tasks/>}/>
        <Route path="/trash" element={<Trash/>}/>
        <Route path="/task/:id" element={<TaskDetail/>}/>
        <Route path="/users" element={<Users/>}/>
      </Route>
      <Route path="/log-in" element={<Login/>}/>
    </Routes>
   </main>
  )
}

export default App
