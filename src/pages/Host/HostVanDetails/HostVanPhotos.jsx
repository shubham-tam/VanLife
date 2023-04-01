import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const currVan = useOutletContext();

  return (
    <>
      <img src={currVan?.imageUrl} className="host-van-detail-image" />
    </>
  );
};

export default HostVanPhotos;
