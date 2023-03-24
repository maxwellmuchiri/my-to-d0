import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3">
        © {new Date().getFullYear()} My To-Dos
      </div>
    </footer>
  );
}

export default Footer;
