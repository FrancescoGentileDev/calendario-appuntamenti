import React from "react";
import Setting from "../routes/Setting";
import Client from "../routes/Client";
import Calendario from "../routes/calendario";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
export default function AnimationRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="calendario" />} />
        <Route path="calendario" element={<Calendario />} />
        <Route path="clienti" element={<Client />} />
        <Route path="setting" element={<Setting />} />
      </Routes>
    </AnimatePresence>
  );
}
