import logo from './logo.svg';
import './App.css';
import SwaggerUI from "swagger-ui-react";
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

import "swagger-ui-react/swagger-ui.css";
function App() {
// Get the current URL
const url = new URL(window.location.href);

// Get the query string parameters
const params = new URLSearchParams(url.search);


  // Get the value of a specific parameter
  const loadfile = params.get('load'); 
  const urlPath =  "./swagger/" +loadfile + ".json";
  console.log(urlPath);

  if(loadfile == undefined || loadfile == null || loadfile.length == 0){
    return(
      <div className="App">
        <h1>API Docs</h1>
      </div>

    );

  }
  //console.log(param1);
  return (
    <div className="App">
    

      <SwaggerUI url={urlPath} />
      

    </div>
  );
}

export default App;
