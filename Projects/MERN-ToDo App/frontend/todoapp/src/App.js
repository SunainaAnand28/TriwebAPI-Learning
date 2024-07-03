
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Homepage';
import Adduser from './Components/Adduser';
import Edituser from './Components/Edituser';


function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <Homepage/>,

  },
  {
    path: "/adduser",
    element: <Adduser/>,

  },
  {
    path: "/edituser",
    element: <Edituser/>,

  },
  {
    path: "*",
    element: <div>Page not found</div>,

  },

])
  
  return <RouterProvider router={router} />
}

export default App;
