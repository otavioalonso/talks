import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Catalog from './components/Catalog.jsx'
import talks from './talks/talks.jsx'

export default function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Navigate to="/catalog" />
              }
            />
            <Route
              path="/catalog"
              element={
                <Catalog/>
              }
            />
            {talks.map(t =>
            <Route key={t.id} path={`/${t.id}`} element={<t.element/>}/>
            )}
          </Routes>
    </BrowserRouter>
  );
}