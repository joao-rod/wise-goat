import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { Advice } from "../pages/Advice"

export const Routs: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="advice/" element={<Advice/>} />
    </Routes>
  )
}
