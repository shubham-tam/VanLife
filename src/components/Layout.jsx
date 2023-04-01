import { Outlet } from "react-router-dom";

import { Header, Footer } from "./index";

export default function Layout() {
  return (
    <>
      <div className="site-wrapper">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
