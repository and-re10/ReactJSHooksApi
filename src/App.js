import React from 'react';
import './App.css';
import ApiClass2 from "./apiClass2.jsx"
import ApiClass1 from "./apiClass1.jsx"
import ApiHooks1 from "./apiHooks1.jsx"
import ApiHooks2 from "./apiHooks2.jsx"
import Search from "./search.jsx"
import "../node_modules/bootstrap/dist/css/bootstrap.css"


export default function App () {

  return (
    <>
      <div>
        {/* <ApiClass2/> */}
        {/* <ApiClass1/> */}
        {/* <ApiHooks1/> */}
        <ApiHooks2/>
        {/* <Search/> */}
      </div>
    </>
  );
}

