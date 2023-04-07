import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { getVans } from "../../../api";

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans();
        setVans(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, []);

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = displayedVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        to={van.id}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
      >
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  function genNewSearchParamString(key, value) {
    const sp = new URLSearchParams(searchParams);
    if (value === null) {
      sp.delete(key);
    } else {
      sp.set(key, value);
    }
    return `?${sp.toString()}`;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1> There was an error: {error.message}</h1>;
  }
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        {/* /using Links */}

        {/* <Link to="?type=simple" className="van-type simple">
          Simple
        </Link>
        <Link to="?type=rugged" className="van-type rugged">
          Rugged
        </Link>
        <Link to="?type=luxury" className="van-type luxury">
          Luxury
        </Link>
        <Link to="." className="van-type clear-filters">
          Clear All
        </Link> */}

        {/* /using Search Params */}

        {/* <button
          className="van-type simple"
          onClick={() => setSearchParams({ type: "simple" })}
        >
          Simple
        </button>
        <button
          className="van-type rugged"
          onClick={() => setSearchParams({ type: "rugged" })}
        >
          Rugged
        </button>
        <button
          className="van-type luxury"
          onClick={() => setSearchParams({ type: "luxury" })}
        >
          Luxury
        </button>
        <button
          className="van-type clear-filters"
          onClick={() => setSearchParams({})}
        >
          Clear All
        </button> */}

        {/* Using URLSearchParams */}
        <Link
          to={genNewSearchParamString("type", "simple")}
          className={`van-type simple van-type-style
          ${typeFilter === "simple" && "selected"}
          `}
        >
          Simple
        </Link>
        <Link
          to={genNewSearchParamString("type", "rugged")}
          className={`van-type rugged van-type-style
          ${typeFilter === "rugged" && "selected"}`}
        >
          Rugged
        </Link>
        <Link
          to={genNewSearchParamString("type", "luxury")}
          className={`van-type luxury  van-type-style
          ${typeFilter === "luxury" && "selected"}
          `}
        >
          Luxury
        </Link>
        {typeFilter != null && (
          <Link
            to={genNewSearchParamString("type", null)}
            className="van-type clear-filters van-type-style"
          >
            Clear All
          </Link>
        )}
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
