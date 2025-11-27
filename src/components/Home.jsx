/* import React from 'react'

const Home = () => {
    return (
        <div>App</div>
    )
} */

    import React from "react";
    import { cars } from "../data/cars.js";
    import CarCard from "../components/CarCard.jsx";
    import Testimonials from "../components/Testimonial.jsx";
    import { useNavigate } from "react-router-dom";

    export default function Home() {
      const navigate = useNavigate();
      const featured = cars.slice(0, 3);

      return (
        <>
          <section className="hero">
            <div className="hero-content container">
              <h1>Din næste bil venter her</h1>
              <p>Grundlagt i 1998 med fokus på kvalitet, service og tryghed.</p>
              <button
                className="btn btn-primary"
                onClick={() => navigate("/biler")}
              >
                Se vores biler
              </button>
            </div>
          </section>

          <section className="container about">
            <h2>Om os</h2>
            <p>
              Vi er din lokale bilforhandler i Midtjylland. Pålidelige biler,
              fair priser og personlig rådgivning. Besøg vores showroom og find
              den bil, der passer perfekt til dig.
            </p>
          </section>

          <section className="container featured">
            <h2>Udvalgte biler</h2>
            <div className="grid">
              {featured.map((car) => (
                <CarCard
                  key={car.id}
                  car={car}
                  onReadMore={() => navigate("/biler")}
                />
              ))}
            </div>
          </section>

          <Testimonials />
        </>
      );
    }
