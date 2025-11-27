import React from "react";

export default function Filters({ filters, setFilters, brands }) {
  const update = (key) => (e) =>
    setFilters({ ...filters, [key]: e.target.value });
  return (
    <aside className="filters">
      <h4>Filtrer</h4>
      <label>
        Mærke
        <select value={filters.brand} onChange={update("brand")}>
          <option value="">Alle</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </label>
      <label>
        Brændstof
        <select value={filters.fuel} onChange={update("fuel")}>
          <option value="">Alle</option>
          <option>Benzin</option>
          <option>Diesel</option>
          <option>Hybrid</option>
          <option>El</option>
        </select>
      </label>
      <label>
        Gear
        <select value={filters.gearbox} onChange={update("gearbox")}>
          <option value="">Alle</option>
          <option>Manuel</option>
          <option>Automatisk</option>
        </select>
      </label>
      <label>
        Pris max
        <input
          type="number"
          placeholder="fx 200000"
          value={filters.maxPrice}
          onChange={update("maxPrice")}
        />
      </label>
      <label>
        Årgang min
        <input
          type="number"
          placeholder="fx 2017"
          value={filters.minYear}
          onChange={update("minYear")}
        />
      </label>
    </aside>
  );
}
