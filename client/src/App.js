import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import Main from "./views/Main";
import Create from "./views/Create";
import Edit from "./views/Edit";
import SinglePet from "./views/SinglePet";

function App() {

  return (
    <div className="App">
      <div className='nav'>
        <Link className='btn btn-info' to="/">Main Page</Link>
        <Link className='btn btn-primary' to="/pets/create">Add a pet to the Shelter</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>

        <Route exact path="/pets/create">
          <Create/>
        </Route>

        <Route exact path="/pets/:_id/edit">
          <Edit/>
        </Route>

        <Route exact path="/pets/:_id/view">
          <SinglePet/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;