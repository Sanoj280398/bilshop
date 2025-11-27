import React from 'react'
import Nav from './Navbar'
import { Outlet } from 'react-router'

const Layout = () => {
    return <>
    <Nav />
    <main>
        <Outlet />
    </main>
    </>
}

export default Layout