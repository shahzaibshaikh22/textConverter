import './App.css';
import Navbar from './components/Navbar';
import FormsTexts from './components/FormsTexts';
import About from './components/About';
import { useState } from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');



  const toggleMOde =() =>{
     if(mode === 'light'){
       setMode('dark');
       document.body.style.backgroundColor = "#1b1b1b";
       document.body.style.color = "#fff";
     }
     else{
       setMode('light');
       document.body.style.color = "black";
       document.body.style.backgroundColor = "#fff";
     }
  }

  return (
   <>
    <BrowserRouter>
    <Navbar heading="Text-Utils" mode={mode} toggler={toggleMOde}/>
      <Switch>
        <Route exact path="/">
        <FormsTexts top_heading=" Enter Text Here" sumary="Text Summary"/>
        </Route>
        <Route path="/about">
        <About/>
        </Route>
      </Switch>
    </BrowserRouter>
   </>
  );
}

export default App;
