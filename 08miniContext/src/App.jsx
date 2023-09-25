import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {


  return (
    <UserContextProvider>
      <h1 className='text-3xl font-bold'>Welcome to Login Page</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
