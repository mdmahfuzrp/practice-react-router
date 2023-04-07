import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import About from './components/About/About';
import Contact from './components/Contact/Contact';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Friends from './components/Friends/Friends';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Posts from './components/Posts/Posts';
import SinglePost from './components/SinglePost/SinglePost';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: 'posts',
        element: <Posts></Posts>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: '/posts/single-post/:postID',
        element: <SinglePost></SinglePost>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`)
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: '/',
        element: <h2 className='compo-title'>Welcome Our React Router Website</h2>
      },
      {
        path: 'friend',
        element: <Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'friend/:friendID',
        element: <FriendDetails></FriendDetails>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendID}`)
      },
      {
        path: 'home',
        element: <h1 className='compo-title'>This is home</h1>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)