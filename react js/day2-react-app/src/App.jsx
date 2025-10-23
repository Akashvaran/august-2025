// import { Useeffect } from "./day2/Useeffect"

import { Outlet, Route, Routes } from "react-router-dom"
import Navbar from "./day3/navbar/Navbar"
import { Home } from "./day3/pages/Home"
import { About } from "./day3/pages/About"
import { Services } from "./day3/pages/Services"
import { Contact } from "./day3/pages/Contact"
import { ErrorPage } from "./day3/pages/ErrorPage"
import { Layout } from "./day3/navbar/Layout"


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

        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
        
        </Route>
          <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<ErrorPage />} />

      </Routes>








    </>
  )
}

export default App