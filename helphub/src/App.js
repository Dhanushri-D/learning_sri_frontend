import './App.css';
import { Outlet } from "react-router-dom";
import Header from './Common/Header';
import { useEffect, useState } from 'react';

function App() {
  let [data,setData]=useState([]);
  useEffect(()=>{
    const FetchApi=async()=>{
      try{
        const response=await fetch("http://localhost:3000/Helphub.json");
        const fetchData=await response.json();
        setData(fetchData);
      }catch(err){
        console.log("err",err); 
      }
    };
    FetchApi();
  },[]);
  console.log(data);
  return (
    <div className="App">
      <Header></Header>
      <Outlet
        context={{data}}>
      </Outlet>
    </div>
  );
}


export default App;
