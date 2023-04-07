import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, About, NotFound } from "./src/pages/index";
import { HostLayout, Layout } from "./src/components/index";
import { Vans, VanDetail } from "./src/pages/Vans/index";
import {
  Dashboard,
  Reviews,
  Income,
  HostVans,
  HostVanDetails,
  VanPhotos,
  VanPricing,
  VanInfo,
} from "./src/pages/Host/index";

import "./server";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetails />}>
              <Route index element={<VanInfo />} />
              <Route path="pricing" element={<VanPricing />} />
              <Route path="photos" element={<VanPhotos />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
