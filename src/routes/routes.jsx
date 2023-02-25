import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Biblioteca } from '../pages/Biblioteca'
import { Dashboard } from '../pages/Dashboard'
import { Food } from '../pages/Food'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Secretary } from '../pages/Secretary'
import { Student } from '../pages/Student'
import { Teacher } from '../pages/Teacher'





export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/alimentacao" element={<Food />} />
        <Route path="/secretaria" element={<Secretary />} />
        <Route path="/estudante" element={<Student />} />
        <Route path="/professor" element={<Teacher />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}