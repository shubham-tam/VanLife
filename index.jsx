import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import {
  Home,
  About,
  NotFound,
  Login,
  loginLoader as loginLoader,
} from "./src/pages/index";
import { HostLayout, Layout, Error } from "./src/components/index";
import {
  Vans,
  VanDetail,
  loader as vansLoader,
  vanDetailLoader as vanDetailLoader,
} from "./src/pages/Vans/index";
import {
  Dashboard,
  Reviews,
  Income,
  HostVans,
  hostVansLoader as hostVansLoader,
  HostVanDetails,
  hostVanDetailsLoader as hostVanDetailsLoader,
  VanPhotos,
  VanPricing,
  VanInfo,
} from "./src/pages/Host/index";

import { requireAuth } from "./src/utls/index";
import "./server";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} loader={loginLoader} />

        <Route
          path="vans"
          element={<Vans />}
          loader={vansLoader}
          errorElement={<Error />}
        />
        <Route
          path="vans/:id"
          element={<VanDetail />}
          loader={vanDetailLoader}
        />

        <Route path="host" element={<HostLayout />}>
          <Route
            index
            element={<Dashboard />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="income"
            element={<Income />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="reviews"
            element={<Reviews />}
            loader={async () => await requireAuth()}
          />
          <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
          <Route
            path="vans/:id"
            element={<HostVanDetails />}
            loader={hostVanDetailsLoader}
          >
            <Route
              index
              element={<VanInfo />}
              loader={async () => await requireAuth()}
            />
            <Route
              path="pricing"
              element={<VanPricing />}
              loader={async () => await requireAuth()}
            />
            <Route
              path="photos"
              element={<VanPhotos />}
              loader={async () => await requireAuth()}
            />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    // Prior to React-router v6
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="about" element={<About />} />
    //       <Route path="vans" element={<Vans />} />
    //       <Route path="vans/:id" element={<VanDetail />} />

    //       <Route path="host" element={<HostLayout />}>
    //         <Route index element={<Dashboard />} />
    //         <Route path="income" element={<Income />} />
    //         <Route path="reviews" element={<Reviews />} />
    //         <Route path="vans" element={<HostVans />} />
    //         <Route path="vans/:id" element={<HostVanDetails />}>
    //           <Route index element={<VanInfo />} />
    //           <Route path="pricing" element={<VanPricing />} />
    //           <Route path="photos" element={<VanPhotos />} />
    //         </Route>
    //       </Route>
    //     </Route>
    //     <Route path="*" element={<NotFound />} />
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={router} />
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
