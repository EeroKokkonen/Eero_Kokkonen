import Profile from "./pages/Profile"
import Navbar from "./components/Navbar"
import Skills from "./pages/Skills"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"
import Other from "./pages/Other"
function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <About/> } exact/>
        <Route path="/experience" element={ <Skills/> } />
        <Route path="/other" element={ <Other/> } />
        <Route path="/contact" element={ <Profile/> }/>
      </Routes>
    </>
  )
}

export default App
