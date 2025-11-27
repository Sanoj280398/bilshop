import React, { useMemo, useState } from "react";
import { cars } from "../data/cars.js";
import CarCard from "../components/CarCard.jsx";
import Filters from "../components/Filters.jsx";

export default function Catalog() {
  const [filters, setFilters] = useState({
    brand: "",
    fuel: "",
    gearbox: "",
    maxPrice: "",
    minYear: "",
  });

  const brands = useMemo(() => [...new Set(cars.map((c) => c.brand))], []);
  const filtered = useMemo(() => {
    return cars.filter((c) => {
      const byBrand = !filters.brand || c.brand === filters.brand;
      const byFuel = !filters.fuel || c.fuel === filters.fuel;
      const byGear = !filters.gearbox || c.gearbox === filters.gearbox;
      const byPrice = !filters.maxPrice || c.price <= Number(filters.maxPrice);
      const byYear = !filters.minYear || c.year >= Number(filters.minYear);
      return byBrand && byFuel && byGear && byPrice && byYear;
    });
  }, [filters]);

  const [active, setActive] = useState(null);

  return (
    <section className="container catalog">
      <h1>Bilkatalog</h1>
      <div className="catalog-layout">
        <Filters filters={filters} setFilters={setFilters} brands={brands} />
        <div className="grid">
          {filtered.map((car) => (
            <CarCard key={car.id} car={car} onReadMore={setActive} />
          ))}
        </div>
      </div>

      {active && (
        <div className="modal-backdrop" onClick={() => setActive(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img src={active.image} alt={`${active.brand} ${active.model}`} />
            <div className="modal-info">
              <h2>
                {active.brand} {active.model}
              </h2>
              <p className="price">
                {active.price.toLocaleString("da-DK")} kr.
              </p>
              <ul className="specs">
                <li>Årgang: {active.year}</li>
                <li>Km: {active.km.toLocaleString("da-DK")}</li>
                <li>Brændstof: {active.fuel}</li>
                <li>Gear: {active.gearbox}</li>
              </ul>
              <p>{active.description}</p>
              <div className="modal-actions">
                <a className="btn" href="/kontakt">
                  Book prøvekørsel
                </a>
                <button
                  className="btn btn-ghost"
                  onClick={() => setActive(null)}
                >
                  Luk
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
