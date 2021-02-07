import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Data from './Components/Data';

function App() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [isAuth, setIsAuth] = useState(false);
    const [userdata , setUserdata] = useState("");

  return (
    <>
      <Header isAuth = {isAuth} setIsAuth={setIsAuth} userdata={userdata} />
        <Container  style={{minHeight:"80vh"}}>
          <Home
            name={name} 
            userdata={userdata}
            setUserdata={setUserdata}
            password={password}
            setName={setName}
            setPassword={setPassword}
            isAuth = {isAuth}
            setIsAuth={setIsAuth} 
          />
        </Container>
      <Footer/>
    </>
  );
}

export default App;
