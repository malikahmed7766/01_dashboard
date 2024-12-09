import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Router from './Router'

const App = () => {

  return (
    <>
      <div className="container-fluid px-0">
        <div className="row g-0">

          <div className="sidebar fixed-top d-none d-xl-block col-md-6 col-xl-2">
            <Sidebar />
          </div>

          <div className="main-content bg-gray-100 col-xl-10">
            <div className="header sticky-top bg-white">
              <Header />
            </div>
            <div className="site-content min-h-screen p-3">
              <Router />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App