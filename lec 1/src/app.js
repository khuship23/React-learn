import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";  
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";
import ErrorElement from "./components/ErrorElement";




// conflict derived ui => delhi , bangalore have different ui i.e carousel
//  

  
  const AppLayout =() =>{
      return(
          <div className = "app">
          <Header />
          <Outlet />
  
          </div>
      )
  }
  
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
          {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/Contact",
          element: <Contact />,
        },
      ],
      errorElement: <ErrorElement />,
    },
    // {
    //   path: "/about",
    //   element: <About />,
    // },
    // {
    //   path: "/Contact",
    //   element: <Contact />,
    // },
  ]);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  
//   root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
  