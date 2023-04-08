import { Link, Outlet, NavLink, useLoaderData } from "react-router-dom";

import { getHostVans } from "../../../../api";
import { requireAuth, activeStyles } from "../../../utls";

export const hostVanDetailsLoader = async ({ params }) => {
  await requireAuth();
  return getHostVans(params?.id);
};

const HostVanDetails = () => {
  const currVan = useLoaderData();

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currVan.type}`}>
              {currVan.type}
            </i>
            <h3>{currVan.name}</h3>
            <h4>${currVan.price}/day</h4>
          </div>
        </div>
        <nav className="host-van-detail-nav">
          <NavLink
            to=""
            end
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={currVan} />
      </div>
    </section>
  );
};

export default HostVanDetails;
