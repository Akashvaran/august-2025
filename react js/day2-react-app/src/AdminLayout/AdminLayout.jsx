import React from 'react'
import AdminNavbar from './AdminNavbar'
import { Outlet } from 'react-router-dom'

export const AdminLayout = () => {
  return (
    <div>
        <AdminNavbar/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}
