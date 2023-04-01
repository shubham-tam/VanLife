import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const currVan = useOutletContext();

  return (
    <>
      <h3 className="host-van-price">
        ${currVan?.price}
        <span>/day</span>
      </h3>
    </>
  );
};

export default HostVanPricing;
