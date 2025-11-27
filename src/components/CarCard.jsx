import React from "react";

export default function CarCard({ car, onReadMore }) {
  return (
    <div className="car-card">
      <img src={car.image} alt={`${car.brand} ${car.model}`} />
      <div className="car-info">
        <h3>
          {car.brand} {car.model}
        </h3>
        <p className="price">{car.price.toLocaleString("da-DK")} kr.</p>
        <p className="meta">
          {car.year} · {car.fuel} · {car.gearbox} ·{" "}
          {car.km.toLocaleString("da-DK")} km
        </p>
        <p className="desc">{car.description}</p>
        <button className="btn" onClick={() => onReadMore?.(car)}>
          Læs mere
        </button>
      </div>
    </div>
  );
}
