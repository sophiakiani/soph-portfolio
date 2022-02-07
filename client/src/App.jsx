import { useState, useEffect } from "react"
import PageContainer from "./pages/PageContainer";
import Home from './pages/Home';
import LoginForm from './pages/LoginForm';
import SinglePost from './pages/SinglePost';
import Setting from './pages/Setting';
import SignupForm from './pages/SignupForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
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
        <PageContainer/>
        {/* <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/signup" element={<SignupForm/>}/>
          <Route path="/setting" element={<Setting/>}/>
          <Route exact path="/profile" element={<SinglePost/>}/>
        </Routes> */}
        <Footer/>
      </AuthProvider>
    // </Router>
  );
}

export default App;