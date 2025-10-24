// import { Useeffect } from "./day2/Useeffect"

import { Navigate, Outlet, Route, Routes } from "react-router-dom"
import Navbar from "./day3/navbar/Navbar"
import { Home } from "./day3/pages/Home"
import { About } from "./day3/pages/About"
import { Services } from "./day3/pages/Services"
import { Contact } from "./day3/pages/Contact"
import { ErrorPage } from "./day3/pages/ErrorPage"
import { Layout } from "./day3/navbar/Layout"
import AdminNavbar from "./AdminLayout/AdminNavbar"
import { AdminLayout } from "./AdminLayout/AdminLayout"
import { AdminHome } from "./admindashboard/AdminHome"
import { AdminAbout } from "./admindashboard/AdminAbout"
import { Admindata } from "./admindashboard/Admindata"


function App() {
  // console.log("hello");
  // const name ="akash varan"
  // const email ="akasvaran@123"
  // const password ="akash@123"
  // const mobile =1234567890


  return (
    <>
      {/* <Useeffect name={name} email={email} password={password} mobile={mobile}/> */}
      {/* <Navbar /> */}


      <Routes>
              {/* user */}
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* <Route path="/admin/" element={<AdminLayout/>}>
          <Route index element={<AdminHome/>} />
          <Route path="Adminhome" element={<AdminAbout/>} />
          <Route path="Admindata" element={<Admindata/>} />
        </Route> */}



        

        <Route path="*" element={<ErrorPage />} />

      </Routes>







    </>
  )
}

export default App