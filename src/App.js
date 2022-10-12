


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blogs/Blog';
import CardDetails from './components/CardDetails/CardDetails';
import Statistics from './components/Statistics/Statistics';
import Home from './Home/Home';
import Main from './layout/Main';


function App() {

const router=createBrowserRouter([

{path:'/', element:<Main></Main>,

children:[


  {path:'/',
  
  
  loader:async()=>{

    return fetch('https://openapi.programming-hero.com/api/quiz')
    
    
      },
  
  
  
  element:<Home></Home> },




  {path:'/home',
  
  loader:async()=>{

    return fetch('https://openapi.programming-hero.com/api/quiz')
    
    
      },
  
  
  
  
  
  element:<Home></Home> },




  


  {path:'/statics', element: <Statistics></Statistics>},


  
  {path:'/blog', element: <Blog></Blog>},



  {


    path:'/home/:homeId',
    
    
    loader: async({params})=>{
    
    // console.log(params.friendId)
    
    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.homeId} `)
    
    },
    
    element:<CardDetails></CardDetails>
    
    }





  
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
