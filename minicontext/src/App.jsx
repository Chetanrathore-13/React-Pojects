
import './App.css'
import Login from './assets/Components/Login'
import Profile from './assets/Components/Profile'
import UserContextProvider from './assets/context/UserContectProvider'

function App() {
  

  return (
    <UserContextProvider> 
         <h1 className='red'>This is react first project</h1>
         <Login/>
         <Profile/>
    </UserContextProvider>
    
  )
}

export default App
