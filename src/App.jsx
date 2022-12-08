import Profile from "./pages/Profile"
import Navbar from "./components/Navbar"
import Projects from "./pages/Projects"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"
import Other from "./pages/Other"
function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <About/> } exact/>
        <Route path="/experience" element={ <Projects/> } />
        <Route path="/other" element={ <Other/> } />
        <Route path="/contact" element={ <Profile/> }/>
        
        
      </Routes>
    </>
  )
}

export default App
