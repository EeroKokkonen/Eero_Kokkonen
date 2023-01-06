import Profile from "./pages/Profile"
import Navbar from "./components/Navbar"
import Skills from "./pages/Skills"
import About from "./pages/About"
import { Navigate, Routes, Route } from "react-router-dom";
import Other from "./pages/Other"
import { useState, Suspense } from "react"


function App() {

  const [page, setPage] = useState("");

  return (
    <>
    <Suspense fallback="loading">
        <Navbar page={page}/>
        <Routes>
          <Route path="/" element={ <About setPage={setPage} /> } exact/>
          <Route path="/skills" element={ <Skills setPage={setPage} /> } />
          <Route path="/interests" element={ <Other setPage={setPage} /> } />
          <Route path="/contacts" element={ <Profile setPage={setPage} /> }/>
          <Route path="*" element={<Navigate to="/" replace />}/>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
