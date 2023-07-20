import { Routes, Route } from "react-router-dom";

import { Profile } from "../pages/Profile"
import { Home } from "../pages/Home"
import { New } from "../pages/New"
import { Details } from "../pages/Details"



export function AppRoutes() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/home" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  )

}