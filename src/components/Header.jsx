import React from 'react'
import Search from './Search'
import userImg from '../assets/img/user.png'

const Header = () => {
  return (
    <>
      <div className="head flex items-center min-h-16 border-b border-green-300">
        <div className="container-fluid">
          <div className="row align-items-center">

            <div className="col-md-3 mb-3 mb-md-0">
              <div className="title text-center md:text-start">
                <h1 className="lg:text-xl font-bold">Welcome Back , Jahed</h1>
              </div>
            </div>

            <div className="col-md-6 mb-3 mb-md-0">
              <div className="flex justify-center items-center w-full gap-4">
                <div className="md:w-3/5">
                  <Search placeholder="Search" />
                </div>
                <div className="noti-bell">
                  <div className="dropdown w-full">
                    <button className="dropdown-toggle after:hidden" data-bs-toggle="dropdown">
                      <i className="fa fa-regular fa-bell" ></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end h-52 w-4/5">
                      <div className="dropdown-header border-b border-gray-300 m-0 px-3 py-2">
                        <h5 className="mb-0">Notifications</h5>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3 mb-md-0">
              <div className="flex justify-center md:justify-between items-center">
                <div className="toggle-switch">
                  <div className="form-check form-switch">
                    <input className="form-check-input block md:text-[1.66rem] checked:bg-black" type="checkbox" id="formSwitch" />
                  </div>
                </div>
                <div className="user-profile">
                  <div className="user flex items-center gap-2">
                    <h4 className="md:text-xl font-bold">Jahed</h4>
                    <img src={userImg} width={50} alt="img" className="rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Header