import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4>Kontakt</h4>
          <p>+45 12 34 56 78</p>
          <p>info@biler.dk</p>
          <p>Viborg, Midtjylland</p>
        </div>
        <div>
          <h4>Åbningstider</h4>
          <p>Man–Fre: 09:00–17:00</p>
          <p>Lør: 10:00–14:00</p>
        </div>
        <div>
          <h4>Følg os</h4>
          <p>Facebook · Instagram · LinkedIn</p>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Bilforhandler
      </div>
    </footer>
  );
}
