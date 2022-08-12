import '../App.css';
import Login from './Login';
import Table from './Table';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';


function App() {
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
      <NotificationContainer/>
      {/* <Table data={data} setData={setData}/> */}
      {isLoggedIn ? <Table data={data} setData={setData}/> : <Login setIsLoggedIn={setIsLoggedIn}/>}
    </div>
  );
}

export default App;
