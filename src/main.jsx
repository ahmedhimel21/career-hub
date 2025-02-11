import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Statistics from './components/Statistics';
import AppliedJobs from './AppliedJobs';
import Blog from './Blog';
import ErrorPage from './components/ErrorPage';
import JobDetails from './components/JobDetails';
import { productsAndCartData } from './components/Loader/getCart&ProductsData';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/cardsData.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/jobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: productsAndCartData
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: ({params}) => fetch('/companyData.json')
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
