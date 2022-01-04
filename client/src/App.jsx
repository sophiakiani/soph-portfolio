import { useState, useEffect } from "react"
import Home from './pages/Home';
import LoginForm from './pages/LoginForm';
import SinglePost from './pages/SinglePost';
import Navbar from './components/Navbar';
import Setting from './pages/Setting';
import SignupForm from './pages/SignupForm';
import  { AuthProvider } from './context/AuthContext'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  // const [ authState, setAuthState ] = useState({})


  return (
    // <Router>
      <AuthProvider>
        <Navbar/>
        <Home/>
        {/* <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/signup" element={<SignupForm/>}/>
          <Route path="/setting" element={<Setting/>}/>
          <Route exact path="/profile" element={<SinglePost/>}/>
        </Routes> */}
      </AuthProvider>
    // </Router>
  );
}

export default App;