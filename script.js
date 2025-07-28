/* style.css */

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background-color: #ffffff;
  color: #333;
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.top-bar {
  background-color: #7034a2;
  padding: 1rem;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pi-icon {
  margin-left: 0.5rem;
}

.welcome {
  margin-top: 1rem;
  padding: 1rem;
  font-size: 1.1rem;
  color: #f7a600;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.welcome .logo {
  width: 24px;
  margin-right: 0.5rem;
}

.core h3 {
  margin-top: 1rem;
  font-weight: 600;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
  max-width: 600px;
  margin: auto;
}

.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #7034a2;
  border: 1px solid #7034a2;
  border-radius: 12px;
  padding: 1rem;
  transition: transform 0.2s ease;
}

.app:hover {
  transform: scale(1.05);
}

.app img {
  width: 48px;
  height: 48px;
  margin-bottom: 0.5rem;
}

.app p {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 500;
}

.privacy {
  margin: 2rem auto 1rem;
  color: #7034a2;
  font-size: 1rem;
  text-decoration: underline;
  display: inline-block;
}

footer {
  margin-top: auto;
  background-color: #7034a2;
  padding: 1rem;
  color: white;
  font-size: 0.9rem;
}

footer a {
  color: white;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.footer-icon {
  font-size: 1.2rem;
}

@media screen and (max-width: 480px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
    padding: 0.5rem;
  }

  .app {
    padding: 0.75rem;
  }

  .app img {
    width: 40px;
    height: 40px;
  }

  .privacy {
    font-size: 0.9rem;
  }

  footer {
    font-size: 0.8rem;
  }
}
