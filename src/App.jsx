import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Navbar from './componunts/Navbar'
import Footer from './componunts/Footer'
import Home from './pages/Home'
import Team from './pages/Team'


import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import About from './pages/About'
import ContactUs from './pages/ContactUs'



function App() {



  return (
    <>
        <div className='d-flex flex-column vh-100'>
<BrowserRouter>
{<Navbar/>}
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/team" element={<Team/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<ContactUs/>}/>
</Routes>
<Footer/>
</BrowserRouter>
       

      
    </div>
    </>
  )
}

export default App
