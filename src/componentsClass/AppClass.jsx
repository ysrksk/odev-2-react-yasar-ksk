import '../App.css';
import Login from '../componentsClass/Login';
import Table from '../componentsClass/Table';
import React, {useState, useEffect} from 'react';
import axios from 'axios';


function AppClass() {
  const [data, setData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

const getData = async () => {
  const res = await axios('https://swapi.dev/api/people')
  setData(res.data.results)
}

useEffect( () => {
  getData();
}, [])


  return (
    <div className="App">
      {isLoggedIn ? <Table data={data} setData={setData}/> : <Login setIsLoggedIn={setIsLoggedIn}/>}
    </div>
  );
}

export default AppClass;
