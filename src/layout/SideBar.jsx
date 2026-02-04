import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
    return (
        <aside className='sideBar'>
            <div>
                <h1 className='sideBarLogo'>Logo</h1>
                <nav className='sideBarLinks'>
                    <NavLink to={"/dashboard"} className="navLink">
                        <i class="ri-dashboard-line"></i> Dashboard
                    </NavLink>
                    <NavLink to={"/users"} className="navLink">
                        <i class="ri-user-3-line"></i> Users
                    </NavLink>
                </nav>
            </div>

            <div className="sideBarFooter">
                <small className="text-muted">© 2026 Admin Panel</small>
            </div>
        </aside>
    )
}

export default SideBar
