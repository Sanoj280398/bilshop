import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [booking, setBooking] = useState({ car: "", date: "", time: "" });
  const [status, setStatus] = useState("");

  const update = (obj, set) => (key) => (e) =>
    set({ ...obj, [key]: e.target.value });

  const submitContact = (e) => {
    e.preventDefault();
    setStatus("Tak for din besked! Vi vender tilbage hurtigst muligt.");
    setForm({ name: "", email: "", message: "" });
  };

  const submitBooking = (e) => {
    e.preventDefault();
    setStatus("Prøvekørsel booket! Du modtager en bekræftelse på email.");
    setBooking({ car: "", date: "", time: "" });
  };

  return (
    <section className="container contact">
      <h1>Kontakt & Booking</h1>

      <div className="contact-grid">
        <form className="card" onSubmit={submitContact}>
          <h2>Kontaktformular</h2>
          <label>
            Navn
            <input
              value={form.name}
              onChange={update(form, setForm)("name")}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={form.email}
              onChange={update(form, setForm)("email")}
              required
            />
          </label>
          <label>
            Besked
            <textarea
              value={form.message}
              onChange={update(form, setForm)("message")}
              required
            />
          </label>
          <button className="btn btn-primary" type="submit">
            Send besked
          </button>
        </form>

        <form className="card" onSubmit={submitBooking}>
          <h2>Book prøvekørsel</h2>
          <label>
            Vælg bil
            <select
              value={booking.car}
              onChange={update(booking, setBooking)("car")}
              required
            >
              <option value="">— Vælg —</option>
              <option>Ford Fiesta</option>
              <option>Audi A5</option>
              <option>Toyota Yaris</option>
              <option>BMW X5</option>
              <option>Volkswagen Golf</option>
            </select>
          </label>
          <label>
            Dato
            <input
              type="date"
              value={booking.date}
              onChange={update(booking, setBooking)("date")}
              required
            />
          </label>
          <label>
            Tidspunkt
            <input
              type="time"
              value={booking.time}
              onChange={update(booking, setBooking)("time")}
              required
            />
          </label>
          <button className="btn" type="submit">
            Book prøvekørsel
          </button>
        </form>

        <div className="card info">
          <h2>Adresse & Åbningstider</h2>
          <p>
            <strong>Adresse:</strong> Viborg, Region Midtjylland
          </p>
          <p>
            <strong>Telefon:</strong> +45 12 34 56 78
          </p>
          <p>
            <strong>Email:</strong> info@biler.dk
          </p>
          <p>
            <strong>Åbningstider:</strong> Man–Fre 09:00–17:00 · Lør 10:00–14:00
          </p>
          <div className="map">
            <iframe
              title="Kort"
              src="https://maps.google.com/maps?q=Viborg%20Midtjylland&t=&z=12&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            />
          </div>
          <details className="faq">
            <summary>FAQ</summary>
            <ul>
              <li>
                Hvordan foregår en prøvekørsel? — Vi aftaler tid, du får en
                gennemgang og kan prøve bilen i ro og mag.
              </li>
              <li>
                Tilbyder I finansiering? — Ja, vi samarbejder med flere
                finansieringspartnere.
              </li>
              <li>
                Kan jeg bytte min gamle bil? — Ja, vi vurderer din bil og giver
                et byttepris-forslag.
              </li>
            </ul>
          </details>
        </div>
      </div>

      {status && <div className="toast">{status}</div>}
    </section>
  );
}
