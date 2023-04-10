import logo from './logo.svg';
import React  from "react";
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import Header from './components/Header/Header';
import Nav from "./components/NavBar/Nav";
import Profile from "./components/Profile/Profile";
import {findAllByDisplayValue} from "@testing-library/react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App=(props)=>{
  return(
          <div className={"app-wrapper"}>
              <Header/>
              <Nav state={props.state} store={props.state}/>
              <div className="app-wrapper-content">
                  <Routes>
                     <Route path='/dialogs' element={<DialogsContainer store={props.state}/>}/>
                     <Route path='/profile' element={<Profile store={props.state}/>}/>
                     {/*<Route path='/news' element={<Dialogs/>}/>*/}
                     {/*<Route path='/music' element={<Profile/>}/>*/}
                     {/*<Route path='/settings' element={<Profile/>}/>*/}
                  </Routes>
              </div>
          </div>
  )
}

export default App;


