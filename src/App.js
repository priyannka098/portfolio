
import './App.css';
import {Routes, Route } from "react-router-dom";
import HomeComponent from "./HomeComponent/Home";
 import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Routes>
    <Route  path='/' element={ <HomeComponent/>}/> 
    </Routes>
    </>

  )
}
export default App; 
