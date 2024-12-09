import React from 'react'
import { NavLink } from 'react-router-dom'
import sideImg from '../assets/img/side-img.jpg'

const Sidebar = () => {
    return (
        <>
            <div className="side-bar bg-white border-r border-gray-300 min-h-screen max-h-screen overflow-y-auto overflow-x-hidden">
                <div className="sidebar-logo">
                    <NavLink to="/" className="logo flex items-center justify-center w-full border-b border-gray-300 min-h-16 p-0 m-0">
                        <span className="logo-text text-2xl font-bold p-0 m-0">Logo</span>
                    </NavLink>
                </div>
                <div className="sidebar-nav my-2 px-2">
                    <ul className="side-list">
                        <li className="nav-item">
                            <NavLink className={`nav-link ${(e) => { e.isActive ? "active" : "" }}`} to="/">
                                <i className="fa md:text-xl fa-bars-progress"></i>
                                <span className="font-normal">Dashboard</span>
                            </NavLink>
                            <NavLink className={`nav-link ${(e) => { e.isActive ? "active" : "" }}`} to="/user">
                                <i className="fa md:text-xl fa-user"></i>
                                <span className="font-normal">User</span>
                            </NavLink>
                            <NavLink className={`nav-link ${(e) => { e.isActive ? "active" : "" }}`} to="/news-updates">
                                <i className="fa md:text-xl fa-newspaper"></i>
                                <span className="font-normal">News & updates</span>
                            </NavLink>
                            <NavLink className={`nav-link ${(e) => { e.isActive ? "active" : "" }}`} to="/actionable-tools">
                                <i className="fa md:text-xl fa-tachometer-alt-average"></i>
                                <span className="font-normal">Actionable Tools</span>
                            </NavLink>
                            <NavLink className={`nav-link ${(e) => { e.isActive ? "active" : "" }}`} to="/paid-feature">
                                <i className="fa md:text-xl fa-star-of-life"></i>
                                <span className="font-normal">Paid Feature</span>
                            </NavLink>
                            <NavLink className={`nav-link ${(e) => { e.isActive ? "active" : "" }}`} to="/portfolio-transactions">
                                <i className="fa md:text-xl fa-briefcase"></i>
                                <span className="font-normal">Portfolio Transactions</span>
                            </NavLink>
                            <NavLink className={`nav-link ${(e) => { e.isActive ? "active" : "" }}`} to="/community-&-activity">
                                <i className="fa md:text-xl fa-building"></i>
                                <span className="font-normal">Community Activity</span>
                            </NavLink>
                            <NavLink className={`nav-link ${(e) => { e.isActive ? "active" : "" }}`} to="/security-&-alert">
                                <i className="fa md:text-xl fa-shield-halved"></i>
                                <span className="font-normal">Security & Alert</span>
                            </NavLink>
                            <NavLink className={`nav-link ${(e) => { e.isActive ? "active" : "" }}`} to="/use-full-link">
                                <i className="fa md:text-xl fa-link"></i>
                                <span className="font-normal">Use Full Link</span>
                            </NavLink>
                            <NavLink className={`nav-link ${(e) => { e.isActive ? "active" : "" }}`} to="/weedback-widget">
                                <i className="fa md:text-xl fa-table"></i>
                                <span className="font-normal">Feedback Widget</span>
                            </NavLink>
                            <NavLink className={`nav-link ${(e) => { e.isActive ? "active" : "" }}`} to="/add-section">
                                <i className="fa md:text-xl fa-plus"></i>
                                <span className="font-normal">Add Section</span>
                            </NavLink>

                            <div className="side-img my-2">
                                <div className="img">
                                    <img src={sideImg} alt="side-img" className="block max-w-full mx-auto" />
                                </div>
                            </div>

                            <NavLink className={`nav-link ${(e) => { e.isActive ? "active" : "" }}`} to="/sign-out">
                                <i className="fa md:text-xl fa-sign-out"></i>
                                <span className="font-normal">Sign Out</span>
                            </NavLink>

                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar
