import { Container } from "react-bootstrap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Store from "./components/Store";
import About from "./components/About";
import ShoppingCartProvider from "./Context/shoppingCartContext";
function App() {
  const routing = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {path:"/store",element:<Store/>},
        {path:"/about",element:<About/>},
      ],
    },
  ]);
  return (
   
    <ShoppingCartProvider>
     <RouterProvider router={routing}></RouterProvider>
    </ShoppingCartProvider>
    
  );
}

export default App;
