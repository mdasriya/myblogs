import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import About from "../pages/About"
import Projects from "../pages/Projects"


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/dashboard"  element={<Dashboard />} />
      <Route path="/login"  element={<SignIn />} />
      <Route path="/signup"  element={<SignUp />} />
      <Route path="/about"  element={<About />} />
      <Route path="/projects"  element={<Projects />} />
    </Routes>
  )
}

export default MainRoutes
