import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";  
import Body from "./components/Body";


// conflict derived ui => delhi , bangalore have different ui i.e carousel
//  

  
  const AppLayout =() =>{
      return(
          <div className = "app">
          <Header />
          <Body/>
  
          </div>
      )
  }
  
  
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  
  root.render(<AppLayout />);