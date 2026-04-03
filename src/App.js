import React from 'react';

const config = {
  development: { color: '#28a745', label: 'DEVELOPMENT' },
  staging: { color: '#fd7e14', label: 'STAGING' },
  production: { color: '#0078d4', label: 'PRODUCTION' }
};

const env = process.env.REACT_APP_ENV || 'development';
const current = config[env] || config.development;

function App() {
  const products = [
    { id: 1, name: 'Produit A', prix: 100 },
    { id: 2, name: 'Produit B', prix: 200 },
    { id: 3, name: 'Produit C', prix: 300 }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: current.color,
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <header style={{
        padding: '20px 40px',
        background: 'rgba(0,0,0,0.2)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h2>🔒 Lab 7 — DevSecOps CI/CD</h2>
        <span style={{
          background: 'rgba(255,255,255,0.2)',
          padding: '6px 16px',
          borderRadius: '20px'
        }}>v1.0.0</span>
      </header>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 70px)'
      }}>
        <div style={{
          textAlign: 'center',
          padding: '50px',
          background: 'rgba(255,255,255,0.15)',
          borderRadius: '20px',
          minWidth: '400px'
        }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
            {current.label}
          </h1>
          <p>✅ Déployé via GitHub Actions</p>
          <p>🔒 DevSecOps activé</p>
          <p>🛡️ Security Scanning</p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px',
            marginTop: '30px'
          }}>
            {products.map(p => (
              <div key={p.id} style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '16px',
                borderRadius: '10px'
              }}>
                <div style={{ fontWeight: 'bold' }}>{p.name}</div>
                <div style={{ fontSize: '1.2rem' }}>{p.prix} MAD</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
