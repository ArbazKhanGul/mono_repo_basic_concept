import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './App.css';
import logo from './logo.svg';

function App() {
  const menuRef = useRef(null);

  useEffect(() => {
    // GSAP animation for menu items
    const menuItems = menuRef.current.querySelectorAll('.menu-item');
    gsap.from(menuItems, {
      opacity: 0,
      x: -50,
      stagger: 0.2,
      duration: 1,
      ease: 'power2.out',
    });

    // Scroll listener to highlight current section in menu
    const sections = document.querySelectorAll('section');
    const menuLinks = menuRef.current.querySelectorAll('.menu-link');

    const handleScroll = () => {
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
      });

      menuLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.classList.contains(current)) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="menu" ref={menuRef}>
          <a href="#home" className="menu-link active">
            Home
          </a>
          <a href="#about" className="menu-link">
            About
          </a>
          <a href="#contact" className="menu-link">
            Contact
          </a>
          <a href="#help" className="menu-link">
            Help
          </a>
        </nav>
      </header>
      <main>
        <section id="home" className="section">
          <h2>Home Section</h2>
          <p>Content for Home Section.</p>
        </section>
        <section id="about" className="section">
          <h2>About Section</h2>
          <p>Content for About Section.</p>
        </section>
        <section id="contact" className="section">
          <h2>Contact Section</h2>
          <p>Content for Contact Section.</p>
        </section>
        <section id="help" className="section">
          <h2>Help Section</h2>
          <p>Content for Help Section.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
