
import React from 'react';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <header style={{ backgroundColor: '#003366', padding: '20px', color: '#fff' }}>
        <h1>Pacific Customs Agencies (Fiji) Limited</h1>
      </header>
      <main>
        <section>
          <h2>Who We Are</h2>
          <p>Pacific Customs Agencies is your trusted partner for customs clearance in Fiji.</p>
        </section>
        <section>
          <h2>Our Services</h2>
          <ul>
            <li>Import & Export Customs Clearance</li>
            <li>Freight Forwarding</li>
            <li>Logistics & Transport</li>
            <li>Permit & License Coordination</li>
          </ul>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>Email: info@pacificcustoms.com.fj</p>
          <p>Phone: +679 337 2901</p>
          <a href="https://www.facebook.com/pacificcustomsagencies" target="_blank" rel="noopener noreferrer">
            Visit us on Facebook
          </a>
        </section>
      </main>
      <footer style={{ backgroundColor: '#003366', padding: '10px', color: '#fff', marginTop: '30px', textAlign: 'center' }}>
        &copy; 2025 Pacific Customs Agencies (Fiji) Limited
      </footer>
    </div>
  );
}

export default App;
