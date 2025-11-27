import React from "react";

const demo = [
  { name: "Line H.", rating: 5, text: "Smidig proces og hjælpsomt personale." },
  { name: "Mikkel J.", rating: 5, text: "Den bedste forhandler i området." },
  { name: "Kirsten A.", rating: 4, text: "Fantastisk oplevelse og nemt køb." },
];

export default function Testimonials() {
  return (
    <section className="testimonials container">
      <h2>Kundeanmeldelser</h2>
      <div className="testimonial-grid">
        {demo.map((t, i) => (
          <div key={i} className="testimonial">
            <div className="stars">
              {"★".repeat(t.rating)}
              {"☆".repeat(5 - t.rating)}
            </div>
            <p className="quote">“{t.text}”</p>
            <p className="name">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
