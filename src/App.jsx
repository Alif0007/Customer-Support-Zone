import { useState, Suspense } from 'react'
import './App.css'
import TicketsList from './component/TicketsList';

import Footer from './component/footer';




const ticketListPromise = fetch('./ticket.json').then(res => res.json());

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="navbar bg-base-100 shadow-sm px-15">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a>Home </a></li>
              <li><a>FAQ </a></li>
              <li><a>Changelog </a></li>
              <li><a>Blog </a></li>
              <li><a>Download </a></li>
              <li><a>Contact </a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">CS-Ticket System</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li><a>Home </a></li>
            <li><a>FAQ </a></li>
            <li><a>Changelog </a></li>
            <li><a>Blog </a></li>
            <li><a>Download </a></li>
            <li><a>Contact </a></li>


          </ul>
          <div className="">
            <a className="btn btn-info text-white">+ New Ticket</a>
          </div>
        </div>

      </div>

      <div className='flex flex-col lg:flex-row gap-10 mx-15 mt-20'>
        <div className=' flex items-center justify-center flex-col  py-18 gap-4 bg-1 text-white  w-full rounded-2xl'>
          <h1 className='text-2xl'>In-Progress</h1>
          <p className='text-5xl font-semibold'>0</p>
        </div>
        <div className=' flex items-center justify-center flex-col  py-18 gap-4 bg-2 text-white  w-full rounded-2xl'>
          <h1 className='text-2xl'>Resolved</h1>
          <p className='text-5xl font-semibold'>0</p>
        </div>


      </div>


      <div className='flex flex-col-reverse lg:flex-row px-15 gap-5 my-12 '>
        <div className=''>
          <h1 className='text-2xl font-semibold text-gray-700 mb-5'>Customer Ticket </h1>
          <Suspense >
            <TicketsList ticketListPromise={ticketListPromise}>

            </TicketsList>
          </Suspense>
        </div>
        <div className='w-full lg:w-2/9'>
          <div>
          <h1 className='text-2xl font-semibold text-gray-700'>Task Status </h1>
        </div>
        <div>
          <h1 className='text-2xl font-semibold text-gray-700'>Resolved Task</h1>
        </div>

        </div>
      </div>



      <Footer></Footer>

      

    </>
  )
}

export default App
