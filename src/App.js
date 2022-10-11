


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Main from './layout/Main';


function App() {

const router=createBrowserRouter([

{path:'/', element:<Main></Main>,

children:[


  {path:'/', element:<Home>this is default page</Home> },
  {path:'/home', element:<Home>This is home page</Home> },
  {path:'/topics', element: <div>Topics page</div>},
  {path:'/statics', element: <div>statics page</div>},
  {path:'/blog', element: <div>blog page</div>}
  
]








},

{path:'*',element:<div className='  align-items-center'>404....Page not found!!!!</div>}

])



  return (
    <div className="App">
      




<RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
