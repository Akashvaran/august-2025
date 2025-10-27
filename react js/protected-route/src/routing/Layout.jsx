import { Outlet } from 'react-router-dom'
import Navbar from '../header/Navbar'

export const Layout = () => {
  return (
    <div>
        <Navbar/>
            <main>
                <Outlet/>
            </main>
    </div>
  )
}
