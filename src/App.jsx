import { Outlet } from "react-router-dom"
import Header from "./components/Header"


function App() {
  

  return (
    <div className="App grid">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default App
