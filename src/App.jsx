import Profile from "./pages/Profile"
import Navbar from "./components/Navbar"
import Skills from "./pages/Skills"
import About from "./pages/About"
import { Navigate, Routes, Route } from "react-router-dom";
import Other from "./pages/Other"
import { useState } from "react"

function App() {
  const [header, setHeader] = useState("");
  return (
    <>
      <Navbar header={header}/>
      <Routes>
        <Route path="/" element={ <About setHeader={setHeader} /> } exact/>
        <Route path="/skills" element={ <Skills setHeader={setHeader} /> } />
        <Route path="/interests" element={ <Other setHeader={setHeader} /> } />
        <Route path="/contacts" element={ <Profile setHeader={setHeader} /> }/>
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
    </>
  )
}

export default App
