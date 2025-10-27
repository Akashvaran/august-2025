import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './Layout'
import { Home } from '../components/Home'
import { About } from '../components/About'
import { Service } from '../components/Service'
import { Contact } from '../components/Contact'
import LoginForm from '../header/Login'
import { Userprovider } from './Userprovider'
import { ProtectedRoute } from './ProtectedRoute'

export const MainRouding = () => {
    return (
        <div>
            <Userprovider>
                <Routes>

                    {/* <Route path='/' element={<LoginForm/>}/> */}

                    <Route path="/" element={<Layout />}>
                        <Route index element={<LoginForm />} />
                        <Route path='/home' element={
                            <ProtectedRoute> <Home /></ProtectedRoute>

                        } />
                        <Route path="/about" element={
                            <ProtectedRoute>
                                <About />
                            </ProtectedRoute>
                        } />
                        <Route path="/service" element={
                            <ProtectedRoute>
                                <Service />
                            </ProtectedRoute>
                        } />
                        <Route path="/contact" element={
                            <ProtectedRoute>
                                <Contact />
                            </ProtectedRoute>
                        } />
                    </Route>
                </Routes>
            </Userprovider>
        </div>
    )
}
