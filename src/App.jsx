import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import {Outlet, useNavigation} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)
  const navigation = useNavigation();


  return (
    <div className="App">
      <Header></Header>
      <div>{navigation.state === 'loading' && 'Loading...'}</div>
      <Outlet />
    </div>
  )
}

export default App
