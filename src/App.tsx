
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import "./App.css"




function App() {

  return (
    <div className='home'  >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
