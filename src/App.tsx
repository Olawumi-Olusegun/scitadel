import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages";
import SignIn from "./pages/auth/sign-in";
import SignUp from "./pages/auth/sign-up";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  )
}

export default App
